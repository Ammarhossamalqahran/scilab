import type { D1Database } from './types';
import { notifyAdmin } from './adminPush';
import { ensureSchema, ipHash } from './leaderboard';

// Profile photos. The player sees their own photo at once; everyone else only sees it after the owner
// approves it in /admin. Photos are small JPEGs (the app shrinks them to 128x128) kept in D1.
export const MAX_PHOTO_BYTES = 40_000;
const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });

export async function ensurePhotoSchema(db: D1Database): Promise<void> {
  await db.prepare("CREATE TABLE IF NOT EXISTS photos (player_id TEXT PRIMARY KEY, pub TEXT NOT NULL, data TEXT NOT NULL, status TEXT NOT NULL, updated INTEGER NOT NULL)").run();
  await db.prepare('CREATE INDEX IF NOT EXISTS photos_pub ON photos (pub)').run();
}

function randomPub(): string {
  const b = crypto.getRandomValues(new Uint8Array(8));
  return [...b].map((x) => x.toString(16).padStart(2, '0')).join('');
}

// Accepts only a base64 JPEG (checks the real bytes, not the label) under the size limit.
export function parseJpeg(dataUrl: unknown): string | null {
  if (typeof dataUrl !== 'string') return null;
  const m = /^data:image\/jpeg;base64,([A-Za-z0-9+/]+={0,2})$/.exec(dataUrl);
  if (!m) return null;
  let bin: string;
  try { bin = atob(m[1]); } catch { return null; }
  if (bin.length < 200 || bin.length > MAX_PHOTO_BYTES) return null;
  if (bin.charCodeAt(0) !== 0xff || bin.charCodeAt(1) !== 0xd8 || bin.charCodeAt(2) !== 0xff) return null;
  return m[1];
}

const PLAYER_RE = /^[0-9a-f-]{36}$/;

export async function handlePhoto(request: Request, db: D1Database, url: URL, now = Date.now()): Promise<Response> {
  await ensureSchema(db);
  await ensurePhotoSchema(db);

  // Public: an approved photo by its public id (not the player id).
  const pubMatch = /^\/api\/photo\/pub\/([0-9a-f]{16})$/.exec(url.pathname);
  if (pubMatch && request.method === 'GET') {
    const row = await db.prepare("SELECT data FROM photos WHERE pub = ? AND status = 'approved'").bind(pubMatch[1]).first<{ data: string }>();
    if (!row) return new Response('not found', { status: 404 });
    const bin = Uint8Array.from(atob(row.data), (c) => c.charCodeAt(0));
    return new Response(bin, { headers: { 'content-type': 'image/jpeg', 'cache-control': 'public, max-age=86400', 'x-content-type-options': 'nosniff' } });
  }

  // The player's own photo and its status (pending / approved / rejected).
  if (url.pathname === '/api/photo/mine' && request.method === 'GET') {
    const player = url.searchParams.get('player') ?? '';
    if (!PLAYER_RE.test(player)) return json({ error: 'bad_request' }, 400);
    const row = await db.prepare('SELECT data, status FROM photos WHERE player_id = ?').bind(player).first<{ data: string; status: string }>();
    if (!row) return json({ status: 'none' });
    return json({ status: row.status, image: row.status === 'rejected' ? null : `data:image/jpeg;base64,${row.data}` });
  }

  if (url.pathname === '/api/photo' && request.method === 'POST') {
    await db.prepare('CREATE TABLE IF NOT EXISTS code_rl (kind TEXT NOT NULL, ip TEXT NOT NULL, at INTEGER NOT NULL)').run();
    const ip = await ipHash(request);
    const n = await db.prepare("SELECT COUNT(*) AS n FROM code_rl WHERE kind = 'photo' AND ip = ? AND at > ?").bind(ip, now - 3600_000).first<{ n: number }>();
    if ((n?.n ?? 0) >= 10) return json({ error: 'rate_limited' }, 429);
    await db.prepare("INSERT INTO code_rl (kind, ip, at) VALUES ('photo', ?, ?)").bind(ip, now).run();
    const body = await request.json().catch(() => null) as { player?: unknown; image?: unknown; remove?: unknown } | null;
    const player = typeof body?.player === 'string' && PLAYER_RE.test(body.player) ? body.player : '';
    if (!player) return json({ error: 'bad_request' }, 400);
    const exists = await db.prepare('SELECT id FROM players WHERE id = ?').bind(player).first();
    if (!exists) return json({ error: 'no_profile' }, 404);
    if (body?.remove === true) {
      await db.prepare('DELETE FROM photos WHERE player_id = ?').bind(player).run();
      return json({ ok: true, status: 'none' });
    }
    const b64 = parseJpeg(body?.image);
    if (!b64) return json({ error: 'bad_image' }, 400);
    // A new upload is always pending again, with a new public id, so an old approval never carries over.
    await db.prepare("INSERT INTO photos (player_id, pub, data, status, updated) VALUES (?, ?, ?, 'pending', ?) ON CONFLICT(player_id) DO UPDATE SET pub = excluded.pub, data = excluded.data, status = 'pending', updated = excluded.updated").bind(player, randomPub(), b64, now).run();
    await notifyAdmin(db, 'review', now);
    return json({ ok: true, status: 'pending' });
  }
  return json({ error: 'not_found' }, 404);
}

// Owner side (called from admin.ts after the key check).
export async function listPhotos(db: D1Database) {
  await ensurePhotoSchema(db);
  const r = await db.prepare("SELECT p.nick AS nick, ph.pub AS pub, ph.status AS status, ph.updated AS updated, ph.data AS data FROM photos ph JOIN players p ON p.id = ph.player_id WHERE ph.status IN ('pending','approved') ORDER BY (ph.status = 'pending') DESC, ph.updated DESC LIMIT 100").all<{ nick: string; pub: string; status: string; updated: number; data: string }>();
  return r.results.map((x) => ({ nick: x.nick, pub: x.pub, status: x.status, updated: x.updated, image: `data:image/jpeg;base64,${x.data}` }));
}
export async function decidePhoto(db: D1Database, pub: string, action: string): Promise<boolean> {
  await ensurePhotoSchema(db);
  if (!/^[0-9a-f]{16}$/.test(pub)) return false;
  if (action === 'approve') {
    const r = await db.prepare("UPDATE photos SET status = 'approved' WHERE pub = ? AND status = 'pending'").bind(pub).run();
    return (r.meta?.changes ?? 0) > 0;
  }
  if (action === 'reject' || action === 'remove') {
    const r = await db.prepare("UPDATE photos SET status = 'rejected', data = '' WHERE pub = ?").bind(pub).run();
    return (r.meta?.changes ?? 0) > 0;
  }
  return false;
}
