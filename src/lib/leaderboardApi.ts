// Talks to the /api leaderboard Worker. Every call fails soft: if the API or database is not there
// (local preview, offline, not set up yet) the game still works and the leaderboard is just hidden.
export type Entry = { nick: string; score: number; avatar?: string | null };
const playerKey = 'scilab-player-id';
const nickKey = 'scilab-nickname';

export function playerId(): string {
  try {
    let id = window.localStorage.getItem(playerKey);
    if (!id || !/^[0-9a-f-]{36}$/.test(id)) { id = crypto.randomUUID(); window.localStorage.setItem(playerKey, id); }
    return id;
  } catch { return crypto.randomUUID(); }
}
export function savedNick(): string { try { return window.localStorage.getItem(nickKey) ?? ''; } catch { return ''; } }
export function saveNick(nick: string) { try { window.localStorage.setItem(nickKey, nick); } catch { /* session only */ } changed(); }
const avatarKey = 'scilab-avatar';
const codeKey = 'scilab-code';
// Tells the profile button and dialog to re-read the saved profile.
export const changed = () => { try { window.dispatchEvent(new Event('scilab-profile-changed')); } catch { /* ignored */ } };
export function savedAvatar(): string { try { return window.localStorage.getItem(avatarKey) ?? ''; } catch { return ''; } }
export function saveAvatar(id: string) { try { window.localStorage.setItem(avatarKey, id); } catch { /* session only */ } changed(); }
// The personal code is kept on this device so the profile can show it again (the server only keeps a hash).
export function savedCode(): string { try { return window.localStorage.getItem(codeKey) ?? ''; } catch { return ''; } }
export function saveCode(code: string) { try { window.localStorage.setItem(codeKey, code); } catch { /* session only */ } changed(); }

async function call(path: string, init?: RequestInit) {
  const res = await fetch(path, { ...init, headers: { 'content-type': 'application/json' } });
  const data = await res.json().catch(() => ({})) as Record<string, unknown>;
  return { ok: res.ok, status: res.status, data };
}

export async function startTicket(): Promise<string | null> {
  try { const r = await call('/api/game/start', { method: 'POST' }); return r.ok && typeof r.data.ticket === 'string' ? r.data.ticket : null; } catch { return null; }
}
export async function fetchBoard(period: 'week' | 'all'): Promise<Entry[] | null> {
  try { const r = await call(`/api/leaderboard?period=${period}`); return r.ok && Array.isArray(r.data.entries) ? (r.data.entries as Entry[]) : null; } catch { return null; }
}
export type SubmitResult = { ok: true; weekRank: number | null } | { ok: false; reason: 'nick_taken' | 'bad_nick' | 'rate_limited' | 'other' };
export async function submitScore(ticket: string, nick: string, score: number, correct: number, streak: number): Promise<SubmitResult> {
  try {
    const r = await call('/api/score', { method: 'POST', body: JSON.stringify({ ticket, player: playerId(), nick, score, correct, streak }) });
    if (r.ok) return { ok: true, weekRank: typeof r.data.weekRank === 'number' ? r.data.weekRank : null };
    const e = r.data.error;
    return { ok: false, reason: e === 'nick_taken' || e === 'bad_nick' || e === 'rate_limited' ? e : 'other' };
  } catch { return { ok: false, reason: 'other' }; }
}

export const NICK_OK = /^[\p{L}\p{N}][\p{L}\p{N} _\-.]{1,15}$/u;
// 'free' | 'taken' | 'unknown' (API unreachable: accept the name, the server checks again when a score is posted).
export async function checkNick(nick: string): Promise<'free' | 'taken' | 'unknown'> {
  try {
    const r = await call(`/api/nick?n=${encodeURIComponent(nick)}&player=${playerId()}`);
    if (!r.ok) return 'unknown';
    return r.data.available ? 'free' : 'taken';
  } catch { return 'unknown'; }
}

export type CodeResult = { ok: true; code: string } | { ok: false; reason: 'nick_taken' | 'bad_nick' | 'rate_limited' | 'other' };
// Registers the name on the server (if new) and returns a personal recovery code, shown once.
export async function createCode(nick: string, avatar?: string): Promise<CodeResult> {
  try {
    const r = await call('/api/code/create', { method: 'POST', body: JSON.stringify({ player: playerId(), nick, avatar: avatar || undefined }) });
    if (r.ok && typeof r.data.code === 'string') { saveCode(r.data.code); return { ok: true, code: r.data.code }; }
    const e = r.data.error;
    return { ok: false, reason: e === 'nick_taken' || e === 'bad_nick' || e === 'rate_limited' ? e : 'other' };
  } catch { return { ok: false, reason: 'other' }; }
}
export type RestoreResult = { ok: true; nick: string } | { ok: false; reason: 'bad_code' | 'rate_limited' | 'other' };
// Puts this device on the player the code belongs to (name, scores, pending winner message).
export async function restoreCode(code: string): Promise<RestoreResult> {
  try {
    const r = await call('/api/code/restore', { method: 'POST', body: JSON.stringify({ code }) });
    if (r.ok && typeof r.data.player === 'string' && typeof r.data.nick === 'string') {
      try { window.localStorage.setItem(playerKey, r.data.player); } catch { /* ignored */ }
      saveNick(r.data.nick);
      saveCode(code.toUpperCase().replace(/[^A-Z0-9]/g, '').replace(/^(.{5})(.{5})$/, '$1-$2'));
      if (typeof r.data.avatar === 'string') saveAvatar(r.data.avatar);
      return { ok: true, nick: r.data.nick };
    }
    return { ok: false, reason: r.data.error === 'bad_code' ? 'bad_code' : r.data.error === 'rate_limited' ? 'rate_limited' : 'other' };
  } catch { return { ok: false, reason: 'other' }; }
}

export type ProfileResult = { ok: true; nick: string } | { ok: false; reason: 'nick_taken' | 'bad_nick' | 'no_profile' | 'rate_limited' | 'other' };
// Change the name and/or avatar of this player on the server.
export async function updateProfile(patch: { nick?: string; avatar?: string }): Promise<ProfileResult> {
  try {
    const r = await call('/api/profile', { method: 'POST', body: JSON.stringify({ player: playerId(), ...patch }) });
    if (r.ok) return { ok: true, nick: typeof r.data.nick === 'string' ? r.data.nick : patch.nick ?? '' };
    const e = r.data.error;
    return { ok: false, reason: e === 'nick_taken' || e === 'bad_nick' || e === 'no_profile' || e === 'rate_limited' ? e : 'other' };
  } catch { return { ok: false, reason: 'other' }; }
}
