import { playerId, saveNick, saveAvatar } from './leaderboardApi';

// Optional Google link (Google Identity Services). Hidden when the site has no Client ID configured.
let clientIdPromise: Promise<string> | null = null;
export function googleClientId(): Promise<string> {
  clientIdPromise ??= fetch('/api/google/config').then((r) => r.json()).then((d: { clientId?: string }) => d.clientId ?? '').catch(() => '');
  return clientIdPromise;
}

type Gis = { accounts: { id: { initialize(o: unknown): void; renderButton(el: HTMLElement, o: unknown): void } } };
let gisPromise: Promise<Gis | null> | null = null;
export function loadGis(): Promise<Gis | null> {
  gisPromise ??= new Promise((resolve) => {
    const w = window as unknown as { google?: Gis };
    if (w.google?.accounts) return resolve(w.google);
    const s = document.createElement('script');
    s.src = 'https://accounts.google.com/gsi/client'; s.async = true;
    s.onload = () => resolve(w.google ?? null);
    s.onerror = () => { gisPromise = null; resolve(null); };
    document.head.appendChild(s);
  });
  return gisPromise;
}

async function post(path: string, body: Record<string, unknown>) {
  try {
    const res = await fetch(path, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) });
    return { ok: res.ok, data: await res.json().catch(() => ({})) as Record<string, unknown> };
  } catch { return { ok: false, data: {} as Record<string, unknown> }; }
}
export type LinkResult = 'ok' | 'already_linked' | 'no_profile' | 'bad_token' | 'other';
export async function linkGoogle(credential: string): Promise<LinkResult> {
  const r = await post('/api/google/link', { player: playerId(), credential });
  if (r.ok) return 'ok';
  const e = r.data.error;
  return e === 'already_linked' || e === 'no_profile' || e === 'bad_token' ? e : 'other';
}
export type SignInResult = { ok: true; nick: string } | { ok: false; reason: 'no_account' | 'bad_token' | 'other' };
// Puts this device on the player linked to the Google account (like entering the code).
export async function signInGoogle(credential: string): Promise<SignInResult> {
  const r = await post('/api/google/signin', { credential });
  if (r.ok && typeof r.data.player === 'string' && typeof r.data.nick === 'string') {
    try { window.localStorage.setItem('scilab-player-id', r.data.player); } catch { /* ignored */ }
    saveNick(r.data.nick);
    if (typeof r.data.avatar === 'string') saveAvatar(r.data.avatar);
    return { ok: true, nick: r.data.nick };
  }
  const e = r.data.error;
  return { ok: false, reason: e === 'no_account' || e === 'bad_token' ? e : 'other' };
}
export async function googleLinked(): Promise<boolean> {
  const r = await post('/api/google/status', { player: playerId() });
  return r.ok && r.data.linked === true;
}
export async function unlinkGoogle(): Promise<boolean> { return (await post('/api/google/unlink', { player: playerId() })).ok; }
