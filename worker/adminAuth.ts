import type { D1Database } from './types';
import { ipHash, ensureSchema } from './leaderboard';
import { verifyIdClaims } from './google';

// Owner sign-in with Google. The browser sends a Google ID token; here it is verified (Google's signing
// keys, our Client ID, the nonce this browser started, expiry), the email must be verified by Google, and
// its SHA-256 must equal the owner's. Only the hash is in the repo. On success the Worker issues its own
// random session token (only its hash is stored). No client flag is ever trusted.
const OWNER_EMAIL_SHA256 = '21eb59026bfd64f30a11dd800083d4deb7345753126fdea3f1832f01e2159479';
const SESSION_MS = 7 * 86400_000;
export const SESSION_PREFIX = 'gs.';
const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });

const hex = (buf: ArrayBuffer) => [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');
const sha256 = async (s: string) => hex(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s)));

export async function ensureSessionSchema(db: D1Database): Promise<void> {
  await db.prepare('CREATE TABLE IF NOT EXISTS admin_sessions (h TEXT PRIMARY KEY, exp INTEGER NOT NULL)').run();
}

export async function validSession(db: D1Database, token: string, now: number): Promise<boolean> {
  if (!token.startsWith(SESSION_PREFIX) || token.length !== SESSION_PREFIX.length + 64) return false;
  try {
    await ensureSessionSchema(db);
    const row = await db.prepare('SELECT exp FROM admin_sessions WHERE h = ?').bind(await sha256(token)).first<{ exp: number }>();
    return !!row && row.exp > now;
  } catch { return false; }
}

export async function handleAdminGoogle(request: Request, db: D1Database, url: URL, clientId: string | undefined, now = Date.now(), fetchImpl: typeof fetch = fetch): Promise<Response> {
  if (request.method !== 'POST') return json({ error: 'not_found' }, 404);
  if (!clientId) return json({ error: 'not_configured' }, 503);
  // Read-only check used by the app to decide whether to show the Admin tab. Not rate limited: the token is 256 random bits.
  if (url.pathname === '/api/admin/check') {
    const b = await request.json().catch(() => null) as { session?: unknown; player?: unknown } | null;
    const ok = typeof b?.session === 'string' && await validSession(db, b.session, now);
    // The owner's own player (the one on this device) gets the owner mark. Only a live server-verified owner session can set it, and only one player holds it.
    if (ok && typeof b?.player === 'string' && /^[0-9a-f-]{36}$/.test(b.player)) {
      try {
        await ensureSchema(db);
        const me = await db.prepare('SELECT id FROM players WHERE id = ?').bind(b.player).first();
        if (me) await db.batch([db.prepare('UPDATE players SET owner = NULL WHERE owner = 1 AND id != ?').bind(b.player), db.prepare('UPDATE players SET owner = 1 WHERE id = ?').bind(b.player)]);
      } catch { /* the mark is cosmetic */ }
    }
    return json({ ok });
  }
  await ensureSchema(db);
  await db.prepare('CREATE TABLE IF NOT EXISTS code_rl (kind TEXT NOT NULL, ip TEXT NOT NULL, at INTEGER NOT NULL)').run();
  const ip = await ipHash(request);
  const n = await db.prepare("SELECT COUNT(*) AS n FROM code_rl WHERE kind = 'admin_google' AND ip = ? AND at > ?").bind(ip, now - 600_000).first<{ n: number }>();
  if ((n?.n ?? 0) >= 10) return json({ error: 'rate_limited' }, 429);
  await db.prepare("INSERT INTO code_rl (kind, ip, at) VALUES ('admin_google', ?, ?)").bind(ip, now).run();
  const body = await request.json().catch(() => null) as { credential?: unknown; nonce?: unknown; session?: unknown } | null;

  if (url.pathname === '/api/admin/logout') {
    if (typeof body?.session === 'string' && body.session.startsWith(SESSION_PREFIX)) {
      await ensureSessionSchema(db);
      await db.prepare('DELETE FROM admin_sessions WHERE h = ?').bind(await sha256(body.session)).run();
    }
    return json({ ok: true });
  }
  const nonce = typeof body?.nonce === 'string' && /^[0-9a-f]{32}$/.test(body.nonce) ? body.nonce : null;
  const claims = nonce ? await verifyIdClaims(body?.credential, clientId, now, fetchImpl, nonce) : null;
  if (!claims) return json({ error: 'bad_token' }, 401);
  const verified = claims.email_verified === true || claims.email_verified === 'true';
  if (!verified || !claims.email || (await sha256(claims.email.trim().toLowerCase())) !== OWNER_EMAIL_SHA256) return json({ error: 'not_admin' }, 403);
  await ensureSessionSchema(db);
  await db.prepare('DELETE FROM admin_sessions WHERE exp < ?').bind(now).run();
  const token = SESSION_PREFIX + hex(crypto.getRandomValues(new Uint8Array(32)).buffer);
  await db.prepare('INSERT INTO admin_sessions (h, exp) VALUES (?, ?)').bind(await sha256(token), now + SESSION_MS).run();
  return json({ ok: true, session: token, expiresAt: now + SESSION_MS });
}
