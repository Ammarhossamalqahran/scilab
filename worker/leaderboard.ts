import type { D1Database } from './types';

// Rules the server enforces. The game itself runs in the browser, so these checks make cheating
// harder, not impossible: a server-issued game ticket, minimum/maximum play time, a cap on answers per
// second, a score that must match the answer count, one-time tickets and per-IP rate limits.
const GAME_SECONDS = 60;
const MIN_ELAPSED = 48;           // seconds between ticket and submit
const MAX_ELAPSED = 180;
const MIN_SECONDS_PER_ANSWER = 1.3; // a human cannot read a photo and tap faster than this
const BONUS_STEP = 2; const BONUS_MAX_STREAK_STEPS = 5; // mirrors the client: 10 + min(streak-1, 5) * 2 per answer
const STARTS_PER_10_MIN = 60; // mobile networks put many students behind one IP
const SUBMITS_PER_HOUR = 8;
const NICK_RE = /^[\p{L}\p{N}][\p{L}\p{N} _\-.]{1,15}$/u;

const json = (data: unknown, status = 200, extra: Record<string, string> = {}) =>
  new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', ...extra } });

let ready: Promise<void> | null = null;
export function ensureSchema(db: D1Database): Promise<void> {
  ready ??= db.batch([
    db.prepare('CREATE TABLE IF NOT EXISTS players (id TEXT PRIMARY KEY, nick TEXT NOT NULL, nick_lc TEXT NOT NULL UNIQUE, created INTEGER NOT NULL)'),
    db.prepare('CREATE TABLE IF NOT EXISTS scores (id INTEGER PRIMARY KEY AUTOINCREMENT, player_id TEXT NOT NULL, score INTEGER NOT NULL, correct INTEGER NOT NULL, streak INTEGER NOT NULL, at INTEGER NOT NULL)'),
    db.prepare('CREATE INDEX IF NOT EXISTS scores_at ON scores (at)'),
    db.prepare('CREATE INDEX IF NOT EXISTS scores_player ON scores (player_id)'),
    db.prepare('CREATE TABLE IF NOT EXISTS games (id TEXT PRIMARY KEY, started INTEGER NOT NULL, used INTEGER NOT NULL DEFAULT 0, ip TEXT NOT NULL)'),
  ]).then(async () => {
    for (const col of ['code_hash TEXT', 'avatar TEXT']) await db.prepare(`ALTER TABLE players ADD COLUMN ${col}`).run().then(() => undefined, () => undefined); // already there
  }).catch((e) => { ready = null; throw e; });
  return ready;
}

export async function ipHash(request: Request): Promise<string> {
  const ip = request.headers.get('cf-connecting-ip') ?? 'unknown';
  const data = new TextEncoder().encode(`scilab-rate:${ip}`);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return [...new Uint8Array(digest)].slice(0, 12).map((b) => b.toString(16).padStart(2, '0')).join('');
}

export function maxScoreFor(correct: number): number {
  // Best case for `correct` answers in a row: 10, 12, 14, 16, 18, 20, 20, ...
  let total = 0;
  for (let i = 0; i < correct; i++) total += 10 + Math.min(i, BONUS_MAX_STREAK_STEPS) * BONUS_STEP;
  return total;
}

export async function handleLeaderboard(request: Request, db: D1Database, url: URL, now = Date.now()): Promise<Response> {
  await ensureSchema(db);

  if (url.pathname === '/api/leaderboard' && request.method === 'GET') {
    const period = url.searchParams.get('period') === 'all' ? 'all' : 'week';
    const since = period === 'week' ? now - 7 * 86400_000 : 0;
    const rows = await db.prepare(
      'SELECT p.nick AS nick, p.avatar AS avatar, MAX(s.score) AS score FROM scores s JOIN players p ON p.id = s.player_id WHERE s.at >= ? GROUP BY s.player_id ORDER BY score DESC, MIN(s.at) ASC LIMIT 20',
    ).bind(since).all<{ nick: string; avatar: string | null; score: number }>();
    return json({ period, entries: rows.results }, 200, { 'cache-control': 'public, max-age=30' });
  }

  if (url.pathname === '/api/nick' && request.method === 'GET') {
    // Is this name free for this player? Final check still happens when a score is posted.
    const n = (url.searchParams.get('n') ?? '').trim().replace(/\s+/g, ' ');
    const player = url.searchParams.get('player') ?? '';
    if (!NICK_RE.test(n)) return json({ available: false, reason: 'bad_nick' });
    const owner = await db.prepare('SELECT id FROM players WHERE nick_lc = ?').bind(n.toLowerCase()).first<{ id: string }>();
    return json({ available: !owner || owner.id === player });
  }

  if (url.pathname === '/api/game/start' && request.method === 'POST') {
    const ip = await ipHash(request);
    const recent = await db.prepare('SELECT COUNT(*) AS n FROM games WHERE ip = ? AND started > ?').bind(ip, now - 600_000).first<{ n: number }>();
    if ((recent?.n ?? 0) >= STARTS_PER_10_MIN) return json({ error: 'rate_limited' }, 429);
    const id = crypto.randomUUID();
    await db.batch([
      db.prepare('INSERT INTO games (id, started, ip) VALUES (?, ?, ?)').bind(id, now, ip),
      db.prepare('DELETE FROM games WHERE started < ?').bind(now - 86400_000),
    ]);
    return json({ ticket: id, seconds: GAME_SECONDS });
  }

  if (url.pathname === '/api/score' && request.method === 'POST') {
    let body: Record<string, unknown>;
    try { body = (await request.json()) as Record<string, unknown>; } catch { return json({ error: 'bad_json' }, 400); }
    const ticket = typeof body.ticket === 'string' ? body.ticket : '';
    const player = typeof body.player === 'string' ? body.player : '';
    const nick = typeof body.nick === 'string' ? body.nick.trim().replace(/\s+/g, ' ') : '';
    const score = Number(body.score); const correct = Number(body.correct); const streak = Number(body.streak);
    if (!/^[0-9a-f-]{36}$/.test(ticket) || !/^[0-9a-f-]{36}$/.test(player)) return json({ error: 'bad_request' }, 400);
    if (!NICK_RE.test(nick)) return json({ error: 'bad_nick' }, 400);
    if (![score, correct, streak].every((n) => Number.isInteger(n) && n >= 0)) return json({ error: 'bad_numbers' }, 400);
    if (streak > correct || correct > 60 || score > maxScoreFor(correct) || score < correct * 10) return json({ error: 'implausible' }, 422);

    const game = await db.prepare('SELECT started, used FROM games WHERE id = ?').bind(ticket).first<{ started: number; used: number }>();
    if (!game || game.used) return json({ error: 'bad_ticket' }, 403);
    const elapsed = (now - game.started) / 1000;
    if (elapsed < MIN_ELAPSED || elapsed > MAX_ELAPSED) return json({ error: 'bad_timing' }, 422);
    if (correct * MIN_SECONDS_PER_ANSWER > elapsed) return json({ error: 'implausible' }, 422);

    const hourly = await db.prepare('SELECT COUNT(*) AS n FROM scores WHERE player_id = ? AND at > ?').bind(player, now - 3600_000).first<{ n: number }>();
    if ((hourly?.n ?? 0) >= SUBMITS_PER_HOUR) return json({ error: 'rate_limited' }, 429);

    const used = await db.prepare('UPDATE games SET used = 1 WHERE id = ? AND used = 0').bind(ticket).run() as unknown as { meta?: { changes?: number } };
    if (used.meta && used.meta.changes === 0) return json({ error: 'bad_ticket' }, 403);

    const lc = nick.toLowerCase();
    const owner = await db.prepare('SELECT id FROM players WHERE nick_lc = ?').bind(lc).first<{ id: string }>();
    if (owner && owner.id !== player) return json({ error: 'nick_taken' }, 409);
    const mine = await db.prepare('SELECT id FROM players WHERE id = ?').bind(player).first<{ id: string }>();
    const statements = [
      mine
        ? db.prepare('UPDATE players SET nick = ?, nick_lc = ? WHERE id = ?').bind(nick, lc, player)
        : db.prepare('INSERT INTO players (id, nick, nick_lc, created) VALUES (?, ?, ?, ?)').bind(player, nick, lc, now),
      db.prepare('INSERT INTO scores (player_id, score, correct, streak, at) VALUES (?, ?, ?, ?, ?)').bind(player, score, correct, streak, now),
    ];
    try { await db.batch(statements); } catch { return json({ error: 'nick_taken' }, 409); }
    const rank = await db.prepare('SELECT COUNT(*) + 1 AS rank FROM (SELECT MAX(score) AS m FROM scores WHERE at >= ? GROUP BY player_id) WHERE m > ?').bind(now - 7 * 86400_000, score).first<{ rank: number }>();
    return json({ ok: true, weekRank: rank?.rank ?? null });
  }

  return json({ error: 'not_found' }, 404);
}

// Monthly cleanup (cron on the 1st). Before wiping, the previous month's top 50 players (name, best
// score, date) are copied to leaderboard_archive so giveaway winners can still be looked up. Then all
// scores and game tickets are deleted. Nicknames (players) and push subscriptions are kept.
export async function purgeLeaderboard(db: D1Database, now = Date.now()): Promise<void> {
  await ensureSchema(db);
  const label = new Date(now - 86400_000).toISOString().slice(0, 7); // the month that just ended
  await db.batch([
    db.prepare('CREATE TABLE IF NOT EXISTS leaderboard_archive (month TEXT NOT NULL, nick TEXT NOT NULL, score INTEGER NOT NULL, at INTEGER NOT NULL)'),
  ]);
  await db.batch([
    db.prepare('DELETE FROM leaderboard_archive WHERE month = ?').bind(label),
    db.prepare('INSERT INTO leaderboard_archive (month, nick, score, at) SELECT ?, p.nick, MAX(s.score), MIN(s.at) FROM scores s JOIN players p ON p.id = s.player_id GROUP BY s.player_id ORDER BY MAX(s.score) DESC, MIN(s.at) ASC LIMIT 50').bind(label),
    db.prepare('DELETE FROM scores'),
    db.prepare('DELETE FROM games'),
  ]);
}
