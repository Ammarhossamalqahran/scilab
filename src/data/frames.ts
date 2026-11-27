import { readStats } from './gameStats';

// Avatar frames. Everyone starts with the gold ring. Others unlock by what the student does.
// Stage 1 (this file): frames that can be checked on the device (visit streak, best score).
// Frames that need the server (rank 1 for a month, three months in a row) are listed as "soon" and cannot be equipped yet.
export type Metal = 'bronze' | 'silver' | 'gold' | 'diamond' | 'ruby' | 'emerald' | 'amethyst';
export type Deco = 'none' | 'beads' | 'laurel' | 'wings' | 'crown' | 'wings-crown' | 'laurel-crown' | 'rays' | 'rays-crown';
export type Spec = { metal: Metal; deco: Deco; glow?: boolean; beads?: boolean };
export type Frame = { id: string; name: { en: string; ar: string }; how: { en: string; ar: string }; ring: string; soon?: boolean };
// Look of each frame (drawn by components/FramedAvatar.tsx). Tier order: bronze, silver, gold, diamond, plus ruby for beating the Doctor.
const SPECS: Record<string, Spec> = {
  gold: { metal: 'gold', deco: 'beads' },
  streak7: { metal: 'bronze', deco: 'beads' },
  streak30: { metal: 'silver', deco: 'laurel' },
  score50: { metal: 'bronze', deco: 'laurel' },
  score100: { metal: 'silver', deco: 'wings' },
  doctor: { metal: 'ruby', deco: 'wings', glow: true },
  streak14: { metal: 'emerald', deco: 'beads' },
  streak60: { metal: 'gold', deco: 'laurel-crown', glow: true },
  tface: { metal: 'amethyst', deco: 'rays', glow: true },
  deptmaster: { metal: 'emerald', deco: 'laurel-crown', glow: true },
  survivor: { metal: 'amethyst', deco: 'wings', glow: true },
  allround: { metal: 'diamond', deco: 'rays-crown', glow: true },
  'rank1-month': { metal: 'gold', deco: 'wings-crown', glow: true },
  'rank1-x3': { metal: 'diamond', deco: 'wings-crown', glow: true },
};
export const frameSpec = (id: string): Spec => SPECS[id] ?? SPECS.gold;
export const FRAMES: Frame[] = [
  { id: 'gold', name: { en: 'Gold ring', ar: 'الحلقة الذهبية' }, how: { en: 'Everyone starts with this one', ar: 'بتبدأ بيها من أول يوم' }, ring: 'linear-gradient(135deg,#f2d27a,#b8860b)' },
  { id: 'streak7', name: { en: 'Week streak', ar: 'أسبوع متواصل' }, how: { en: 'Visit 7 days in a row', ar: 'ادخل الموقع 7 أيام ورا بعض' }, ring: 'linear-gradient(135deg,#6fe0b0,#127a55)' },
  { id: 'streak30', name: { en: 'Month streak', ar: 'شهر متواصل' }, how: { en: 'Visit 30 days in a row', ar: 'ادخل الموقع 30 يوم ورا بعض' }, ring: 'linear-gradient(135deg,#7fd3ff,#1b5fa8,#7fd3ff)' },
  { id: 'score50', name: { en: 'Sharp eye', ar: 'عين حادة' }, how: { en: 'Score 50 in the 60-second challenge', ar: 'هات 50 في تحدي الـ 60 ثانية' }, ring: 'linear-gradient(135deg,#d9a273,#8a5a2b)' },
  { id: 'score100', name: { en: 'Lab pro', ar: 'محترف معمل' }, how: { en: 'Score 100 in the 60-second challenge', ar: 'هات 100 في تحدي الـ 60 ثانية' }, ring: 'linear-gradient(135deg,#e8eef2,#8b9aa5)' },
  { id: 'doctor', name: { en: 'Beat the Doctor', ar: 'غلبت الدكتور' }, how: { en: 'Score 120 or more', ar: 'هات 120 أو أكتر' }, ring: 'linear-gradient(135deg,#ff9aa8,#b3123a,#ff9aa8)' },
  { id: 'streak14', name: { en: 'Two weeks', ar: 'أسبوعين متواصلين' }, how: { en: 'Visit 14 days in a row', ar: 'ادخل الموقع 14 يوم ورا بعض' }, ring: 'linear-gradient(135deg,#7be0b0,#0f7a4f)' },
  { id: 'streak60', name: { en: 'Two months', ar: 'شهرين متواصلين' }, how: { en: 'Visit 60 days in a row', ar: 'ادخل الموقع 60 يوم ورا بعض' }, ring: 'linear-gradient(135deg,#ffe27a,#d4a017)' },
  { id: 'tface', name: { en: 'Sharp judge', ar: 'قاضي دقيق' }, how: { en: 'Score 70 in the true or false sprint', ar: 'هات 70 في تحدي صح ولا غلط' }, ring: 'linear-gradient(135deg,#c9a7ff,#6b2fb3)' },
  { id: 'deptmaster', name: { en: 'Department master', ar: 'سيد الأقسام' }, how: { en: 'Score 100 in Which department?', ar: 'هات 100 في تحدي تبع أنهي قسم' }, ring: 'linear-gradient(135deg,#7be0b0,#0f7a4f)' },
  { id: 'survivor', name: { en: 'Survivor', ar: 'الناجي' }, how: { en: 'Score 150 in Survival', ar: 'هات 150 في تحدي البقاء' }, ring: 'linear-gradient(135deg,#c9a7ff,#6b2fb3)' },
  { id: 'allround', name: { en: 'All-rounder', ar: 'لاعب شامل' }, how: { en: 'Play all four challenges', ar: 'العب التحديات الأربعة' }, ring: 'linear-gradient(135deg,#e9fbff,#55c7f0)' },
  { id: 'rank1-month', name: { en: 'Monthly champion', ar: 'بطل الشهر' }, how: { en: 'Finish a month at rank 1', ar: 'اخلص الشهر في المركز الأول' }, ring: 'linear-gradient(135deg,#ffe27a,#d4a017,#fff3b0)', soon: true },
  { id: 'rank1-x3', name: { en: 'Hat-trick champion', ar: 'بطل 3 شهور ورا بعض' }, how: { en: 'Rank 1 three months in a row', ar: 'المركز الأول 3 شهور ورا بعض' }, ring: 'linear-gradient(135deg,#fff3b0,#d4a017,#b8860b,#fff3b0)', soon: true },
];

// ---- Visit streak (days in a row), kept on the device ----
const VISITS = 'scilab-visits';
const FRAME = 'scilab-frame';
type Visits = { last: string; streak: number; best: number };
const dayKey = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
export function readVisits(): Visits {
  try { const v = JSON.parse(window.localStorage.getItem(VISITS) ?? 'null') as Partial<Visits> | null; if (v && typeof v.last === 'string') return { last: v.last, streak: Number(v.streak) || 1, best: Number(v.best) || 1 }; } catch { /* fresh */ }
  return { last: '', streak: 0, best: 0 };
}
// Call once per app start. Same day: nothing. Next day: streak + 1. Gap: back to 1.
export function recordVisit(now = new Date()): Visits {
  const v = readVisits(); const today = dayKey(now);
  if (v.last === today) return v;
  const y = new Date(now); y.setDate(y.getDate() - 1);
  const streak = v.last === dayKey(y) ? v.streak + 1 : 1;
  const next = { last: today, streak, best: Math.max(v.best, streak) };
  try { window.localStorage.setItem(VISITS, JSON.stringify(next)); } catch { /* ignored */ }
  return next;
}

// Set only after the server confirmed a live owner session (AppShell). Never read from storage.
let ownerVerified = false;
export function setOwnerFrames(on: boolean) { if (ownerVerified !== on) { ownerVerified = on; try { window.dispatchEvent(new Event('scilab-frame')); } catch { /* ignored */ } } }

// Best score and games of the other challenge modes (kept on this device by each challenge page).
function modeStats(key: string): { best: number; games: number } {
  try { const v = JSON.parse(window.localStorage.getItem(key) ?? 'null') as { best?: unknown; games?: unknown } | null; return { best: Number(v?.best) || 0, games: Number(v?.games) || 0 }; } catch { return { best: 0, games: 0 }; }
}
export function earnedFrames(): Set<string> {
  const v = readVisits(); const s = readStats();
  const e = new Set<string>(['gold']);
  if (ownerVerified) { FRAMES.forEach((f) => e.add(f.id)); return e; }
  if (v.best >= 7) e.add('streak7');
  if (v.best >= 14) e.add('streak14');
  if (v.best >= 30) e.add('streak30');
  if (v.best >= 60) e.add('streak60');
  const tf = modeStats('scilab-tf-stats'), dp = modeStats('scilab-dept-stats'), sv = modeStats('scilab-survival-stats');
  if (tf.best >= 70) e.add('tface');
  if (dp.best >= 100) e.add('deptmaster');
  if (sv.best >= 150) e.add('survivor');
  if (s.games > 0 && tf.games > 0 && dp.games > 0 && sv.games > 0) e.add('allround');
  if (s.best >= 50) e.add('score50');
  if (s.best >= 100) e.add('score100');
  if (s.best >= 120) e.add('doctor');
  return e;
}
export function selectedFrame(): string {
  try { const id = window.localStorage.getItem(FRAME) ?? 'gold'; return earnedFrames().has(id) ? id : 'gold'; } catch { return 'gold'; }
}
export function selectFrame(id: string) { if (earnedFrames().has(id)) { try { window.localStorage.setItem(FRAME, id); window.dispatchEvent(new Event('scilab-frame')); } catch { /* ignored */ } } }
export const frameById = (id: string) => FRAMES.find((f) => f.id === id) ?? FRAMES[0];
