import { playerId, saveNick, saveAvatar } from './leaderboardApi';
import { setAdminSession, getAdminSession, clearAdminSession } from './adminSession';

// Optional Google link. A plain full-page redirect to Google and back (no popup), so it also works inside
// the installed app and in mobile browsers that block or lose popups. We come back to "/" with the signed
// ID token in the URL fragment, send it to our server (which verifies it) and show a clear result.
let clientIdPromise: Promise<string> | null = null;
export function googleClientId(): Promise<string> {
  clientIdPromise ??= fetch('/api/google/config').then((r) => r.json()).then((d: { clientId?: string }) => d.clientId ?? '').catch(() => '');
  return clientIdPromise;
}

const PENDING = 'scilab-google-pending';
const RESULT = 'scilab-google-result';
export type GoogleResult = { kind: 'linked' | 'signedin' | 'error'; reason?: 'already_linked' | 'no_account' | 'no_profile' | 'cancelled' | 'not_admin' | 'other'; nick?: string; created?: boolean };

const randomNonce = () => [...crypto.getRandomValues(new Uint8Array(16))].map((b) => b.toString(16).padStart(2, '0')).join('');

// Sends the browser to Google. `mode` says what to do when it comes back.
export async function startGoogle(mode: 'link' | 'signin' | 'welcome' | 'admin' | 'silent'): Promise<boolean> {
  const id = await googleClientId();
  if (!id) return false;
  const nonce = randomNonce();
  try { window.localStorage.setItem(PENDING, JSON.stringify({ mode, nonce, at: Date.now(), player: playerId() })); } catch { return false; }
  const q = new URLSearchParams({ client_id: id, redirect_uri: `${window.location.origin}/`, response_type: 'id_token', scope: mode === 'admin' ? 'openid email' : mode === 'welcome' ? 'openid profile' : 'openid', nonce, prompt: mode === 'silent' ? 'none' : 'select_account', state: mode });
  window.location.assign(`https://accounts.google.com/o/oauth2/v2/auth?${q}`);
  return true;
}

async function post(path: string, body: Record<string, unknown>) {
  try {
    const res = await fetch(path, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) });
    return { ok: res.ok, data: await res.json().catch(() => ({})) as Record<string, unknown> };
  } catch { return { ok: false, data: {} as Record<string, unknown> }; }
}

function publish(r: GoogleResult) {
  try { window.localStorage.setItem(RESULT, JSON.stringify({ ...r, at: Date.now() })); } catch { /* ignored */ }
  window.dispatchEvent(new Event('scilab-google-result'));
}
export function takeGoogleResult(): GoogleResult | null {
  try {
    const v = JSON.parse(window.localStorage.getItem(RESULT) ?? 'null') as (GoogleResult & { at: number }) | null;
    window.localStorage.removeItem(RESULT);
    return v && Date.now() - v.at < 600_000 ? v : null;
  } catch { return null; }
}

// Runs once at app start: if we just came back from Google, finish the job and publish the result.
export async function completeGoogleFromHash(): Promise<void> {
  const hash = window.location.hash.replace(/^#/, '');
  if (!hash || !/(^|&)(id_token|error)=/.test(hash)) return;
  const params = new URLSearchParams(hash);
  window.history.replaceState(null, '', window.location.pathname + window.location.search); // never leave the token in the address bar
  let pending: { mode?: string; nonce?: string; at?: number } | null = null;
  try { pending = JSON.parse(window.localStorage.getItem(PENDING) ?? 'null'); window.localStorage.removeItem(PENDING); } catch { /* ignored */ }
  const credential = params.get('id_token');
  if (pending?.mode === 'silent') { // background owner re-check: never shows anything, never changes the profile
    if (credential && pending.nonce && pending.at && Date.now() - pending.at < 120_000) {
      const r = await post('/api/google/signin', { credential, nonce: pending.nonce });
      if (typeof r.data.admin === 'string') setAdminSession(r.data.admin);
    }
    return;
  }
  if (!credential || !pending?.nonce || !pending.at || Date.now() - pending.at > 900_000) { publish({ kind: 'error', reason: params.get('error') === 'access_denied' ? 'cancelled' : 'other' }); return; }
  if (pending.mode === 'admin') {
    const r = await post('/api/admin/google', { credential, nonce: pending.nonce });
    if (r.ok && typeof r.data.session === 'string') { setAdminSession(r.data.session); window.location.replace('/admin'); }
    else publish({ kind: 'error', reason: r.data.error === 'not_admin' ? 'not_admin' : 'other' });
    return;
  }
  if (pending.mode === 'signin' || pending.mode === 'welcome') {
    const r = await post('/api/google/signin', { credential, nonce: pending.nonce, ...(pending.mode === 'welcome' ? { create: true } : {}) });
    if (typeof r.data.admin === 'string') setAdminSession(r.data.admin); // server-verified owner account
    if (r.ok && typeof r.data.player === 'string' && typeof r.data.nick === 'string') {
      try { window.localStorage.setItem('scilab-player-id', r.data.player); } catch { /* ignored */ }
      saveNick(r.data.nick);
      if (typeof r.data.avatar === 'string') saveAvatar(r.data.avatar);
      if (pending.mode === 'welcome') { try { window.localStorage.setItem('scilab-welcome', 'named'); } catch { /* ignored */ } }
      publish({ kind: 'signedin', nick: r.data.nick, created: r.data.created === true });
    } else publish({ kind: 'error', reason: r.data.error === 'no_account' ? 'no_account' : 'other' });
    return;
  }
  const r = await post('/api/google/link', { player: playerId(), credential, nonce: pending.nonce });
  if (typeof r.data.admin === 'string') setAdminSession(r.data.admin); // server-verified owner account
  if (r.ok) publish({ kind: 'linked' });
  else publish({ kind: 'error', reason: r.data.error === 'already_linked' ? 'already_linked' : r.data.error === 'no_profile' ? 'no_profile' : 'other' });
}

export async function googleLinked(): Promise<boolean> {
  const r = await post('/api/google/status', { player: playerId() });
  return r.ok && r.data.linked === true;
}
// Ends the owner session on this device and on the server (safe direction: only removes access).
export async function endOwnerSession(): Promise<void> {
  const session = getAdminSession();
  if (session) await post('/api/admin/logout', { session });
  clearAdminSession();
}
export async function unlinkGoogle(): Promise<boolean> {
  const ok = (await post('/api/google/unlink', { player: playerId() })).ok;
  if (ok) await endOwnerSession(); // no Google link, no owner session on this device
  return ok;
}
// Sign out of this device: owner session, name, character, photo preview, personal code and player id are removed from
// the device. Scores stay on the server under the old player; the personal code or the Google link brings them back.
// Kept on the device: practice progress, flashcards, theme and language.
export async function signOutDevice(): Promise<void> {
  await endOwnerSession();
  try {
    for (const k of ['scilab-nickname', 'scilab-avatar', 'scilab-code', 'scilab-player-id', 'scilab-photo', 'scilab-frame-synced', 'scilab-frame', 'scilab-owner-silent-at', 'scilab-owner-check-at', PENDING, RESULT]) window.localStorage.removeItem(k);
    window.sessionStorage.clear();
  } catch { /* ignored */ }
  window.location.assign('/');
}

// The owner session only exists on a device after a Google sign-in there. For the owner-marked player on a device with
// no live session, ask Google quietly (prompt=none: no screen, no tap). The server still decides: it issues the session
// only if Google's verified user id matches the owner's. At most one try every 2 hours, and never on other players.
const SILENT_AT = 'scilab-owner-silent-at';
const CHECK_AT = 'scilab-owner-check-at';
export async function trySilentOwner(): Promise<void> {
  try {
    if (/(^|&)(id_token|error)=/.test(window.location.hash.replace(/^#/, ''))) return;
    if (Date.now() - Number(window.localStorage.getItem(SILENT_AT) ?? 0) < 2 * 3600_000) return;
    if (!window.localStorage.getItem('scilab-nickname')) return; // not a registered player on this device
    if (Date.now() - Number(window.localStorage.getItem(CHECK_AT) ?? 0) < 6 * 3600_000) return; // one status call per device per 6 hours
    window.localStorage.setItem(CHECK_AT, String(Date.now()));
    const r = await post('/api/google/status', { player: playerId() });
    if (!r.ok || r.data.owner !== true || r.data.linked !== true) return;
    window.localStorage.setItem(SILENT_AT, String(Date.now()));
    await startGoogle('silent');
  } catch { /* ignored */ }
}
