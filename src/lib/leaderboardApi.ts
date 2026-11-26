// Talks to the /api leaderboard Worker. Every call fails soft: if the API or database is not there
// (local preview, offline, not set up yet) the game still works and the leaderboard is just hidden.
export type Entry = { nick: string; score: number };
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
export function saveNick(nick: string) { try { window.localStorage.setItem(nickKey, nick); } catch { /* session only */ } }

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
