import type { D1Database } from './types';
import { ensureSchema } from './leaderboard';
import { pushOne } from './push';
import { nickForCode } from './code';
import { listPhotos, decidePhoto } from './photo';
import { listOpinions, decideOpinion } from './opinions';
import { validSession, SESSION_PREFIX } from './adminAuth';
import { addAdminDevice, removeAdminDevice } from './adminPush';

// Owner-only view of the leaderboard, for picking giveaway winners. Protected by ADMIN_KEY, a secret
// set in the Cloudflare dashboard (never in the repo). Without it the endpoint stays closed.
const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });

async function same(a: string, b: string): Promise<boolean> {
  const enc = new TextEncoder();
  const [x, y] = await Promise.all([crypto.subtle.digest('SHA-256', enc.encode(a)), crypto.subtle.digest('SHA-256', enc.encode(b))]);
  const xa = new Uint8Array(x), ya = new Uint8Array(y);
  let d = 0; for (let i = 0; i < xa.length; i++) d |= xa[i] ^ ya[i];
  return d === 0;
}

async function authorize(request: Request, db: D1Database, adminKey: string | undefined, now: number): Promise<Response | null> {
  const given = request.headers.get('x-admin-key') ?? '';
  const isSession = given.startsWith(SESSION_PREFIX);
  if (!isSession && (!adminKey || adminKey.length < 8)) return json({ error: 'admin_not_configured' }, 503);
  await ensureSchema(db);
  await db.prepare('CREATE TABLE IF NOT EXISTS admin_fails (at INTEGER NOT NULL)').run();
  const fails = await db.prepare('SELECT COUNT(*) AS n FROM admin_fails WHERE at > ?').bind(now - 600_000).first<{ n: number }>();
  if ((fails?.n ?? 0) >= 10) return json({ error: 'locked' }, 429);
  // Either the Google-issued owner session (server-checked) or the old secret key.
  if (isSession ? await validSession(db, given, now) : await same(given, adminKey as string)) return null;
  await db.prepare('INSERT INTO admin_fails (at) VALUES (?)').bind(now).run();
  return json({ error: 'forbidden' }, 403);
}

// POST /api/admin/push {action: 'subscribe'|'unsubscribe', endpoint}: registers this device for owner alerts.
export async function handleAdminPush(request: Request, db: D1Database, adminKey: string | undefined, now = Date.now()): Promise<Response> {
  const denied = await authorize(request, db, adminKey, now);
  if (denied) return denied;
  const body = await request.json().catch(() => null) as { action?: unknown; endpoint?: unknown } | null;
  const ep = body?.endpoint;
  let ok = false;
  try { ok = typeof ep === 'string' && ep.length <= 600 && new URL(ep).protocol === 'https:'; } catch { ok = false; }
  if (!ok || (body?.action !== 'subscribe' && body?.action !== 'unsubscribe')) return json({ error: 'bad_request' }, 400);
  if (body.action === 'unsubscribe') { await removeAdminDevice(db, ep as string); return json({ ok: true }); }
  return (await addAdminDevice(db, ep as string, now)) ? json({ ok: true }) : json({ error: 'too_many_devices' }, 409);
}

export async function ensureWinnerSchema(db: D1Database): Promise<void> {
  await db.prepare('CREATE TABLE IF NOT EXISTS winner_msgs (player_id TEXT PRIMARY KEY, msg TEXT NOT NULL, created INTEGER NOT NULL, seen_at INTEGER)').run();
}

// POST /api/admin/winner {nick, message}: stores one private message for that player (replaces an older one).
export async function handleAdminWinner(request: Request, db: D1Database, adminKey: string | undefined, now = Date.now()): Promise<Response> {
  const denied = await authorize(request, db, adminKey, now);
  if (denied) return denied;
  const body = await request.json().catch(() => null) as { nick?: unknown; message?: unknown } | null;
  const nick = typeof body?.nick === 'string' ? body.nick.trim() : '';
  const message = typeof body?.message === 'string' ? body.message.trim() : '';
  if (!nick || message.length < 1 || message.length > 400) return json({ error: 'bad_request' }, 400);
  await ensureWinnerSchema(db);
  const player = await db.prepare('SELECT id FROM players WHERE nick_lc = ?').bind(nick.toLowerCase()).first<{ id: string }>();
  if (!player) return json({ error: 'no_such_player' }, 404);
  await db.prepare('INSERT INTO winner_msgs (player_id, msg, created, seen_at) VALUES (?, ?, ?, NULL) ON CONFLICT(player_id) DO UPDATE SET msg = excluded.msg, created = excluded.created, seen_at = NULL').bind(player.id, message, now).run();
  const subs = await db.prepare('SELECT endpoint FROM push_subs WHERE player_id = ?').bind(player.id).all<{ endpoint: string }>().catch(() => ({ results: [] as { endpoint: string }[] }));
  let pushed = 0;
  for (const { endpoint } of subs.results) if (await pushOne(db, endpoint)) pushed++;
  return json({ ok: true, push: pushed > 0 ? 'sent' : 'no_push' });
}

export async function handleAdmin(request: Request, db: D1Database, adminKey: string | undefined, now = Date.now()): Promise<Response> {
  const denied = await authorize(request, db, adminKey, now);
  if (denied) return denied;
  await ensureWinnerSchema(db);
  const msgs = await db.prepare('SELECT p.nick AS nick, w.created AS created, w.seen_at AS seen_at FROM winner_msgs w JOIN players p ON p.id = w.player_id ORDER BY w.created DESC LIMIT 100').all();
  const month = new Date(now); month.setUTCDate(1); month.setUTCHours(0, 0, 0, 0);
  const best = (since: number) => db.prepare(
    'SELECT p.nick AS nick, MAX(s.score) AS score, MAX(s.correct) AS correct, COUNT(*) AS games, MAX(s.at) AS last_at FROM scores s JOIN players p ON p.id = s.player_id WHERE s.at >= ? GROUP BY s.player_id ORDER BY score DESC, MIN(s.at) ASC LIMIT 200',
  ).bind(since).all();
  const [thisMonth, archive] = await Promise.all([
    best(month.getTime()),
    db.prepare('SELECT month, nick, score, at FROM leaderboard_archive ORDER BY month DESC, score DESC LIMIT 600').all().catch(() => ({ results: [] })),
  ]);
  return json({ month: month.toISOString().slice(0, 7), thisMonth: thisMonth.results, archive: archive.results, messages: msgs.results });
}

// POST /api/admin/code {code}: which name does this recovery code belong to? Lets the owner confirm a winner.
export async function handleAdminCode(request: Request, db: D1Database, adminKey: string | undefined, now = Date.now()): Promise<Response> {
  const denied = await authorize(request, db, adminKey, now);
  if (denied) return denied;
  const body = await request.json().catch(() => null) as { code?: unknown } | null;
  const nick = typeof body?.code === 'string' ? await nickForCode(db, body.code) : null;
  return nick ? json({ nick }) : json({ error: 'no_match' }, 404);
}

// GET /api/admin/photos: pending and approved photos for review.
export async function handleAdminPhotos(request: Request, db: D1Database, adminKey: string | undefined, now = Date.now()): Promise<Response> {
  const denied = await authorize(request, db, adminKey, now);
  if (denied) return denied;
  return json({ photos: await listPhotos(db) });
}

// POST /api/admin/photo {pub, action: approve | reject | remove}
export async function handleAdminPhotoDecision(request: Request, db: D1Database, adminKey: string | undefined, now = Date.now()): Promise<Response> {
  const denied = await authorize(request, db, adminKey, now);
  if (denied) return denied;
  const body = await request.json().catch(() => null) as { pub?: unknown; action?: unknown } | null;
  const ok = typeof body?.pub === 'string' && typeof body?.action === 'string' && await decidePhoto(db, body.pub, body.action);
  return ok ? json({ ok: true }) : json({ error: 'not_found' }, 404);
}

// GET /api/admin/opinions: pending and approved student opinions.
export async function handleAdminOpinions(request: Request, db: D1Database, adminKey: string | undefined, now = Date.now()): Promise<Response> {
  const denied = await authorize(request, db, adminKey, now);
  if (denied) return denied;
  return json({ opinions: await listOpinions(db) });
}

// POST /api/admin/opinion {id, action: approve | reject | remove}
export async function handleAdminOpinionDecision(request: Request, db: D1Database, adminKey: string | undefined, now = Date.now()): Promise<Response> {
  const denied = await authorize(request, db, adminKey, now);
  if (denied) return denied;
  const body = await request.json().catch(() => null) as { id?: unknown; action?: unknown } | null;
  return await decideOpinion(db, body?.id, body?.action) ? json({ ok: true }) : json({ error: 'not_found' }, 404);
}
