import { useEffect, useMemo, useRef, useState } from 'react';
import { useTestGuard } from '../lib/useTestGuard';
import { TestGuardNotice } from '../components/TestGuardNotice';
import { Link } from 'react-router-dom';
import { usePreferences } from '../app/PreferencesContext';
import { specimens, type DepartmentId } from '../data/scientificData';
import { specimenMedia } from '../data/specimenMedia';
import { recordResult } from '../data/flashcards';
import { readProgress, recordAnswer, saveProgress } from '../data/examProgress';

// Spot test, like the real practical: one slide at a time, a timer per slide, then a score and the mistakes.
const pool = specimens.filter((s) => specimenMedia[s.id]);
const subjects: { id: DepartmentId | 'all'; en: string; ar: string }[] = [
  { id: 'all', en: 'All subjects', ar: 'كل المواد' },
  { id: 'histology', en: 'Tissues', ar: 'الأنسجة' },
  { id: 'hematology', en: 'Blood cells', ar: 'خلايا الدم' },
  { id: 'microbiology', en: 'Microorganisms', ar: 'كائنات دقيقة' },
  { id: 'parasitology', en: 'Parasitology', ar: 'طفيليات' },
  { id: 'botany', en: 'Plant slides', ar: 'شرائح نباتية' },
  { id: 'zoology', en: 'Zoology', ar: 'علم الحيوان' },
  { id: 'aquatic-life', en: 'Freshwater life', ar: 'كائنات المياه العذبة' },
  { id: 'genetics', en: 'Cell division & genetics', ar: 'الانقسام الخلوي والوراثة' },
];
const SECONDS = [30, 45, 60];
const COUNTS = [10, 20];

type Q = { id: string; options: string[] };
type Miss = { id: string; chosen: string | null };

function shuffle<T>(items: T[]): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

function build(subject: DepartmentId | 'all', count: number, lang: 'en' | 'ar'): Q[] {
  const name = (s: { title: { en: string; ar: string } }) => s.title[lang];
  const source = subject === 'all' ? pool : pool.filter((s) => s.department === subject);
  // One slide per distinct name, so two photos of the same organism never appear as different answers.
  const seen = new Set<string>();
  const targets = shuffle(source).filter((s) => { const n = name(s); if (seen.has(n)) return false; seen.add(n); return true; }).slice(0, count);
  return targets.map((t) => {
    const same = pool.filter((s) => s.department === t.department && name(s) !== name(t));
    const choices = shuffle(same.length >= 3 ? same : pool.filter((s) => name(s) !== name(t)));
    const names = new Set<string>([name(t)]);
    for (const c of choices) { if (names.size >= 4) break; names.add(name(c)); }
    return { id: t.id, options: shuffle([...names]) };
  });
}

export function SpotPage() {
  const { locale: lang } = usePreferences();
  const ar = lang === 'ar';
  const [phase, setPhase] = useState<'setup' | 'play' | 'done'>('setup');
  const guard = useTestGuard(phase === 'play');
  const [subject, setSubject] = useState<DepartmentId | 'all'>('histology');
  const [seconds, setSeconds] = useState(45);
  const [count, setCount] = useState(10);
  const [qs, setQs] = useState<Q[]>([]);
  const [index, setIndex] = useState(0);
  const [left, setLeft] = useState(45);
  const [feedback, setFeedback] = useState<{ chosen: string | null; right: string } | null>(null);
  const [score, setScore] = useState(0);
  const [misses, setMisses] = useState<Miss[]>([]);
  const scoreRef = useRef(0);
  const missRef = useRef<Miss[]>([]);
  const lockRef = useRef(false);

  const available = useMemo(() => {
    const src = subject === 'all' ? pool : pool.filter((s) => s.department === subject);
    return new Set(src.map((s) => s.title[lang])).size;
  }, [subject, lang]);
  const effectiveCount = Math.min(count, available);

  function start() {
    const list = build(subject, effectiveCount, lang);
    scoreRef.current = 0; missRef.current = []; lockRef.current = false;
    guard.reset();
    setQs(list); setIndex(0); setScore(0); setMisses([]); setFeedback(null); setLeft(seconds); setPhase('play');
  }

  function settle(chosen: string | null) {
    if (lockRef.current) return;
    lockRef.current = true;
    const q = qs[index];
    const right = specimens.find((s) => s.id === q.id)!.title[lang];
    const ok = chosen === right;
    if (ok) scoreRef.current += 1; else missRef.current = [...missRef.current, { id: q.id, chosen }];
    saveProgress(recordAnswer(readProgress(), q.id, ok));
    recordResult(q.id, ok);
    setScore(scoreRef.current);
    setFeedback({ chosen, right });
    window.setTimeout(() => {
      lockRef.current = false;
      setFeedback(null);
      if (index + 1 >= qs.length) { setMisses(missRef.current); setPhase('done'); } else { setIndex(index + 1); setLeft(seconds); }
    }, ok ? 500 : 1200);
  }

  useEffect(() => {
    if (phase !== 'play' || feedback) return;
    const end = Date.now() + left * 1000;
    const timer = window.setInterval(() => {
      const remaining = Math.max(0, Math.ceil((end - Date.now()) / 1000));
      setLeft(remaining);
      if (remaining <= 0) { window.clearInterval(timer); settle(null); }
    }, 250);
    return () => window.clearInterval(timer);
    // The timer restarts for each slide; `left` is read only when it (re)starts.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, index, feedback]);

  const q = qs[index];
  const nameOf = (id: string) => specimens.find((s) => s.id === id)!.title[lang];

  return (
    <div className="page page-challenge">
      <div className="eyebrow">{ar ? 'سبوت تيست' : 'SPOT TEST'}</div>
      <h1 className="chal-title">{ar ? 'سبوت تيست زي العملي' : 'Practical spot test'}</h1>
      <p className="chal-lead">{ar ? 'شريحة واحدة في المرة، ووقت محدد لكل شريحة. في الآخر بتشوف نتيجتك وغلطاتك.' : 'One slide at a time, with a timer on each. At the end you see your score and your mistakes.'}</p>

      {phase === 'setup' && (
        <div className="chal-panel spot-setup">
          <h2 className="spot-label">{ar ? 'المادة' : 'Subject'}</h2>
          <div className="spot-chips">{subjects.map((s) => <button key={s.id} className={subject === s.id ? 'is-active' : ''} onClick={() => setSubject(s.id)}>{s[lang]}</button>)}</div>
          <h2 className="spot-label">{ar ? 'الوقت لكل شريحة' : 'Time per slide'}</h2>
          <div className="spot-chips">{SECONDS.map((n) => <button key={n} className={seconds === n ? 'is-active' : ''} onClick={() => setSeconds(n)}>{n}{ar ? ' ث' : 's'}</button>)}</div>
          <h2 className="spot-label">{ar ? 'عدد الشرائح' : 'Number of slides'}</h2>
          <div className="spot-chips">{COUNTS.map((n) => <button key={n} className={count === n ? 'is-active' : ''} onClick={() => setCount(n)}>{n}</button>)}</div>
          <p className="chal-hint">{ar ? `هتتسأل في ${effectiveCount} شريحة.` : `You will get ${effectiveCount} slides.`}</p>
          <button className="button button-primary" onClick={start} disabled={effectiveCount < 1}>{ar ? 'ابدأ' : 'Start'}</button>
        </div>
      )}

      {phase === 'play' && q && (
        <>
          <TestGuardNotice away={guard.away} leaves={guard.leaves} keys={guard.keys} />
          <div className="chal-bar"><span>{left}{ar ? ' ث' : 's'}</span><span>{index + 1} / {qs.length}</span><span>{ar ? 'صح' : 'Right'} {score}</span></div>
          <div className="chal-time"><i style={{ width: `${(left / seconds) * 100}%` }} /></div>
          <div className="chal-photo"><img src={specimenMedia[q.id].src} alt="" /></div>
          <div className="chal-options">
            {q.options.map((o) => {
              const state = feedback ? (o === feedback.right ? ' is-right' : o === feedback.chosen ? ' is-wrong' : '') : '';
              return <button key={o} className={`chal-option${state}`} onClick={() => settle(o)} disabled={!!feedback}>{o}</button>;
            })}
          </div>
          {feedback && feedback.chosen === null && <p className="chal-hint">{ar ? 'الوقت خلص.' : 'Time is up.'}</p>}
        </>
      )}

      {phase === 'done' && (
        <>
          <div className="chal-panel">
            <h2>{ar ? `نتيجتك: ${score} من ${qs.length}` : `Your score: ${score} of ${qs.length}`}</h2>
            <p className="chal-hint">{guard.leaves === 0 && guard.keys === 0 ? (ar ? 'ماخرجتش من الصفحة أثناء الاختبار.' : 'You did not leave the page during the test.') : (ar ? `خرجت من الصفحة ${guard.leaves} مرة أثناء الاختبار${guard.keys ? ` وضغطت زرار طباعة الشاشة ${guard.keys} مرة` : ''}.` : `You left the page ${guard.leaves} time${guard.leaves === 1 ? '' : 's'} during the test${guard.keys ? ` and pressed PrintScreen ${guard.keys} time${guard.keys === 1 ? '' : 's'}` : ''}.`)}</p>
            <p className="chal-taunt">{score === qs.length ? (ar ? 'ممتاز، من غير غلطة.' : 'Perfect, no mistakes.') : (ar ? `${qs.length - score} غلطة. راجعها تحت.` : `${qs.length - score} mistakes. Review them below.`)}</p>
            <button className="button button-primary" onClick={start}>{ar ? 'اختبار جديد' : 'New test'}</button>{' '}
            <button className="button" onClick={() => setPhase('setup')}>{ar ? 'غيّر الإعدادات' : 'Change settings'}</button>{' '}
            {misses.length > 0 && <Link className="button" to="/study?scope=weak">{ar ? 'راجعها دلوقتي' : 'Review them now'}</Link>}
          </div>
          {misses.length > 0 && (
            <section className="spot-misses">
              <h2 className="chal-sub">{ar ? 'غلطاتك' : 'Your mistakes'}</h2>
              <ul>
                {misses.map((m) => (
                  <li key={m.id}>
                    <img src={specimenMedia[m.id].src.replace('/specimens/', '/specimens/thumbs/')} alt="" width="64" height="55" />
                    <div>
                      <b>{nameOf(m.id)}</b>
                      <small>{m.chosen ? (ar ? `إجابتك: ${m.chosen}` : `You answered: ${m.chosen}`) : (ar ? 'ما جاوبتش (الوقت خلص)' : 'No answer (time ran out)')}</small>
                      <Link to={`/microscope?slide=${m.id}`}>{ar ? 'افتحها في الميكروسكوب' : 'Open in the microscope'}</Link>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </>
      )}
    </div>
  );
}
