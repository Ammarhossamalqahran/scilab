import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { usePreferences } from '../app/PreferencesContext';
import { specimens } from '../data/scientificData';
import { specimenMedia } from '../data/specimenMedia';
import { readStats, recordGame, badges, DOCTOR_SCORE, type Stats } from '../data/gameStats';

const pool = specimens.filter((s) => specimenMedia[s.id]);
const SECONDS = 60;
type Q = { id: string; options: string[] };

function pick<T>(items: T[]): T { return items[Math.floor(Math.random() * items.length)]; }
function makeQuestion(lang: 'en' | 'ar', last?: string): Q {
  let target = pick(pool);
  for (let i = 0; i < 5 && target.id === last; i++) target = pick(pool);
  const name = (s: { title: { en: string; ar: string } }) => s.title[lang];
  const same = pool.filter((s) => s.department === target.department && name(s) !== name(target));
  const any = pool.filter((s) => name(s) !== name(target));
  const names = new Set<string>([name(target)]);
  const source = same.length >= 3 ? same : any;
  let guard = 0;
  while (names.size < 4 && guard++ < 200) names.add(name(pick(source)));
  return { id: target.id, options: [...names].sort(() => Math.random() - 0.5) };
}

export function ChallengePage() {
  const { locale: lang } = usePreferences();
  const ar = lang === 'ar';
  const [stats, setStats] = useState<Stats>(() => readStats());
  const [phase, setPhase] = useState<'idle' | 'play' | 'over'>('idle');
  const [left, setLeft] = useState(SECONDS);
  const [q, setQ] = useState<Q | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [feedback, setFeedback] = useState<{ chosen: string; right: string } | null>(null);
  const ref = useRef({ score: 0, streak: 0, best: 0, correct: 0 });

  const start = useCallback(() => {
    ref.current = { score: 0, streak: 0, best: 0, correct: 0 };
    setScore(0); setStreak(0); setBestStreak(0); setCorrect(0); setFeedback(null); setLeft(SECONDS); setQ(makeQuestion(lang)); setPhase('play');
  }, [lang]);

  useEffect(() => {
    if (phase !== 'play') return;
    const end = Date.now() + SECONDS * 1000;
    const timer = window.setInterval(() => {
      const remaining = Math.max(0, Math.ceil((end - Date.now()) / 1000));
      setLeft(remaining);
      if (remaining <= 0) {
        window.clearInterval(timer);
        setStats((s) => recordGame(s, ref.current.score, ref.current.best, ref.current.correct));
        setPhase('over');
      }
    }, 200);
    return () => window.clearInterval(timer);
  }, [phase]);

  function answer(option: string) {
    if (!q || feedback) return;
    const right = specimens.find((s) => s.id === q.id)!.title[lang];
    const ok = option === right;
    const r = ref.current;
    if (ok) { r.streak += 1; r.correct += 1; r.score += 10 + Math.min(r.streak - 1, 5) * 2; r.best = Math.max(r.best, r.streak); } else { r.streak = 0; }
    setScore(r.score); setStreak(r.streak); setBestStreak(r.best); setCorrect(r.correct);
    setFeedback({ chosen: option, right });
    window.setTimeout(() => { setFeedback(null); setQ((cur) => makeQuestion(lang, cur?.id)); }, ok ? 350 : 900);
  }

  const earned = badges(stats);
  const beat = score >= DOCTOR_SCORE;
  const taunt = beat
    ? (ar ? 'غلبت الدكتور! بس هو بيتدرب كل يوم.' : 'You beat the Doctor! But he practises every day.')
    : (ar ? `الدكتور جاب ${DOCTOR_SCORE}. ناقصك ${DOCTOR_SCORE - score} نقطة. هتسيبه يكسب؟` : `The Doctor scored ${DOCTOR_SCORE}. You are ${DOCTOR_SCORE - score} short. Will you let him win?`);

  return (
    <div className="page page-challenge">
      <div className="eyebrow">{ar ? 'تحدي' : 'CHALLENGE'}</div>
      <h1 className="chal-title">{ar ? 'تحدي الـ 60 ثانية' : '60-second challenge'}</h1>
      <p className="chal-lead">{ar ? `اعرف أكتر عدد عينات في دقيقة. النقط على جهازك بس. الدكتور جاب ${DOCTOR_SCORE}.` : `Name as many specimens as you can in one minute. Scores stay on your device. The Doctor's score: ${DOCTOR_SCORE}.`}</p>

      {phase === 'idle' && (
        <div className="chal-panel">
          <p>{ar ? `أحسن نتيجة ليك: ${stats.best} · ألعاب: ${stats.games}` : `Your best: ${stats.best} · games played: ${stats.games}`}</p>
          <button className="button button-primary" onClick={start}>{ar ? 'ابدأ' : 'Start'}</button>
        </div>
      )}

      {phase === 'play' && q && (
        <>
          <div className="chal-bar"><span>{left}s</span><span>{ar ? 'النقط' : 'Score'} {score}</span><span>{ar ? 'سلسلة' : 'Streak'} {streak}</span></div>
          <div className="chal-time"><i style={{ width: `${(left / SECONDS) * 100}%` }} /></div>
          <div className="chal-photo"><img src={specimenMedia[q.id].src} alt="" /></div>
          <div className="chal-options">
            {q.options.map((o) => {
              const state = feedback ? (o === feedback.right ? ' is-right' : o === feedback.chosen ? ' is-wrong' : '') : '';
              return <button key={o} className={`chal-option${state}`} onClick={() => answer(o)} disabled={!!feedback}>{o}</button>;
            })}
          </div>
        </>
      )}

      {phase === 'over' && (
        <div className="chal-panel">
          <h2>{ar ? `نتيجتك: ${score}` : `Your score: ${score}`}</h2>
          <p>{ar ? `${correct} صح · أطول سلسلة ${bestStreak} · أحسن نتيجة ${stats.best}` : `${correct} correct · best streak ${bestStreak} · personal best ${stats.best}`}</p>
          <p className="chal-taunt">{taunt}</p>
          <button className="button button-primary" onClick={start}>{ar ? 'العب تاني' : 'Play again'}</button>
        </div>
      )}

      <h2 className="chal-sub">{ar ? 'الشارات' : 'Badges'}</h2>
      <div className="chal-badges">
        {earned.map((b) => (
          <div key={b.id} className={`chal-badge${b.earned ? ' is-earned' : ''}`}>
            <span className="chal-badge-icon">{b.earned ? b.icon : '·'}</span>
            <b>{b.title[lang]}</b><small>{b.hint[lang]}</small>
          </div>
        ))}
      </div>
      {stats.recent.length > 0 && <p className="chal-hint">{ar ? 'آخر نتايجك: ' : 'Recent scores: '}{stats.recent.map((r) => r.score).join(' · ')}</p>}
      <p className="chal-hint"><Link to="/study">{ar ? 'ذاكر بالفلاش كاردز الأول' : 'Warm up with flashcards'}</Link></p>
    </div>
  );
}
