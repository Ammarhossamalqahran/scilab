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
