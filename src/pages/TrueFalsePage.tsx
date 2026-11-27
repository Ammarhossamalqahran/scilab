import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { usePreferences } from '../app/PreferencesContext';
import { specimens } from '../data/scientificData';
import { pickFresh } from '../lib/recentSeen';
import { specimenMedia } from '../data/specimenMedia';
import { recordResult } from '../data/flashcards';
import { LeaderboardBoard } from '../components/LeaderboardBoard';
import { startTicket, submitScore, savedNick, saveNick } from '../lib/leaderboardApi';

// True/false sprint: a slide and a name, is the name right? 45 seconds. Its own leaderboard: the server issues a
// ticket for this mode and checks the score against this mode's rules (see worker/leaderboard.ts).
const pool = specimens.filter((s) => specimenMedia[s.id]);
const SECONDS = 45;
const KEY = 'scilab-tf-stats';
type Stats = { games: number; best: number };
const readStats = (): Stats => { try { const v = JSON.parse(window.localStorage.getItem(KEY) ?? 'null') as Partial<Stats> | null; return { games: Number(v?.games) || 0, best: Number(v?.best) || 0 }; } catch { return { games: 0, best: 0 }; } };
type Q = { id: string; shown: string; truth: boolean };

function makeQ(lang: 'en' | 'ar', last?: string): Q {
  const target = pickFresh(pool, 'challenge-tf', last);
  const name = (s: { title: { en: string; ar: string } }) => s.title[lang];
  const truth = Math.random() < 0.5;
  if (truth) return { id: target.id, shown: name(target), truth };
  const same = pool.filter((s) => s.department === target.department && name(s) !== name(target));
  const any = pool.filter((s) => name(s) !== name(target));
  const src = same.length >= 1 ? same : any;
  return { id: target.id, shown: name(src[Math.floor(Math.random() * src.length)]), truth };
}

export function TrueFalsePage() {
  const { locale: lang } = usePreferences();
  const ar = lang === 'ar';
  const [stats, setStats] = useState<Stats>(readStats);
  const [phase, setPhase] = useState<'idle' | 'play' | 'over'>('idle');
  const [left, setLeft] = useState(SECONDS);
  const [q, setQ] = useState<Q | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [fb, setFb] = useState<{ ok: boolean; right: string } | null>(null);
  const ref = useRef({ score: 0, streak: 0, correct: 0, streakBest: 0 });
  const ticketRef = useRef<string | null>(null);
  const [nick, setNick] = useState(savedNick);
  const [sub, setSub] = useState<'idle' | 'sending' | 'done' | 'taken' | 'badnick' | 'limited' | 'failed' | 'noticket'>('idle');
  const [rank, setRank] = useState<number | null>(null);

  function start() { ref.current = { score: 0, streak: 0, correct: 0, streakBest: 0 }; setScore(0); setStreak(0); setCorrect(0); setFb(null); setLeft(SECONDS); setQ(makeQ(lang)); setSub('idle'); ticketRef.current = null; void startTicket('tf').then((t) => { ticketRef.current = t; }); setPhase('play'); }

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
    if (phase !== 'play') return;
    const end = Date.now() + SECONDS * 1000;
    const timer = window.setInterval(() => {
      const remaining = Math.max(0, Math.ceil((end - Date.now()) / 1000));
      setLeft(remaining);
      if (remaining <= 0) {
        window.clearInterval(timer);
        const next = { games: stats.games + 1, best: Math.max(stats.best, ref.current.score) };
        try { window.localStorage.setItem(KEY, JSON.stringify(next)); } catch { /* ignored */ }
        setStats(next); setPhase('over');
      }
    }, 200);
    return () => window.clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  function answer(says: boolean) {
    if (!q || fb) return;
    const ok = says === q.truth;
    const right = specimens.find((s) => s.id === q.id)!.title[lang];
    recordResult(q.id, ok);
    const r = ref.current;
    if (ok) { r.streak += 1; r.streakBest = Math.max(r.streakBest, r.streak); r.correct += 1; r.score += 5 + Math.min(r.streak - 1, 5); } else { r.streak = 0; r.score = Math.max(0, r.score - 3); }
    setScore(r.score); setStreak(r.streak); setCorrect(r.correct);
    setFb({ ok, right });
    window.setTimeout(() => { setFb(null); setQ((cur) => makeQ(lang, cur?.id)); }, ok ? 300 : 1000);
  }

  return (
    <div className="page page-challenge">
      <div className="eyebrow">{ar ? 'تحدي' : 'CHALLENGE'}</div>
      <h1 className="chal-title">{ar ? 'صح ولا غلط' : 'True or false sprint'}</h1>
      <p className="chal-lead">{ar ? `شريحة واسم: الاسم صح ولا غلط؟ ${SECONDS} ثانية. الغلط بينقص 3 نقط. ولوحة شرف خاصة بالتحدي ده.` : `A slide and a name: is the name right? ${SECONDS} seconds. A wrong answer costs 3 points. It has its own leaderboard.`}</p>
      {phase === 'idle' && (
        <div className="chal-panel">
          <p>{ar ? `أحسن نتيجة ليك: ${stats.best} · ألعاب: ${stats.games}` : `Your best: ${stats.best} · games played: ${stats.games}`}</p>
          <button className="button button-primary" onClick={start}>{ar ? 'ابدأ' : 'Start'}</button>
          <p><Link to="/challenge">{ar ? 'تحدي الـ 60 ثانية (لوحة الشرف)' : '60-second challenge (leaderboard)'}</Link> · <Link to="/challenge/department">{ar ? 'تبع أنهي قسم؟' : 'Which department?'}</Link></p>
        </div>
      )}
      {phase === 'play' && q && (
        <>
          <div className="chal-bar"><span>{left}s</span><span>{ar ? 'النقط' : 'Score'} {score}</span><span>{ar ? 'سلسلة' : 'Streak'} {streak}</span></div>
          <div className="chal-time"><i style={{ width: `${(left / SECONDS) * 100}%` }} /></div>
          <div className="chal-photo"><img src={specimenMedia[q.id].src} alt="" /></div>
          <p className="chal-lead" style={{ textAlign: 'center', fontWeight: 700 }}>{q.shown}</p>
          <div className="chal-options">
            {[true, false].map((v) => {
              const state = fb ? (v === q.truth ? ' is-right' : !fb.ok ? ' is-wrong' : '') : '';
              return <button key={String(v)} className={`chal-option${state}`} onClick={() => answer(v)} disabled={!!fb}>{v ? (ar ? 'صح' : 'True') : (ar ? 'غلط' : 'False')}</button>;
            })}
          </div>
          {fb && !fb.ok && <p className="chal-taunt" style={{ textAlign: 'center' }}>{ar ? `الصح: ${fb.right}` : `Correct name: ${fb.right}`}</p>}
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
          <p><Link to="/challenge">{ar ? 'تحدي الـ 60 ثانية' : '60-second challenge'}</Link></p>
        </div>
      )}
      <LeaderboardBoard mode="tf" refreshKey={sub} />
    </div>
  );
}
