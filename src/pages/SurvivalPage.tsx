import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { usePreferences } from '../app/PreferencesContext';
import { specimens } from '../data/scientificData';
import { pickFresh } from '../lib/recentSeen';
import { specimenMedia } from '../data/specimenMedia';
import { recordResult } from '../data/flashcards';
import { LeaderboardBoard } from '../components/LeaderboardBoard';
import { startTicket, submitScore, savedNick, saveNick } from '../lib/leaderboardApi';

// Survival: three lives, ten seconds per slide, no clock on the whole game. A wrong answer or a timeout costs a life.
// Scoring matches the 60-second game (+10, streak bonus up to +10). The run ends at 3 lives lost or 60 right answers.
const pool = specimens.filter((s) => specimenMedia[s.id]);
const LIVES = 3; const PER_Q = 10; const MAX_RIGHT = 60;
const KEY = 'scilab-survival-stats';
type Stats = { games: number; best: number };
const readStats = (): Stats => { try { const v = JSON.parse(window.localStorage.getItem(KEY) ?? 'null') as Partial<Stats> | null; return { games: Number(v?.games) || 0, best: Number(v?.best) || 0 }; } catch { return { games: 0, best: 0 }; } };
type Q = { id: string; options: string[] };
const pick = <T,>(a: T[]): T => a[Math.floor(Math.random() * a.length)];
function makeQ(lang: 'en' | 'ar', last?: string): Q {
  const t = pickFresh(pool, 'challenge-survival', last);
  const name = (s: { title: { en: string; ar: string } }) => s.title[lang];
  const same = pool.filter((s) => s.department === t.department && name(s) !== name(t));
  const any = pool.filter((s) => name(s) !== name(t));
  const names = new Set<string>([name(t)]);
  const src = same.length >= 3 ? same : any;
  let guard = 0;
  while (names.size < 4 && guard++ < 200) names.add(name(pick(src)));
  return { id: t.id, options: [...names].sort(() => Math.random() - 0.5) };
}

export function SurvivalPage() {
  const { locale: lang } = usePreferences();
  const ar = lang === 'ar';
  const [stats, setStats] = useState<Stats>(readStats);
  const [phase, setPhase] = useState<'idle' | 'play' | 'over'>('idle');
  const [q, setQ] = useState<Q | null>(null);
  const [left, setLeft] = useState(PER_Q);
  const [lives, setLives] = useState(LIVES);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [fb, setFb] = useState<{ chosen: string; right: string } | null>(null);
  const ref = useRef({ score: 0, streak: 0, correct: 0, streakBest: 0, lives: LIVES });
  const ticketRef = useRef<string | null>(null);
  const [nick, setNick] = useState(savedNick);
  const [sub, setSub] = useState<'idle' | 'sending' | 'done' | 'taken' | 'badnick' | 'limited' | 'failed' | 'noticket'>('idle');
  const [rank, setRank] = useState<number | null>(null);

  function start() {
    ref.current = { score: 0, streak: 0, correct: 0, streakBest: 0, lives: LIVES };
    setScore(0); setStreak(0); setCorrect(0); setLives(LIVES); setFb(null); setLeft(PER_Q); setQ(makeQ(lang)); setSub('idle'); ticketRef.current = null;
    void startTicket('survival').then((t) => { ticketRef.current = t; });
    setPhase('play');
  }
  function finish() {
    const next = { games: stats.games + 1, best: Math.max(stats.best, ref.current.score) };
    try { window.localStorage.setItem(KEY, JSON.stringify(next)); } catch { /* ignored */ }
    setStats(next); setPhase('over');
  }
  async function submit() {
    const clean = nick.trim().replace(/\s+/g, ' ');
    if (!ticketRef.current) { setSub('noticket'); return; }
    setSub('sending');
    const r = await submitScore(ticketRef.current, clean, score, correct, ref.current.streakBest);
    if (r.ok) { saveNick(clean); setRank(r.weekRank); setSub('done'); ticketRef.current = null; }
    else setSub(r.reason === 'nick_taken' ? 'taken' : r.reason === 'bad_nick' ? 'badnick' : r.reason === 'rate_limited' ? 'limited' : 'failed');
  }
  useEffect(() => {
    if (phase === 'over' && score > 0 && savedNick().length >= 2 && ticketRef.current) void submit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);
  useEffect(() => {
    if (phase === 'over' && score > 0 && savedNick().length >= 2 && ticketRef.current) void submit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  // Per-question clock: running out costs a life.
  useEffect(() => {
    if (phase !== 'play' || !q || fb) return;
    const end = Date.now() + PER_Q * 1000;
    setLeft(PER_Q);
    const timer = window.setInterval(() => {
      const remaining = Math.max(0, Math.ceil((end - Date.now()) / 1000));
      setLeft(remaining);
      if (remaining <= 0) { window.clearInterval(timer); answer(''); }
    }, 200);
    return () => window.clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, q, fb]);

  function answer(option: string) {
    if (!q || fb) return;
    const right = specimens.find((s) => s.id === q.id)!.title[lang];
    const ok = option === right;
    recordResult(q.id, ok);
    const r = ref.current;
    if (ok) { r.streak += 1; r.streakBest = Math.max(r.streakBest, r.streak); r.correct += 1; r.score += 10 + Math.min(r.streak - 1, 5) * 2; }
    else { r.streak = 0; r.lives -= 1; }
    setScore(r.score); setStreak(r.streak); setCorrect(r.correct); setLives(r.lives);
    setFb({ chosen: option, right });
    window.setTimeout(() => {
      setFb(null);
      if (r.lives <= 0 || r.correct >= MAX_RIGHT) finish(); else setQ((cur) => makeQ(lang, cur?.id));
    }, ok ? 350 : 1100);
  }

  const dots = (n: number) => Array.from({ length: LIVES }, (_, i) => <span key={i} style={{ color: i < n ? '#c0392b' : '#bbb', fontSize: 20 }}>{i < n ? '\u25CF' : '\u25CB'}</span>);
  return (
    <div className="page page-challenge">
      <div className="eyebrow">{ar ? 'تحدي' : 'CHALLENGE'}</div>
      <h1 className="chal-title">{ar ? 'البقاء: 3 فرص' : 'Survival: 3 lives'}</h1>
      <p className="chal-lead">{ar ? `3 فرص و${PER_Q} ثواني لكل شريحة. الغلط أو انتهاء الوقت بياخد فرصة. اللعبة بتخلص لما الفرص تخلص. ليها لوحة شرف خاصة.` : `Three lives and ${PER_Q} seconds per slide. A wrong answer or a timeout costs a life. The run ends when they are gone. It has its own leaderboard.`}</p>
      {phase === 'idle' && (
        <div className="chal-panel">
          <p>{ar ? `أحسن نتيجة ليك: ${stats.best} · ألعاب: ${stats.games}` : `Your best: ${stats.best} · games played: ${stats.games}`}</p>
          <button className="button button-primary" onClick={start}>{ar ? 'ابدأ' : 'Start'}</button>
          <p><Link to="/challenge">{ar ? 'تحدي الـ 60 ثانية' : '60-second challenge'}</Link></p>
        </div>
      )}
      {phase === 'play' && q && (
        <>
          <div className="chal-bar"><span>{left}s</span><span>{dots(lives)}</span><span>{ar ? 'النقط' : 'Score'} {score}</span></div>
          <div className="chal-time"><i style={{ width: `${(left / PER_Q) * 100}%` }} /></div>
          <div className="chal-photo"><img src={specimenMedia[q.id].src} alt="" /></div>
          <div className="chal-options">
            {q.options.map((o) => {
              const state = fb ? (o === fb.right ? ' is-right' : o === fb.chosen ? ' is-wrong' : '') : '';
              return <button key={o} className={`chal-option${state}`} onClick={() => answer(o)} disabled={!!fb}>{o}</button>;
            })}
          </div>
          <p className="chal-hint">{ar ? `سلسلة ${streak}` : `Streak ${streak}`}</p>
        </>
      )}
      {phase === 'over' && (
        <div className="chal-panel">
          <h2>{ar ? `نتيجتك: ${score}` : `Your score: ${score}`}</h2>
          <p>{ar ? `${correct} صح · أحسن نتيجة ${stats.best}` : `${correct} correct · personal best ${stats.best}`}</p>
          {score > 0 && sub !== 'done' && (
            <div className="chal-submit">
              <input value={nick} maxLength={16} onChange={(e) => { setNick(e.target.value); if (sub !== 'sending') setSub('idle'); }} placeholder={ar ? 'اسمك (بيظهر في لوحة الشرف)' : 'Your name (shown on the leaderboard)'} />
              <button className="button" onClick={submit} disabled={nick.trim().length < 2 || sub === 'sending'}>{ar ? 'سجّل في لوحة الشرف' : 'Post to leaderboard'}</button>
              {sub === 'taken' && <small>{ar ? 'الاسم ده مأخوذ. جرب اسم تاني.' : 'That nickname is taken. Try another.'}</small>}
              {sub === 'badnick' && <small>{ar ? 'الاسم لازم 2 لـ 16 حرف أو رقم.' : 'Use 2 to 16 letters or numbers.'}</small>}
              {sub === 'limited' && <small>{ar ? 'حاولت كتير. جرب بعد شوية.' : 'Too many tries. Try again later.'}</small>}
              {sub === 'sending' && <small className="chal-ok">{ar ? 'بنسجل نتيجتك...' : 'Posting your score...'}</small>}
              {sub === 'noticket' && <small>{ar ? 'ماقدرناش نوصل للسيرفر. النتيجة محفوظة على جهازك. ابدأ جولة جديدة.' : 'Could not reach the server. Your score is kept on this device. Start a new round.'}</small>}
              {sub === 'failed' && <small>{ar ? 'ماقدرناش نسجل النتيجة. جرب تاني.' : 'Could not post the score. Try again.'}</small>}
            </div>
          )}
          {sub === 'done' && <p className="chal-taunt">{ar ? `اتسجلت! ترتيبك الأسبوع ده: ${rank ?? '-'}` : `Posted! Your rank this week: ${rank ?? '-'}`}</p>}
          <button className="button button-primary" onClick={start}>{ar ? 'العب تاني' : 'Play again'}</button>
        </div>
      )}
      <LeaderboardBoard mode="survival" refreshKey={sub} />
    </div>
  );
}
