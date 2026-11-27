// Flashcard progress kept only in this browser (localStorage). Nothing is sent anywhere.
export type CardState = { streak: number; misses: number; last: number; due?: number };
export type CardBook = Record<string, CardState>;
const key = 'scilab-flashcards';

export function readCards(): CardBook {
  try {
    const value: unknown = JSON.parse(window.localStorage.getItem(key) ?? '{}');
    if (!value || typeof value !== 'object' || Array.isArray(value)) return {};
    const out: CardBook = {};
    for (const [id, c] of Object.entries(value as Record<string, unknown>)) {
      const e = c as Partial<CardState> | null;
      if (e && typeof e.streak === 'number' && typeof e.misses === 'number') out[id] = { streak: e.streak, misses: e.misses, last: typeof e.last === 'number' ? e.last : 0, ...(typeof e.due === 'number' ? { due: e.due } : {}) };
    }
    return out;
  } catch { return {}; }
}
export function saveCards(book: CardBook) {
  try { window.localStorage.setItem(key, JSON.stringify(book)); } catch { /* kept for this session only */ }
}
// Spaced repetition: a missed card is due again at once. Each right answer in a row pushes it further out
// (1, 3, 7, then 14 days). A wrong answer brings it back to "due now".
const DAY = 24 * 60 * 60 * 1000;
const STEPS_DAYS = [1, 3, 7, 14];
export function markCard(book: CardBook, id: string, known: boolean, now = Date.now()): CardBook {
  const c = book[id] ?? { streak: 0, misses: 0, last: 0 };
  if (!known) return { ...book, [id]: { streak: 0, misses: c.misses + 1, last: now, due: now } };
  const streak = c.streak + 1;
  return { ...book, [id]: { ...c, streak, last: now, due: now + STEPS_DAYS[Math.min(streak - 1, STEPS_DAYS.length - 1)] * DAY } };
}
// Cards from older versions have no due time: treat unfinished ones as due now.
function dueAt(c: CardState): number { return c.due ?? (c.streak < 2 ? 0 : c.last + 3 * DAY); }
// Cards that were missed at least once and whose review time has come.
export function dueIds(book: CardBook, now = Date.now()): string[] {
  return Object.entries(book).filter(([, c]) => c.misses > 0 && dueAt(c) <= now).map(([id]) => id);
}
// When the next missed card comes due, or null when none is waiting.
export function nextDue(book: CardBook, now = Date.now()): number | null {
  const times = Object.values(book).filter((c) => c.misses > 0 && dueAt(c) > now).map(dueAt);
  return times.length ? Math.min(...times) : null;
}
// Called by the tests and games: a wrong answer adds the slide to the review list;
// a right answer only moves a slide that is already being reviewed.
export function recordResult(id: string, correct: boolean) {
  const book = readCards();
  if (correct && !(book[id] && book[id].misses > 0)) return;
  saveCards(markCard(book, id, correct));
}
