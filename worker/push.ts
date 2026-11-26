import type { D1Database } from './types';

// Web push reminders. No secrets are handled by hand: the Worker creates its own VAPID signing key
// the first time it is needed and keeps it in D1. Pushes carry no payload, so the service worker
// (public/sw.js) picks the teasing line itself. That also means no payload encryption is needed.
const SUBJECT = 'https://scilab.amarhossam0000.workers.dev';
const MAX_SUBS = 20000;

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });

let ready: Promise<void> | null = null;
function ensureSchema(db: D1Database): Promise<void> {
  ready ??= db.batch([
    db.prepare('CREATE TABLE IF NOT EXISTS push_subs (endpoint TEXT PRIMARY KEY, created INTEGER NOT NULL)'),
    db.prepare('CREATE TABLE IF NOT EXISTS kv (k TEXT PRIMARY KEY, v TEXT NOT NULL)'),
  ]).then(() => undefined).catch((e) => { ready = null; throw e; });
  return ready;
}

const b64u = (buf: ArrayBuffer | Uint8Array) => {
  const bytes = buf instanceof Uint8Array ? buf : new Uint8Array(buf);
  let s = ''; for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};

type Keys = { publicKey: string; privateJwk: JsonWebKey };
async function getKeys(db: D1Database): Promise<Keys> {
  const row = await db.prepare("SELECT v FROM kv WHERE k = 'vapid'").first<{ v: string }>();
  if (row) return JSON.parse(row.v) as Keys;
  const pair = await crypto.subtle.generateKey({ name: 'ECDSA', namedCurve: 'P-256' }, true, ['sign', 'verify']) as CryptoKeyPair;
  const publicKey = b64u(await crypto.subtle.exportKey('raw', pair.publicKey));
  const privateJwk = await crypto.subtle.exportKey('jwk', pair.privateKey);
  await db.prepare("INSERT OR IGNORE INTO kv (k, v) VALUES ('vapid', ?)").bind(JSON.stringify({ publicKey, privateJwk })).run();
  // Two first requests can race: always read back the stored winner.
  const stored = await db.prepare("SELECT v FROM kv WHERE k = 'vapid'").first<{ v: string }>();
  return JSON.parse(stored!.v) as Keys;
}

async function vapidHeader(endpoint: string, keys: Keys): Promise<string> {
  const aud = new URL(endpoint).origin;
  const head = b64u(new TextEncoder().encode(JSON.stringify({ typ: 'JWT', alg: 'ES256' })));
  const body = b64u(new TextEncoder().encode(JSON.stringify({ aud, exp: Math.floor(Date.now() / 1000) + 12 * 3600, sub: SUBJECT })));
  const key = await crypto.subtle.importKey('jwk', keys.privateJwk, { name: 'ECDSA', namedCurve: 'P-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign({ name: 'ECDSA', hash: 'SHA-256' }, key, new TextEncoder().encode(`${head}.${body}`));
  return `vapid t=${head}.${body}.${b64u(sig)}, k=${keys.publicKey}`;
}

const validEndpoint = (e: unknown): e is string => {
  if (typeof e !== 'string' || e.length > 600) return false;
  try { const u = new URL(e); return u.protocol === 'https:'; } catch { return false; }
};

export async function handlePush(request: Request, db: D1Database, url: URL): Promise<Response> {
  await ensureSchema(db);
  if (url.pathname === '/api/push/vapid-key' && request.method === 'GET') {
    return json({ key: (await getKeys(db)).publicKey });
  }
  if (url.pathname === '/api/push/kind' && request.method === 'GET') {
    const row = await db.prepare("SELECT v FROM kv WHERE k = 'kind'").first<{ v: string }>();
    return json({ kind: row?.v === 'monthly' ? 'monthly' : 'daily' });
  }
  if (url.pathname === '/api/push/subscribe' && request.method === 'POST') {
    const body = await request.json().catch(() => null) as { endpoint?: unknown } | null;
    if (!body || !validEndpoint(body.endpoint)) return json({ error: 'bad_subscription' }, 400);
    const n = await db.prepare('SELECT COUNT(*) AS n FROM push_subs').first<{ n: number }>();
    if ((n?.n ?? 0) >= MAX_SUBS) return json({ error: 'full' }, 503);
    await db.prepare('INSERT OR IGNORE INTO push_subs (endpoint, created) VALUES (?, ?)').bind(body.endpoint, Date.now()).run();
    return json({ ok: true });
  }
  if (url.pathname === '/api/push/unsubscribe' && request.method === 'POST') {
    const body = await request.json().catch(() => null) as { endpoint?: unknown } | null;
    if (!body || !validEndpoint(body.endpoint)) return json({ error: 'bad_subscription' }, 400);
    await db.prepare('DELETE FROM push_subs WHERE endpoint = ?').bind(body.endpoint).run();
    return json({ ok: true });
  }
  return json({ error: 'not_found' }, 404);
}

// Called by the daily cron. Subscriptions the push service reports as gone (404/410) are removed.
export async function sendDaily(db: D1Database, fetchImpl: typeof fetch = fetch, kind: 'daily' | 'monthly' = 'daily'): Promise<{ sent: number; removed: number; failed: number }> {
  await ensureSchema(db);
  const keys = await getKeys(db);
  // The push is empty, so the service worker asks /api/push/kind which message to show.
  await db.prepare("INSERT INTO kv (k, v) VALUES ('kind', ?) ON CONFLICT(k) DO UPDATE SET v = excluded.v").bind(kind).run();
  const subs = await db.prepare('SELECT endpoint FROM push_subs LIMIT 5000').all<{ endpoint: string }>();
  let sent = 0, removed = 0, failed = 0;
  for (const { endpoint } of subs.results) {
    try {
      const res = await fetchImpl(endpoint, { method: 'POST', headers: { Authorization: await vapidHeader(endpoint, keys), TTL: '43200', Urgency: 'normal', 'Content-Length': '0' } });
      if (res.status === 404 || res.status === 410) { await db.prepare('DELETE FROM push_subs WHERE endpoint = ?').bind(endpoint).run(); removed++; }
      else if (res.ok) sent++;
      else failed++;
    } catch { failed++; }
  }
  return { sent, removed, failed };
}

// True when `now` (UTC) is on the last day of its month.
export const isLastDayOfMonth = (now = new Date()) => new Date(now.getTime() + 86400_000).getUTCDate() === 1;
