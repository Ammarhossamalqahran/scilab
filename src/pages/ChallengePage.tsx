import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { usePreferences } from '../app/PreferencesContext';
import { specimens } from '../data/scientificData';
import { specimenMedia } from '../data/specimenMedia';
import { Avatar } from '../data/avatars';
import { fetchBoard, startTicket, submitScore, savedNick, saveNick, type Entry } from '../lib/leaderboardApi';
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
  const ticketRef = useRef<string | null>(null);
  const [period, setPeriod] = useState<'week' | 'all'>('week');
  const [board, setBoard] = useState<Entry[] | null>(null);
  const [nick, setNick] = useState(savedNick);
  const [submitState, setSubmitState] = useState<'idle' | 'sending' | 'done' | 'taken' | 'badnick' | 'limited' | 'failed' | 'noticket'>('idle');
  const [weekRank, setWeekRank] = useState<number | null>(null);
  useEffect(() => { let live = true; fetchBoard(period).then((b) => { if (live) setBoard(b); }); return () => { live = false; }; }, [period, submitState]);

  const start = useCallback(() => {
    ref.current = { score: 0, streak: 0, best: 0, correct: 0 };
    setScore(0); setStreak(0); setBestStreak(0); setCorrect(0); setFeedback(null); setLeft(SECONDS); setQ(makeQuestion(lang)); setSubmitState('idle'); ticketRef.current = null; void startTicket().then((t) => { ticketRef.current = t; }); setPhase('play');
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

  async function submit() {
    const clean = nick.trim().replace(/\s+/g, ' ');
    if (!ticketRef.current) { setSubmitState('noticket'); return; }
    setSubmitState('sending');
    const r = await submitScore(ticketRef.current, clean, score, correct, bestStreak);
    if (r.ok) { saveNick(clean); setWeekRank(r.weekRank); setSubmitState('done'); ticketRef.current = null; }
    else setSubmitState(r.reason === 'nick_taken' ? 'taken' : r.reason === 'bad_nick' ? 'badnick' : r.reason === 'rate_limited' ? 'limited' : 'failed');
  }
  // With a saved name the score is posted automatically when the game ends, so it cannot be forgotten.
  useEffect(() => {
    if (phase === 'over' && score > 0 && savedNick().length >= 2 && ticketRef.current) void submit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);
  const earned = badges(stats);
  const beat = score >= DOCTOR_SCORE;
  const taunt = beat
    ? (ar ? 'غلبت الدكتور! بس هو بيتدرب كل يوم.' : 'You beat the Doctor! But he practises every day.')
    : (ar ? `الدكتور جاب ${DOCTOR_SCORE}. ناقصك ${DOCTOR_SCORE - score} نقطة. هتسيبه يكسب؟` : `The Doctor scored ${DOCTOR_SCORE}. You are ${DOCTOR_SCORE - score} short. Will you let him win?`);

  return (
    <div className="page page-challenge">
      <div className="eyebrow">{ar ? 'تحدي' : 'CHALLENGE'}</div>
      <h1 className="chal-title">{ar ? 'تحدي الـ 60 ثانية' : '60-second challenge'}</h1>
      <p className="chal-lead">{ar ? `اعرف أكتر عدد عينات في دقيقة. أحسن نتيجة بتتحفظ على جهازك، وتقدر تسجلها في لوحة الشرف باسمك. الدكتور جاب ${DOCTOR_SCORE}.` : `Name as many specimens as you can in one minute. Your best stays on your device, and you can post it to the leaderboard with your name. The Doctor's score: ${DOCTOR_SCORE}.`}</p>

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
          {score > 0 && submitState !== 'done' && (
            <div className="chal-submit">
              <input value={nick} maxLength={16} onChange={(e) => { setNick(e.target.value); if (submitState !== 'sending') setSubmitState('idle'); }} placeholder={ar ? 'اسمك (بيظهر في لوحة الشرف)' : 'Your name (shown on the leaderboard)'} aria-label={ar ? 'اسمك' : 'Your name'} />
              <button className="button" onClick={submit} disabled={nick.trim().length < 2 || submitState === 'sending'}>{ar ? 'سجّل في لوحة الشرف' : 'Post to leaderboard'}</button>
              {submitState === 'taken' && <small>{ar ? 'الاسم ده مأخوذ. جرب اسم تاني.' : 'That nickname is taken. Try another.'}</small>}
              {submitState === 'badnick' && <small>{ar ? 'الاسم لازم 2 لـ 16 حرف أو رقم. تقدر تغيره هنا.' : 'Use 2 to 16 letters or numbers. You can change it here.'}</small>}
              {submitState === 'limited' && <small>{ar ? 'حاولت كتير. جرب بعد شوية.' : 'Too many tries. Try again later.'}</small>}
              {submitState === 'sending' && <small className="chal-ok">{ar ? 'بنسجل نتيجتك...' : 'Posting your score...'}</small>}
              {submitState === 'noticket' && <small>{ar ? 'ماقدرناش نوصل للسيرفر عشان نسجل النتيجة (النتيجة محفوظة على جهازك). تأكد من النت وابدأ جولة جديدة.' : 'Could not reach the server to post this score (it is saved on your device). Check your connection and play another round.'}</small>}
              {submitState === 'failed' && <small>{ar ? 'ماقدرناش نسجل النتيجة. جرب تاني.' : 'Could not post the score. Try again.'}</small>}
            </div>
          )}
          {submitState === 'done' && <p className="chal-taunt">{ar ? `اتسجلت! ترتيبك الأسبوع ده: ${weekRank ?? '-'}` : `Posted! Your rank this week: ${weekRank ?? '-'}`}</p>}
          <button className="button button-primary" onClick={start}>{ar ? 'العب تاني' : 'Play again'}</button>
        </div>
      )}

      {board !== null && (
        <section className="chal-board">
          <div className="chal-board-head">
            <h2 className="chal-sub">{ar ? 'لوحة الشرف' : 'Leaderboard'}</h2>
            <div className="chal-tabs">
              <button className={period === 'week' ? 'is-active' : ''} onClick={() => setPeriod('week')}>{ar ? 'الأسبوع' : 'This week'}</button>
              <button className={period === 'all' ? 'is-active' : ''} onClick={() => setPeriod('all')}>{ar ? 'كل الأوقات' : 'All time'}</button>
            </div>
          </div>
          {board.length === 0 ? <p className="chal-hint">{ar ? 'لسه محدش سجل. كن الأول!' : 'No scores yet. Be the first!'}</p> : (
            <ol className="chal-rows">{board.map((e, i) => <li key={`${e.nick}-${i}`} className={e.score >= DOCTOR_SCORE ? 'is-doctor' : ''}><span>{i + 1}</span><b><Avatar id={e.avatar} size={22} className="lb-avatar" />{e.nick}</b><em>{e.score}</em></li>)}</ol>
          )}
          <p className="chal-hint">{ar ? 'النقط بتتراجع على السيرفر قبل ما تظهر.' : 'Scores are checked on the server before they appear.'}</p>
        </section>
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
