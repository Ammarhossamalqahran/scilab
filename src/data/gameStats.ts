// Challenge scores and badges kept only in this browser (localStorage). Nothing is sent anywhere.
export type Stats = { games: number; best: number; bestStreak: number; totalCorrect: number; recent: { score: number; at: number }[] };
const key = 'scilab-challenge-stats';
export const DOCTOR_SCORE = 120; // the target score on the site: "beat the Doctor"
const empty: Stats = { games: 0, best: 0, bestStreak: 0, totalCorrect: 0, recent: [] };

export function readStats(): Stats {
  try {
    const v = JSON.parse(window.localStorage.getItem(key) ?? 'null') as Partial<Stats> | null;
    if (!v || typeof v !== 'object') return { ...empty };
    const n = (x: unknown) => (typeof x === 'number' && Number.isFinite(x) ? x : 0);
    return { games: n(v.games), best: n(v.best), bestStreak: n(v.bestStreak), totalCorrect: n(v.totalCorrect),
      recent: Array.isArray(v.recent) ? v.recent.filter((r) => r && typeof r.score === 'number').slice(0, 5).map((r) => ({ score: r.score, at: n(r.at) })) : [] };
  } catch { return { ...empty }; }
}
export function recordGame(stats: Stats, score: number, streak: number, correct: number): Stats {
  const next: Stats = { games: stats.games + 1, best: Math.max(stats.best, score), bestStreak: Math.max(stats.bestStreak, streak), totalCorrect: stats.totalCorrect + correct,
    recent: [{ score, at: Date.now() }, ...stats.recent].slice(0, 5) };
  try { window.localStorage.setItem(key, JSON.stringify(next)); } catch { /* kept for this session only */ }
  return next;
}
function readJson(k: string): Record<string, { right?: number; wrong?: number; streak?: number }> {
  try { const v = JSON.parse(window.localStorage.getItem(k) ?? '{}'); return v && typeof v === 'object' ? v : {}; } catch { return {}; }
}
export type Badge = { id: string; icon: string; title: { en: string; ar: string }; hint: { en: string; ar: string }; earned: boolean };
export function badges(stats: Stats): Badge[] {
  const exam = Object.values(readJson('scilab-exam-progress')).reduce((n, e) => n + (e.right ?? 0) + (e.wrong ?? 0), 0);
  const mastered = Object.values(readJson('scilab-flashcards')).filter((c) => (c.streak ?? 0) >= 2).length;
  return [
    { id: 'first', icon: '◉', title: { en: 'First slide', ar: 'أول شريحة' }, hint: { en: 'Finish one 60-second challenge', ar: 'خلّص تحدي الـ 60 ثانية مرة' }, earned: stats.games >= 1 },
    { id: 'score100', icon: '★', title: { en: 'Sharp eye', ar: 'عين صقر' }, hint: { en: 'Score 100 in a challenge', ar: 'هات 100 نقطة في تحدي' }, earned: stats.best >= 100 },
    { id: 'doctor', icon: '♛', title: { en: 'Beat the Doctor', ar: 'غلبت الدكتور' }, hint: { en: `Score ${DOCTOR_SCORE} or more`, ar: `هات ${DOCTOR_SCORE} نقطة أو أكتر` }, earned: stats.best >= DOCTOR_SCORE },
    { id: 'streak8', icon: '▲', title: { en: 'On fire', ar: 'ولعت' }, hint: { en: '8 correct in a row', ar: '8 إجابات صح ورا بعض' }, earned: stats.bestStreak >= 8 },
    { id: 'games10', icon: '●', title: { en: 'Regular', ar: 'مواظب' }, hint: { en: 'Play 10 challenges', ar: 'العب 10 تحديات' }, earned: stats.games >= 10 },
    { id: 'cards20', icon: '▤', title: { en: 'Card master', ar: 'سيد الكروت' }, hint: { en: 'Master 20 flashcards', ar: 'اتقن 20 كارت فلاش' }, earned: mastered >= 20 },
    { id: 'exam50', icon: '✎', title: { en: 'Exam grinder', ar: 'مجتهد الامتحان' }, hint: { en: 'Answer 50 practical-exam questions', ar: 'جاوب 50 سؤال في الامتحان العملي' }, earned: exam >= 50 },
  ];
}
