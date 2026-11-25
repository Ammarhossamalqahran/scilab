// Exam progress kept only in this browser (localStorage). Nothing is sent anywhere.
export type ProgressEntry = { right: number; wrong: number };
export type Progress = Record<string, ProgressEntry>;
const key = 'scilab-exam-progress';

export function readProgress(): Progress {
  try {
    const value: unknown = JSON.parse(window.localStorage.getItem(key) ?? '{}');
    if (!value || typeof value !== 'object' || Array.isArray(value)) return {};
    const out: Progress = {};
    for (const [id, entry] of Object.entries(value as Record<string, unknown>)) {
      const e = entry as Partial<ProgressEntry> | null;
      if (e && typeof e.right === 'number' && typeof e.wrong === 'number') out[id] = { right: e.right, wrong: e.wrong };
    }
    return out;
  } catch {
    return {};
  }
}

export function saveProgress(progress: Progress) {
  try { window.localStorage.setItem(key, JSON.stringify(progress)); } catch { /* progress stays for this session only */ }
}

export function recordAnswer(progress: Progress, specimenId: string, correct: boolean): Progress {
  const current = progress[specimenId] ?? { right: 0, wrong: 0 };
  return { ...progress, [specimenId]: correct ? { ...current, right: current.right + 1 } : { ...current, wrong: current.wrong + 1 } };
}

export function totals(progress: Progress) {
  let right = 0; let wrong = 0;
  for (const e of Object.values(progress)) { right += e.right; wrong += e.wrong; }
  return { right, wrong, attempts: right + wrong };
}

// Weak points: specimens answered wrong at least once, worst first.
export function weakPoints(progress: Progress, limit = 5) {
  return Object.entries(progress)
    .filter(([, e]) => e.wrong > 0)
    .sort((a, b) => (b[1].wrong - b[1].right) - (a[1].wrong - a[1].right) || b[1].wrong - a[1].wrong)
    .slice(0, limit)
    .map(([id, e]) => ({ id, ...e }));
}
