import type { D1Database } from './types';
import { ensureSchema, ipHash } from './leaderboard';

// POST /api/profile {player, nick?, avatar?}: change the name and/or avatar of an existing player.
// Same trust level as posting a score: whoever holds the player id (kept in the browser) can edit it.
const NICK_RE = /^[\p{L}\p{N}][\p{L}\p{N} _\-.]{1,15}$/u;
export const AVATAR_RE = /^[a-z0-9-]{1,20}$/;
const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });

export async function handleProfile(request: Request, db: D1Database, now = Date.now()): Promise<Response> {
  if (request.method !== 'POST') return json({ error: 'not_found' }, 404);
  await ensureSchema(db);
  await db.prepare('CREATE TABLE IF NOT EXISTS code_rl (kind TEXT NOT NULL, ip TEXT NOT NULL, at INTEGER NOT NULL)').run();
  const ip = await ipHash(request);
  const n = await db.prepare("SELECT COUNT(*) AS n FROM code_rl WHERE kind = 'profile' AND ip = ? AND at > ?").bind(ip, now - 3600_000).first<{ n: number }>();
  if ((n?.n ?? 0) >= 60) return json({ error: 'rate_limited' }, 429);
  await db.prepare("INSERT INTO code_rl (kind, ip, at) VALUES ('profile', ?, ?)").bind(ip, now).run();
  const body = await request.json().catch(() => null) as { player?: unknown; nick?: unknown; avatar?: unknown } | null;
  const player = typeof body?.player === 'string' && /^[0-9a-f-]{36}$/.test(body.player) ? body.player : '';
  if (!player) return json({ error: 'bad_request' }, 400);
  const row = await db.prepare('SELECT nick FROM players WHERE id = ?').bind(player).first<{ nick: string }>();
  if (!row) return json({ error: 'no_profile' }, 404);
  if (typeof body?.avatar === 'string') {
    if (!AVATAR_RE.test(body.avatar)) return json({ error: 'bad_avatar' }, 400);
    await db.prepare('UPDATE players SET avatar = ? WHERE id = ?').bind(body.avatar, player).run();
  }
  let nick = row.nick;
  if (typeof body?.nick === 'string') {
    const clean = body.nick.trim().replace(/\s+/g, ' ');
    if (!NICK_RE.test(clean)) return json({ error: 'bad_nick' }, 400);
    if (clean !== row.nick) {
      const taken = await db.prepare('SELECT id FROM players WHERE nick_lc = ? AND id != ?').bind(clean.toLowerCase(), player).first();
      if (taken) return json({ error: 'nick_taken' }, 409);
      try { await db.prepare('UPDATE players SET nick = ?, nick_lc = ? WHERE id = ?').bind(clean, clean.toLowerCase(), player).run(); } catch { return json({ error: 'nick_taken' }, 409); }
      nick = clean;
    }
  }
  return json({ ok: true, nick });
}
