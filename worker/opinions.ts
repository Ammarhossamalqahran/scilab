import type { D1Database } from './types';
import { notifyAdmin } from './adminPush';
import { ensureSchema, ipHash } from './leaderboard';
import { ensurePhotoSchema } from './photo';

// Student opinions. A registered player (same id as the leaderboard) can send one opinion. It stays
// private until the owner approves it in /admin. Public output is only: name, avatar, an APPROVED photo
// (same rule as the leaderboard) and the text. Email is never collected or shown.
export const MIN_LEN = 10;
export const MAX_LEN = 300;
const PER_IP_PER_HOUR = 5;
const PER_PLAYER_PER_DAY = 3;
const PLAYER_RE = /^[0-9a-f-]{36}$/;
const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });

export async function ensureOpinionSchema(db: D1Database): Promise<void> {
  await db.prepare("CREATE TABLE IF NOT EXISTS opinions (id INTEGER PRIMARY KEY AUTOINCREMENT, player_id TEXT NOT NULL, body TEXT NOT NULL, status TEXT NOT NULL, created INTEGER NOT NULL)").run();
  await db.prepare('CREATE INDEX IF NOT EXISTS opinions_player ON opinions (player_id, created)').run();
  await db.prepare('CREATE TABLE IF NOT EXISTS code_rl (kind TEXT NOT NULL, ip TEXT NOT NULL, at INTEGER NOT NULL)').run();
}

export function cleanOpinion(v: unknown): string | null {
  if (typeof v !== 'string') return null;
  const t = v.replace(/\s+/g, ' ').trim();
  if (t.length < MIN_LEN || t.length > MAX_LEN) return null;
  if (/https?:\/\/|www\./i.test(t)) return null; // no links
  return t;
}

export async function handleOpinion(request: Request, db: D1Database, url: URL, now = Date.now()): Promise<Response> {
  await ensureSchema(db);
  await ensurePhotoSchema(db);
  await ensureOpinionSchema(db);

  // Public: approved opinions, newest first.
  if (url.pathname === '/api/opinions' && request.method === 'GET') {
    const r = await db.prepare("SELECT o.body AS text, o.created AS at, p.nick AS nick, p.avatar AS avatar, (SELECT ph.pub FROM photos ph WHERE ph.player_id = p.id AND ph.status = 'approved') AS photo FROM opinions o JOIN players p ON p.id = o.player_id WHERE o.status = 'approved' ORDER BY o.created DESC LIMIT 30").all<{ text: string; at: number; nick: string; avatar: string | null; photo: string | null }>();
    return new Response(JSON.stringify({ opinions: r.results }), { headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'public, max-age=60' } });
  }

  // The player's own latest opinion status.
  if (url.pathname === '/api/opinion/mine' && request.method === 'GET') {
    const player = url.searchParams.get('player') ?? '';
    if (!PLAYER_RE.test(player)) return json({ error: 'bad_request' }, 400);
    const row = await db.prepare('SELECT status FROM opinions WHERE player_id = ? ORDER BY created DESC LIMIT 1').bind(player).first<{ status: string }>();
    return json({ status: row?.status ?? 'none' });
  }

  if (url.pathname === '/api/opinion' && request.method === 'POST') {
    const ip = await ipHash(request);
    const n = await db.prepare("SELECT COUNT(*) AS n FROM code_rl WHERE kind = 'opinion' AND ip = ? AND at > ?").bind(ip, now - 3600_000).first<{ n: number }>();
    if ((n?.n ?? 0) >= PER_IP_PER_HOUR) return json({ error: 'rate_limited' }, 429);
    await db.prepare("INSERT INTO code_rl (kind, ip, at) VALUES ('opinion', ?, ?)").bind(ip, now).run();
    const body = await request.json().catch(() => null) as { player?: unknown; text?: unknown } | null;
    const player = typeof body?.player === 'string' && PLAYER_RE.test(body.player) ? body.player : '';
    if (!player) return json({ error: 'bad_request' }, 400);
    const exists = await db.prepare('SELECT id FROM players WHERE id = ?').bind(player).first();
    if (!exists) return json({ error: 'no_profile' }, 404);
    const text = cleanOpinion(body?.text);
    if (!text) return json({ error: 'bad_text' }, 400);
    const pending = await db.prepare("SELECT id FROM opinions WHERE player_id = ? AND status = 'pending'").bind(player).first();
    if (pending) return json({ error: 'already_pending' }, 409);
    const day = await db.prepare('SELECT COUNT(*) AS n FROM opinions WHERE player_id = ? AND created > ?').bind(player, now - 86400_000).first<{ n: number }>();
    if ((day?.n ?? 0) >= PER_PLAYER_PER_DAY) return json({ error: 'rate_limited' }, 429);
    await db.prepare("INSERT INTO opinions (player_id, body, status, created) VALUES (?, ?, 'pending', ?)").bind(player, text, now).run();
    await notifyAdmin(db, 'review', now);
    return json({ ok: true, status: 'pending' });
  }
  return json({ error: 'not_found' }, 404);
}

// Owner side (called from admin.ts after the key check).
export async function listOpinions(db: D1Database) {
  await ensureSchema(db);
  await ensureOpinionSchema(db);
  const r = await db.prepare("SELECT o.id AS id, o.body AS text, o.status AS status, o.created AS created, p.nick AS nick FROM opinions o JOIN players p ON p.id = o.player_id WHERE o.status IN ('pending','approved') ORDER BY (o.status = 'pending') DESC, o.created DESC LIMIT 100").all<{ id: number; text: string; status: string; created: number; nick: string }>();
  return r.results;
}
export async function decideOpinion(db: D1Database, id: unknown, action: unknown): Promise<boolean> {
  await ensureOpinionSchema(db);
  if (typeof id !== 'number' || !Number.isInteger(id) || typeof action !== 'string') return false;
  if (action === 'approve') return ((await db.prepare("UPDATE opinions SET status = 'approved' WHERE id = ? AND status = 'pending'").bind(id).run()).meta?.changes ?? 0) > 0;
  if (action === 'reject' || action === 'remove') return ((await db.prepare("UPDATE opinions SET status = 'rejected' WHERE id = ? AND status IN ('pending','approved')").bind(id).run()).meta?.changes ?? 0) > 0;
  return false;
}
