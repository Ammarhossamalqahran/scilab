import type { D1Database } from './types';
import { pushOne } from './push';

// Admin-only alerts. Only devices registered through an authorised admin request are ever pushed to
// (table admin_push). Pushes carry no text: the service worker asks /api/push/kind, which answers with
// the pending counts only (no names, no content).
export type AdminKind = 'record' | 'user' | 'review';
const KINDS: AdminKind[] = ['record', 'user', 'review'];
const MIN_GAP_MS = 5 * 60_000; // at most one push per kind per 5 minutes, however many people trigger it
const MAX_DEVICES = 5;

let ready: Promise<void> | null = null;
export function ensureAdminPushSchema(db: D1Database): Promise<void> {
  ready ??= db.batch([
    db.prepare('CREATE TABLE IF NOT EXISTS admin_push (endpoint TEXT PRIMARY KEY, created INTEGER NOT NULL)'),
    db.prepare('CREATE TABLE IF NOT EXISTS admin_events (id INTEGER PRIMARY KEY AUTOINCREMENT, kind TEXT NOT NULL, at INTEGER NOT NULL, delivered INTEGER NOT NULL DEFAULT 0)'),
    db.prepare('CREATE TABLE IF NOT EXISTS kv (k TEXT PRIMARY KEY, v TEXT NOT NULL)'),
  ]).then(() => undefined).catch((e) => { ready = null; throw e; });
  return ready;
}

export async function addAdminDevice(db: D1Database, endpoint: string, now = Date.now()): Promise<boolean> {
  await ensureAdminPushSchema(db);
  const known = await db.prepare('SELECT 1 AS x FROM admin_push WHERE endpoint = ?').bind(endpoint).first();
  if (!known) {
    const n = await db.prepare('SELECT COUNT(*) AS n FROM admin_push').first<{ n: number }>();
    if ((n?.n ?? 0) >= MAX_DEVICES) return false;
  }
  await db.prepare('INSERT INTO admin_push (endpoint, created) VALUES (?, ?) ON CONFLICT(endpoint) DO NOTHING').bind(endpoint, now).run();
  return true;
}
export async function removeAdminDevice(db: D1Database, endpoint: string): Promise<void> {
  await ensureAdminPushSchema(db);
  await db.prepare('DELETE FROM admin_push WHERE endpoint = ?').bind(endpoint).run();
}
export async function isAdminDevice(db: D1Database, endpoint: string): Promise<boolean> {
  await ensureAdminPushSchema(db);
  return !!(await db.prepare('SELECT 1 AS x FROM admin_push WHERE endpoint = ?').bind(endpoint).first());
}

// Called when something the owner cares about happens. Never throws: a failed alert must not break the user's action.
export async function notifyAdmin(db: D1Database, kind: AdminKind, now = Date.now(), fetchImpl: typeof fetch = fetch): Promise<void> {
  try {
    await ensureAdminPushSchema(db);
    const devices = await db.prepare('SELECT endpoint FROM admin_push').all<{ endpoint: string }>();
    if (devices.results.length === 0) return; // nobody registered: store nothing
    await db.prepare('DELETE FROM admin_events WHERE at < ?').bind(now - 7 * 86400_000).run();
    await db.prepare('INSERT INTO admin_events (kind, at) VALUES (?, ?)').bind(kind, now).run();
    const key = `admin_last_${kind}`;
    const last = await db.prepare('SELECT v FROM kv WHERE k = ?').bind(key).first<{ v: string }>();
    if (last && now - Number(last.v) < MIN_GAP_MS) return; // counted, but no extra buzz
    await db.prepare('INSERT INTO kv (k, v) VALUES (?, ?) ON CONFLICT(k) DO UPDATE SET v = excluded.v').bind(key, String(now)).run();
    for (const d of devices.results) await pushOne(db, d.endpoint, fetchImpl);
  } catch { /* best effort */ }
}

// For /api/push/kind: counts of not yet shown events if this endpoint is an admin device, and marks them shown.
export async function takeAdminEvents(db: D1Database, endpoint: string): Promise<Record<AdminKind, number> | null> {
  try {
    if (!(await isAdminDevice(db, endpoint))) return null;
    const rows = await db.prepare('SELECT kind, COUNT(*) AS n FROM admin_events WHERE delivered = 0 GROUP BY kind').all<{ kind: string; n: number }>();
    if (rows.results.length === 0) return null;
    const out = { record: 0, user: 0, review: 0 };
    for (const r of rows.results) if ((KINDS as string[]).includes(r.kind)) out[r.kind as AdminKind] = r.n;
    await db.prepare('UPDATE admin_events SET delivered = 1 WHERE delivered = 0').run();
    return out;
  } catch { return null; }
}
