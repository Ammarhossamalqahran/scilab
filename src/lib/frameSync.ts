import { playerId, savedNick } from './leaderboardApi';
import { FRAMES } from '../data/frames';

// The server keeps the frame a player wears (shown on the leaderboard). A device adopts it unless the user changed the
// frame on this device and it was not sent yet. Never sends anything: the default gold of a new device cannot overwrite it.
const FRAME = 'scilab-frame';
const SYNCED = 'scilab-frame-synced';
const CHECKED = 'scilab-frame-checked';
export async function adoptServerFrame(force = false): Promise<void> {
  try {
    const ls = window.localStorage;
    if (!savedNick()) return;
    if (!force && ls.getItem(FRAME) && Date.now() - Number(ls.getItem(CHECKED) ?? 0) < 30 * 60_000) return;
    ls.setItem(CHECKED, String(Date.now()));
    const res = await fetch('/api/google/status', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ player: playerId() }) });
    const d = await res.json().catch(() => ({})) as { frame?: unknown };
    const sf = typeof d.frame === 'string' && FRAMES.some((f) => f.id === d.frame) ? d.frame : null;
    if (!sf) return;
    const local = ls.getItem(FRAME);
    if (local && local !== sf && local !== ls.getItem(SYNCED)) return; // changed here, not sent yet: the sync effect sends it
    ls.setItem(SYNCED, sf);
    if (local !== sf) { ls.setItem(FRAME, sf); window.dispatchEvent(new Event('scilab-frame')); }
  } catch { /* ignored */ }
}

// Verified owner session on a device with no profile (after sign out): take the owner's own profile so name, character and frame show.
export function adoptOwnerProfile(p: { id?: string; nick?: string; avatar?: string | null; frame?: string | null } | null | undefined): void {
  try {
    const ls = window.localStorage;
    if (!p || ls.getItem('scilab-nickname') || typeof p.id !== 'string' || !/^[0-9a-f-]{36}$/.test(p.id) || typeof p.nick !== 'string') return;
    ls.setItem('scilab-player-id', p.id); ls.setItem('scilab-nickname', p.nick);
    if (typeof p.avatar === 'string') ls.setItem('scilab-avatar', p.avatar);
    if (typeof p.frame === 'string' && FRAMES.some((f) => f.id === p.frame)) { ls.setItem(FRAME, p.frame); ls.setItem(SYNCED, p.frame); }
    window.dispatchEvent(new Event('scilab-profile-changed')); window.dispatchEvent(new Event('scilab-frame'));
  } catch { /* ignored */ }
}
