// Light spam guard for the contact forms: one send per device every 30 seconds.
// The forms also carry a hidden field that people never see; bots that fill it are ignored.
const KEY = 'fs-lab-last-send';
const WAIT_MS = 30_000;

export function secondsToWait(): number {
  try {
    const last = Number(localStorage.getItem(KEY) || 0);
    return Math.max(0, Math.ceil((last + WAIT_MS - Date.now()) / 1000));
  } catch {
    return 0;
  }
}

export function markSent() {
  try { localStorage.setItem(KEY, String(Date.now())); } catch { /* storage blocked, guard is skipped */ }
}
