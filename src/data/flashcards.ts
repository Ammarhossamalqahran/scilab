// Flashcard progress kept only in this browser (localStorage). Nothing is sent anywhere.
export type CardState = { streak: number; misses: number; last: number };
export type CardBook = Record<string, CardState>;
const key = 'scilab-flashcards';

export function readCards(): CardBook {
  try {
    const value: unknown = JSON.parse(window.localStorage.getItem(key) ?? '{}');
    if (!value || typeof value !== 'object' || Array.isArray(value)) return {};
    const out: CardBook = {};
    for (const [id, c] of Object.entries(value as Record<string, unknown>)) {
      const e = c as Partial<CardState> | null;
      if (e && typeof e.streak === 'number' && typeof e.misses === 'number') out[id] = { streak: e.streak, misses: e.misses, last: typeof e.last === 'number' ? e.last : 0 };
    }
    return out;
  } catch { return {}; }
}
export function saveCards(book: CardBook) {
  try { window.localStorage.setItem(key, JSON.stringify(book)); } catch { /* kept for this session only */ }
}
export function markCard(book: CardBook, id: string, known: boolean): CardBook {
  const c = book[id] ?? { streak: 0, misses: 0, last: 0 };
  return { ...book, [id]: known ? { ...c, streak: c.streak + 1, last: Date.now() } : { streak: 0, misses: c.misses + 1, last: Date.now() } };
}
// Cards missed at least once and not yet answered right twice in a row.
export function dueIds(book: CardBook): string[] {
  return Object.entries(book).filter(([, c]) => c.misses > 0 && c.streak < 2).map(([id]) => id);
}
