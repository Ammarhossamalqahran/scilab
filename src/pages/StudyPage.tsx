import { useCallback, useEffect, useMemo, useState } from 'react';
import { usePreferences } from '../app/PreferencesContext';
import { specimens, type DepartmentId } from '../data/scientificData';
import { specimenMedia } from '../data/specimenMedia';
import { readCards, saveCards, markCard, dueIds, type CardBook } from '../data/flashcards';

const departments: { id: DepartmentId | 'all' | 'weak'; en: string; ar: string }[] = [
  { id: 'all', en: 'All slides', ar: 'كل العينات' },
  { id: 'weak', en: 'My mistakes', ar: 'أخطائي' },
  { id: 'hematology', en: 'Blood cells', ar: 'خلايا الدم' },
  { id: 'histology', en: 'Tissues', ar: 'الأنسجة' },
  { id: 'microbiology', en: 'Microorganisms', ar: 'كائنات دقيقة' },
  { id: 'botany', en: 'Plant slides', ar: 'شرائح نباتية' },
  { id: 'aquatic-life', en: 'Freshwater life', ar: 'كائنات المياه العذبة' },
  { id: 'zoology', en: 'Zoology', ar: 'علم الحيوان' },
  { id: 'genetics', en: 'Cell division & genetics', ar: 'الانقسام الخلوي والوراثة' },
];
const DECK = 20;

function shuffle<T>(items: T[]): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

export function StudyPage() {
  const { locale: lang } = usePreferences();
  const ar = lang === 'ar';
  const [book, setBook] = useState<CardBook>(() => readCards());
  const [scope, setScope] = useState<DepartmentId | 'all' | 'weak'>('all');
  const [deck, setDeck] = useState<string[]>([]);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [round, setRound] = useState({ known: 0, again: 0 });
  const [retry, setRetry] = useState<string[]>([]);

  const pool = useMemo(() => {
    if (scope === 'weak') return dueIds(book);
    return specimens.filter((s) => (scope === 'all' || s.department === scope) && specimenMedia[s.id]).map((s) => s.id);
  }, [scope, book]);

  const start = useCallback(() => {
    setDeck(shuffle(pool).slice(0, DECK)); setIndex(0); setFlipped(false); setRound({ known: 0, again: 0 }); setRetry([]);
  }, [pool]);
  useEffect(() => { start(); }, [scope]); // eslint-disable-line react-hooks/exhaustive-deps

  const currentId = deck[index];
  const current = specimens.find((s) => s.id === currentId);
  const media = currentId ? specimenMedia[currentId] : undefined;
  const finished = deck.length > 0 && index >= deck.length;

  function answer(known: boolean) {
    if (!currentId) return;
    const next = markCard(book, currentId, known);
    setBook(next); saveCards(next);
    setRound((r) => ({ known: r.known + (known ? 1 : 0), again: r.again + (known ? 0 : 1) }));
    if (!known) setRetry((r) => [...r, currentId]);
    setFlipped(false); setIndex((i) => i + 1);
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.target as HTMLElement)?.tagName === 'SELECT') return;
      if (e.key === ' ' || e.key === 'Enter') { if (current) { e.preventDefault(); setFlipped((f) => !f); } }
      else if (flipped && (e.key === 'ArrowRight' || e.key === 'ArrowLeft')) { e.preventDefault(); answer(e.key === 'ArrowRight'); }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const mastered = Object.values(book).filter((c) => c.streak >= 2).length;

  return (
    <div className="page page-study">
      <div className="eyebrow">{ar ? 'وضع المذاكرة' : 'STUDY MODE'}</div>
      <h1 className="study-title">{ar ? 'فلاش كاردز للعينات' : 'Specimen flashcards'}</h1>
      <p className="study-lead">{ar ? 'شوف الصورة، افتكر الاسم، اقلب الكارت. اللي غلطت فيه بيرجعلك.' : 'See the photo, recall the name, flip the card. Cards you miss come back.'}</p>

      <div className="study-scopes" role="tablist">
        {departments.map((d) => (
          <button key={d.id} role="tab" aria-selected={scope === d.id} className={`study-chip${scope === d.id ? ' is-active' : ''}`} onClick={() => setScope(d.id)}>{ar ? d.ar : d.en}</button>
        ))}
      </div>
      <div className="study-stats">
        <span>{ar ? `اتقنت ${mastered} كارت` : `${mastered} cards mastered`}</span>
        {deck.length > 0 && !finished && <span>{index + 1} / {deck.length}</span>}
      </div>

      {deck.length === 0 && (
        <div className="study-empty">{scope === 'weak' ? (ar ? 'مفيش أخطاء لسه. ذاكر شوية الأول.' : 'No mistakes yet. Study a few cards first.') : (ar ? 'مفيش كروت هنا.' : 'No cards here.')}</div>
      )}

      {current && media && !finished && (
        <>
          <button className={`study-card${flipped ? ' is-flipped' : ''}`} onClick={() => setFlipped((f) => !f)} aria-label={ar ? 'اقلب الكارت' : 'Flip card'}>
            <div className="study-card-image"><img src={media.src} alt={flipped ? current.title[lang] : ''} /></div>
            {!flipped ? (
              <div className="study-card-prompt">{ar ? 'إيه ده؟ دوس للقلب' : 'What is this? Tap to flip'}</div>
            ) : (
              <div className="study-card-answer">
                <h2>{current.title[lang]}</h2>
                <div className="study-card-alt">{current.title[ar ? 'en' : 'ar']}</div>
                <p>{current.subtitle[lang]}</p>
                {current.facts[0] && <p className="study-card-fact">{current.facts[0][lang]}</p>}
              </div>
            )}
          </button>
          {flipped && (
            <div className="study-actions">
              <button className="button study-again" onClick={() => answer(false)}>{ar ? 'مش فاكره، ورّيني تاني' : 'Again'}</button>
              <button className="button button-primary" onClick={() => answer(true)}>{ar ? 'كنت فاكره ✓' : 'Got it ✓'}</button>
            </div>
          )}
          <p className="study-hint">{ar ? 'اختصارات: مسافة للقلب، ثم الأسهم' : 'Keys: space to flip, then arrow keys (right = got it)'}</p>
        </>
      )}

      {finished && (
        <div className="study-done">
          <h2>{ar ? 'خلصت الدور' : 'Round complete'}</h2>
          <p>{ar ? `فاكر ${round.known} وغلطت في ${round.again}` : `${round.known} known, ${round.again} to review`}</p>
          <div className="study-actions">
            {retry.length > 0 && <button className="button" onClick={() => { setDeck(shuffle(retry)); setIndex(0); setRetry([]); setRound({ known: 0, again: 0 }); setFlipped(false); }}>{ar ? 'راجع الغلطات بس' : 'Review the misses'}</button>}
            <button className="button button-primary" onClick={start}>{ar ? 'دور جديد' : 'New round'}</button>
          </div>
        </div>
      )}
    </div>
  );
}
