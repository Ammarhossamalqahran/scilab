import type { D1Database } from './types';
import { ensureSchema, ipHash } from './leaderboard';

// Personal recovery code. Only a salted hash of the code is stored, so nobody (including the owner)
// can read it back. A lost code cannot be recovered: there is no phone or email to send it to.
const ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'; // no 0/O/1/I/L
const NICK_RE = /^[\p{L}\p{N}][\p{L}\p{N} _\-.]{1,15}$/u;
const CREATES_PER_HOUR = 30;   // per IP (many students can share one mobile IP)
const FAILS_PER_10_MIN = 15;   // wrong codes per IP
const FAILS_GLOBAL_PER_HOUR = 300;

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });

let ready: Promise<void> | null = null;
function ensureCodeSchema(db: D1Database): Promise<void> {
  ready ??= ensureSchema(db).then(async () => {
    await db.batch([
      db.prepare('CREATE TABLE IF NOT EXISTS code_rl (kind TEXT NOT NULL, ip TEXT NOT NULL, at INTEGER NOT NULL)'),
      db.prepare('CREATE TABLE IF NOT EXISTS kv (k TEXT PRIMARY KEY, v TEXT NOT NULL)'),
    ]);
    await db.prepare('ALTER TABLE players ADD COLUMN code_hash TEXT').run().then(() => undefined, () => undefined); // already there
    await db.prepare('CREATE INDEX IF NOT EXISTS players_code ON players (code_hash)').run();
  }).catch((e) => { ready = null; throw e; });
  return ready;
}

async function salt(db: D1Database): Promise<string> {
  const row = await db.prepare("SELECT v FROM kv WHERE k = 'codesalt'").first<{ v: string }>();
  if (row) return row.v;
  const fresh = [...crypto.getRandomValues(new Uint8Array(16))].map((b) => b.toString(16).padStart(2, '0')).join('');
  await db.prepare("INSERT OR IGNORE INTO kv (k, v) VALUES ('codesalt', ?)").bind(fresh).run();
  return (await db.prepare("SELECT v FROM kv WHERE k = 'codesalt'").first<{ v: string }>())!.v;
}
export const normalizeCode = (c: string) => c.toUpperCase().replace(/[^A-Z0-9]/g, '');
export async function hashCode(db: D1Database, code: string): Promise<string> {
  const d = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`${await salt(db)}:${normalizeCode(code)}`));
  return [...new Uint8Array(d)].map((b) => b.toString(16).padStart(2, '0')).join('');
}
function makeCode(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(10));
  const s = [...bytes].map((b) => ALPHABET[b % ALPHABET.length]).join('');
  return `${s.slice(0, 5)}-${s.slice(5)}`;
}
const count = async (db: D1Database, kind: string, ip: string | null, since: number) =>
  (await (ip === null
    ? db.prepare('SELECT COUNT(*) AS n FROM code_rl WHERE kind = ? AND at > ?').bind(kind, since)
    : db.prepare('SELECT COUNT(*) AS n FROM code_rl WHERE kind = ? AND ip = ? AND at > ?').bind(kind, ip, since)).first<{ n: number }>())?.n ?? 0;
const note = (db: D1Database, kind: string, ip: string, now: number) => db.prepare('INSERT INTO code_rl (kind, ip, at) VALUES (?, ?, ?)').bind(kind, ip, now).run();

// Owner check: which name does this code belong to? (used from /admin to verify a winner)
export async function nickForCode(db: D1Database, code: string): Promise<string | null> {
  await ensureCodeSchema(db);
  const row = await db.prepare('SELECT nick FROM players WHERE code_hash = ?').bind(await hashCode(db, code)).first<{ nick: string }>();
  return row?.nick ?? null;
}

export async function handleCode(request: Request, db: D1Database, url: URL, now = Date.now()): Promise<Response> {
  await ensureCodeSchema(db);
  const ip = await ipHash(request);
  await db.prepare('DELETE FROM code_rl WHERE at < ?').bind(now - 86400_000).run();

  // POST /api/code/create {player, nick}: registers the name (if new) and makes a fresh code. A new code replaces the old one.
  if (url.pathname === '/api/code/create' && request.method === 'POST') {
    const body = await request.json().catch(() => null) as { player?: unknown; nick?: unknown } | null;
    const player = typeof body?.player === 'string' && /^[0-9a-f-]{36}$/.test(body.player) ? body.player : '';
    if (!player) return json({ error: 'bad_request' }, 400);
    if (await count(db, 'create', ip, now - 3600_000) >= CREATES_PER_HOUR) return json({ error: 'rate_limited' }, 429);
    await note(db, 'create', ip, now);
    const existing = await db.prepare('SELECT nick FROM players WHERE id = ?').bind(player).first<{ nick: string }>();
    let nick = existing?.nick ?? '';
    if (!existing) {
      nick = typeof body?.nick === 'string' ? body.nick.trim().replace(/\s+/g, ' ') : '';
      if (!NICK_RE.test(nick)) return json({ error: 'bad_nick' }, 400);
      const taken = await db.prepare('SELECT id FROM players WHERE nick_lc = ?').bind(nick.toLowerCase()).first();
      if (taken) return json({ error: 'nick_taken' }, 409);
    }
    const code = makeCode();
    const h = await hashCode(db, code);
    try {
      await db.prepare(existing
        ? 'UPDATE players SET code_hash = ? WHERE id = ?'
        : 'INSERT INTO players (code_hash, id, nick, nick_lc, created) VALUES (?, ?, ?, ?, ?)')
        .bind(...(existing ? [h, player] : [h, player, nick, nick.toLowerCase(), now])).run();
    } catch { return json({ error: 'nick_taken' }, 409); }
    return json({ code, nick });
  }

  // POST /api/code/restore {code}: returns the player id and name that code belongs to.
  if (url.pathname === '/api/code/restore' && request.method === 'POST') {
    if (await count(db, 'fail', ip, now - 600_000) >= FAILS_PER_10_MIN || await count(db, 'fail', null, now - 3600_000) >= FAILS_GLOBAL_PER_HOUR) return json({ error: 'rate_limited' }, 429);
    const body = await request.json().catch(() => null) as { code?: unknown } | null;
    const code = typeof body?.code === 'string' ? body.code : '';
    if (normalizeCode(code).length !== 10) { await note(db, 'fail', ip, now); return json({ error: 'bad_code' }, 400); }
    const row = await db.prepare('SELECT id, nick FROM players WHERE code_hash = ?').bind(await hashCode(db, code)).first<{ id: string; nick: string }>();
    if (!row) { await note(db, 'fail', ip, now); return json({ error: 'bad_code' }, 404); }
    return json({ player: row.id, nick: row.nick });
  }
  return json({ error: 'not_found' }, 404);
}
