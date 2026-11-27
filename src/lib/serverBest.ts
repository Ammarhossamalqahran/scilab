import { playerId, savedNick } from './leaderboardApi';

// Your personal best on every device: the server's best (from scores it accepted) is merged into the local stats with max().
// This only reads. The server stays the only place a score can be set (tickets), so nothing here can raise a leaderboard score.
const KEYS: Record<string, string> = { sprint60: 'scilab-challenge-stats', tf: 'scilab-tf-stats', dept: 'scilab-dept-stats', survival: 'scilab-survival-stats' };
export async function syncServerBest(): Promise<boolean> {
  if (!savedNick()) return false;
  try {
    const res = await fetch(`/api/me/best?player=${playerId()}`);
    if (!res.ok) return false;
    const data = await res.json() as { modes?: Record<string, { best?: number; bestStreak?: number; games?: number }> };
    let changed = false;
    for (const [mode, key] of Object.entries(KEYS)) {
      const s = data.modes?.[mode]; if (!s) continue;
      const cur = JSON.parse(window.localStorage.getItem(key) ?? 'null') as Record<string, unknown> | null ?? {};
      const num = (x: unknown) => (typeof x === 'number' && Number.isFinite(x) ? x : 0);
      const next = { ...cur, best: Math.max(num(cur.best), num(s.best)), games: Math.max(num(cur.games), num(s.games)) } as Record<string, unknown>;
      if (mode === 'sprint60') next.bestStreak = Math.max(num(cur.bestStreak), num(s.bestStreak));
      if (next.best !== num(cur.best) || next.games !== num(cur.games) || (mode === 'sprint60' && next.bestStreak !== num(cur.bestStreak))) { window.localStorage.setItem(key, JSON.stringify(next)); changed = true; }
    }
    return changed;
  } catch { return false; }
}
