import type { D1Database } from './types';
import { ensureSchema, ipHash } from './leaderboard';
import { hashCode } from './code';
import { ownerSessionFor } from './adminAuth';

// Optional "Link your Google account". Sign-in uses Google Identity Services in the browser; here the
// returned ID token is verified (Google's public signing keys, our Client ID as audience). Only a salted
// hash of Google's stable user id ("sub") is stored: no email, no name, no picture.
const JWKS_URL = 'https://www.googleapis.com/oauth2/v3/certs';
const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });

type Jwk = JsonWebKey & { kid?: string };
let jwksCache: { at: number; keys: Jwk[] } | null = null;
async function googleKeys(fetchImpl: typeof fetch, now: number): Promise<Jwk[]> {
  if (jwksCache && now - jwksCache.at < 3600_000) return jwksCache.keys;
  const res = await fetchImpl(JWKS_URL);
  if (!res.ok) throw new Error('jwks');
  const keys = ((await res.json()) as { keys?: Jwk[] }).keys ?? [];
  jwksCache = { at: now, keys };
  return keys;
}
const b64uBytes = (s: string) => Uint8Array.from(atob(s.replace(/-/g, '+').replace(/_/g, '/').padEnd(Math.ceil(s.length / 4) * 4, '=')), (c) => c.charCodeAt(0));

// Returns Google's user id ("sub") when the token is genuine, for this app, and not expired. Otherwise null.
export type IdClaims = { sub: string; email?: string; email_verified?: boolean | string; given_name?: string; name?: string };
export async function verifyIdToken(token: unknown, clientId: string, now = Date.now(), fetchImpl: typeof fetch = fetch, nonce?: string): Promise<string | null> {
  return (await verifyIdClaims(token, clientId, now, fetchImpl, nonce))?.sub ?? null;
}
// Same checks, but returns the verified claims (the admin sign-in needs the email).
export async function verifyIdClaims(token: unknown, clientId: string, now = Date.now(), fetchImpl: typeof fetch = fetch, nonce?: string): Promise<IdClaims | null> {
  if (typeof token !== 'string' || !clientId || token.length > 4000) return null;
  const parts = token.split('.');
  if (parts.length !== 3) return null;
  try {
    const header = JSON.parse(new TextDecoder().decode(b64uBytes(parts[0]))) as { alg?: string; kid?: string };
    if (header.alg !== 'RS256' || !header.kid) return null;
    const jwk = (await googleKeys(fetchImpl, now)).find((k) => k.kid === header.kid);
    if (!jwk) return null;
    const key = await crypto.subtle.importKey('jwk', jwk, { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' }, false, ['verify']);
    const ok = await crypto.subtle.verify('RSASSA-PKCS1-v1_5', key, b64uBytes(parts[2]), new TextEncoder().encode(`${parts[0]}.${parts[1]}`));
    if (!ok) return null;
    const c = JSON.parse(new TextDecoder().decode(b64uBytes(parts[1]))) as { iss?: string; aud?: string; exp?: number; sub?: string; nonce?: string; email?: string; email_verified?: boolean | string; given_name?: string; name?: string };
    if (c.iss !== 'accounts.google.com' && c.iss !== 'https://accounts.google.com') return null;
    if (c.aud !== clientId) return null;
    if (nonce !== undefined && c.nonce !== nonce) return null; // ties the token to the sign-in this browser started
    if (typeof c.exp !== 'number' || c.exp * 1000 < now) return null;
    if (typeof c.sub !== 'string' || c.sub.length === 0 || c.sub.length >= 64) return null;
    return { sub: c.sub, email: typeof c.email === 'string' ? c.email : undefined, email_verified: c.email_verified, given_name: typeof c.given_name === 'string' ? c.given_name : undefined, name: typeof c.name === 'string' ? c.name : undefined };
  } catch { return null; }
}

async function ensureGoogleSchema(db: D1Database): Promise<void> {
  await ensureSchema(db);
  await db.prepare('ALTER TABLE players ADD COLUMN google_hash TEXT').run().then(() => undefined, () => undefined);
  await db.prepare('CREATE UNIQUE INDEX IF NOT EXISTS players_google ON players (google_hash) WHERE google_hash IS NOT NULL').run().then(() => undefined, () => undefined);
  await db.prepare('CREATE TABLE IF NOT EXISTS code_rl (kind TEXT NOT NULL, ip TEXT NOT NULL, at INTEGER NOT NULL)').run();
}
const PLAYER_RE = /^[0-9a-f-]{36}$/;

export async function handleGoogle(request: Request, db: D1Database, url: URL, clientId: string | undefined, now = Date.now(), fetchImpl: typeof fetch = fetch): Promise<Response> {
  if (url.pathname === '/api/google/config' && request.method === 'GET') return json({ clientId: clientId || '' });
  if (request.method !== 'POST') return json({ error: 'not_found' }, 404);
  if (!clientId) return json({ error: 'not_configured' }, 503);
  await ensureGoogleSchema(db);
  const ip = await ipHash(request);
  const n = await db.prepare("SELECT COUNT(*) AS n FROM code_rl WHERE kind = 'google' AND ip = ? AND at > ?").bind(ip, now - 600_000).first<{ n: number }>();
  if ((n?.n ?? 0) >= 30) return json({ error: 'rate_limited' }, 429);
  await db.prepare("INSERT INTO code_rl (kind, ip, at) VALUES ('google', ?, ?)").bind(ip, now).run();
  const body = await request.json().catch(() => null) as { player?: unknown; credential?: unknown; nonce?: unknown; create?: unknown } | null;
  const player = typeof body?.player === 'string' && PLAYER_RE.test(body.player) ? body.player : '';
  const nonce = typeof body?.nonce === 'string' && /^[0-9a-f]{32}$/.test(body.nonce) ? body.nonce : null;
  const hashSub = async (sub: string) => hashCode(db, `google:${sub}`);

  // Link this player (name) to a Google account.
  if (url.pathname === '/api/google/link') {
    if (!player) return json({ error: 'bad_request' }, 400);
    const sub = nonce ? await verifyIdToken(body?.credential, clientId, now, fetchImpl, nonce) : null;
    if (!sub) return json({ error: 'bad_token' }, 401);
    const me = await db.prepare('SELECT id FROM players WHERE id = ?').bind(player).first();
    if (!me) return json({ error: 'no_profile' }, 404);
    const h = await hashSub(sub);
    const other = await db.prepare('SELECT id FROM players WHERE google_hash = ? AND id != ?').bind(h, player).first();
    if (other) return json({ error: 'already_linked' }, 409);
    await db.prepare('UPDATE players SET google_hash = ? WHERE id = ?').bind(h, player).run();
    return json({ ok: true, admin: await ownerSessionFor(db, sub, now) });
  }
  // Sign in on a new device: find the player linked to this Google account.
  if (url.pathname === '/api/google/signin') {
    const claims = nonce ? await verifyIdClaims(body?.credential, clientId, now, fetchImpl, nonce) : null;
    if (!claims) return json({ error: 'bad_token' }, 401);
    const sub = claims.sub;
    const row = await db.prepare('SELECT id, nick, avatar FROM players WHERE google_hash = ?').bind(await hashSub(sub)).first<{ id: string; nick: string; avatar: string | null }>();
    const admin = await ownerSessionFor(db, sub, now);
    if (!row && body?.create === true) {
      // New visitor who chose "Sign in with Google" on the welcome screen: make a profile named after the first name
      // on the Google account. Only that display name becomes the leaderboard name (editable later). No email, no picture.
      const base = (claims.given_name || claims.name || '').normalize('NFC').replace(/[^\p{L}\p{N} _\-.]/gu, '').trim().replace(/\s+/g, ' ').slice(0, 12).trim();
      const stem = /^[\p{L}\p{N}]/u.test(base) && base.length >= 2 ? base : 'Student';
      const id = crypto.randomUUID();
      for (let i = 0; i < 8; i++) {
        const nick = i === 0 ? stem : `${stem}${Math.floor(10 + Math.random() * 990)}`;
        try {
          await db.prepare('INSERT INTO players (id, nick, nick_lc, created, google_hash) VALUES (?, ?, ?, ?, ?)').bind(id, nick, nick.toLowerCase(), now, await hashSub(sub)).run();
          return json({ player: id, nick, avatar: null, admin, created: true });
        } catch { const again = await db.prepare('SELECT id, nick, avatar FROM players WHERE google_hash = ?').bind(await hashSub(sub)).first<{ id: string; nick: string; avatar: string | null }>(); if (again) return json({ player: again.id, nick: again.nick, avatar: again.avatar, admin }); }
      }
      return json({ error: 'nick_taken', admin }, 409);
    }
    if (!row) return json({ error: 'no_account', admin }, 404);
    return json({ player: row.id, nick: row.nick, avatar: row.avatar, admin });
  }
  if (url.pathname === '/api/google/status') {
    if (!player) return json({ error: 'bad_request' }, 400);
    const row = await db.prepare('SELECT google_hash, owner, frame FROM players WHERE id = ?').bind(player).first<{ google_hash: string | null; owner: number | null; frame: string | null }>();
    // `owner` is already public (leaderboard mark). It only tells the app whether to try a silent owner re-check; it grants nothing.
    return json({ linked: !!row?.google_hash, owner: row?.owner === 1, frame: row?.frame ?? null });
  }
  if (url.pathname === '/api/google/unlink') {
    if (!player) return json({ error: 'bad_request' }, 400);
    await db.prepare('UPDATE players SET google_hash = NULL WHERE id = ?').bind(player).run();
    return json({ ok: true });
  }
  return json({ error: 'not_found' }, 404);
}
