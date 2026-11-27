// Remembers, per device and per game mode, which slides were shown lately, so a new round starts with slides
// the student has not just seen. Nothing leaves the device. When everything was seen, the oldest come first again.
const PREFIX = 'scilab-seen-';

function read(mode: string): string[] {
  try {
    const v: unknown = JSON.parse(window.localStorage.getItem(PREFIX + mode) ?? '[]');
    return Array.isArray(v) ? v.filter((x): x is string => typeof x === 'string') : [];
  } catch { return []; }
}
function write(mode: string, ids: string[]) { try { window.localStorage.setItem(PREFIX + mode, JSON.stringify(ids)); } catch { /* storage full or blocked: variety just resets */ } }

function shuffled<T>(items: T[]): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

// All items in a random order, with the ones not seen recently first (never-seen random, then seen from oldest to newest).
export function orderFresh<T extends { id: string }>(items: T[], mode: string): T[] {
  const seen = read(mode);
  const rank = new Map(seen.map((id, i) => [id, i] as const));
  const fresh = shuffled(items.filter((s) => !rank.has(s.id)));
  const stale = items.filter((s) => rank.has(s.id)).sort((a, b) => (rank.get(a.id) as number) - (rank.get(b.id) as number));
  return [...fresh, ...stale];
}

// Records slides as shown. The memory holds about 80% of the bank so there is always something unseen to pick.
export function markSeen(mode: string, ids: string[], bankSize: number) {
  const cap = Math.max(10, Math.min(800, Math.floor(bankSize * 0.8)));
  const kept = read(mode).filter((id) => !ids.includes(id));
  write(mode, [...kept, ...ids].slice(-cap));
}

export function pickFresh<T extends { id: string }>(items: T[], mode: string, avoid?: string): T {
  const ordered = orderFresh(items, mode);
  const choice = ordered.find((s) => s.id !== avoid) ?? ordered[0];
  markSeen(mode, [choice.id], items.length);
  return choice;
}
