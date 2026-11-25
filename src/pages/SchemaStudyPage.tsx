import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { usePreferences } from '../app/PreferencesContext';
import { ReferenceDialog } from '../components/ReferenceDialog';
import { ErrorScreen } from '../components/ErrorScreen';
import { getDiagram } from '../data/diagramData';
import { DiagramArtwork } from '../schemas/DiagramArtwork';

function normalize(value: string) {
  return value.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f\u064b-\u065f\u0670\u06d6-\u06ed]/g, '').replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
}

export function SchemaStudyPage() {
  const { diagramId } = useParams();
  const [searchParams] = useSearchParams();
  const requestedMode = searchParams.get('mode') === 'exam' ? 'exam' : 'study';
  const diagram = getDiagram(diagramId);
  const { locale, t } = usePreferences();
  const lang = locale;
  const [mode, setMode] = useState<'study' | 'exam'>(requestedMode);
  const [selectedId, setSelectedId] = useState(diagram?.structures[0]?.id ?? '');
  const [targetIndex, setTargetIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [grade, setGrade] = useState<'correct' | 'wrong' | null>(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [showReferences, setShowReferences] = useState(false);
  const target = diagram?.structures[targetIndex % Math.max(1, diagram.structures.length)];
  const selected = useMemo(() => diagram?.structures.find((structure) => structure.id === selectedId), [diagram, selectedId]);

  useEffect(() => {
    if (!diagram) return;
    setMode(requestedMode);
    setSelectedId(diagram.structures[0]?.id ?? '');
    setTargetIndex(0); setAnswer(''); setGrade(null); setScore(0); setAnswered(0);
  }, [diagramId, requestedMode]);

  useEffect(() => {
    if (grade !== 'correct' || !diagram) return;
    const timer = window.setTimeout(() => {
      setTargetIndex((index) => (index + 1) % diagram.structures.length);
      setAnswer(''); setGrade(null);
    }, 1050);
    return () => window.clearTimeout(timer);
  }, [grade, diagram]);

  if (!diagram || !target) {
    return <ErrorScreen kind="schemaMissing" />;
  }

  function gradeAnswer(isCorrect: boolean) {
    if (grade === 'correct') return;
    setAnswered((count) => count + 1);
    if (isCorrect) { setGrade('correct'); setScore((count) => count + 1); }
    else setGrade('wrong');
  }
  function handleTargetSelect(id: string) {
    if (mode === 'study') { setSelectedId(id); return; }
    if (!target) return;
    gradeAnswer(id === target.id);
  }
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!target) return;
    const input = normalize(answer);
    const labels = [target.name.en, target.name.ar, ...target.aliases].map(normalize);
    gradeAnswer(labels.includes(input));
  }
  function enterMode(next: 'study' | 'exam') {
    setMode(next); setGrade(null); setAnswer('');
    if (next === 'exam' && diagram) { setTargetIndex((index) => (index + 1) % diagram.structures.length); setAnswered(0); setScore(0); }
  }

  return (
    <div className="page schema-study-page">
      <div className="module-page-head study-page-head">
        <div>
          <Link to="/schemas" className="back-link">← {t('backToOverview')}</Link>
          <div className="eyebrow"><span className="eyebrow-line" />{diagram.category.toUpperCase()} / {diagram.photo ? 'SLIDE SCHEMA' : 'VECTOR PLATE'}{diagram.needsReview && <> · <b className="needs-review-tag">{lang === 'ar' ? 'تحتاج مراجعة' : 'NEEDS REVIEW'}</b></>}</div>
          <h1 className="page-title">{diagram.title[lang]}</h1>
          <p className="page-intro">{diagram.summary[lang]}</p>
        </div>
        <button type="button" className="button button-outline source-trigger" onClick={() => setShowReferences(true)}><span>◈</span>{t('sourcesLabel')}</button>
      </div>

      <div className="study-toolbar">
        <div className="study-mode-switch" role="group" aria-label={lang === 'ar' ? 'نمط العرض' : 'View mode'}>
          <button type="button" className={mode === 'study' ? 'is-selected' : ''} onClick={() => enterMode('study')} aria-pressed={mode === 'study'}><span>◉</span>{t('studyMode')}</button>
          <button type="button" className={mode === 'exam' ? 'is-selected' : ''} onClick={() => enterMode('exam')} aria-pressed={mode === 'exam'}><span>⌖</span>{t('examMode')}</button>
        </div>
        <div className="study-stats"><span>{t('structureCount')} <b>{String(diagram.structures.length).padStart(2, '0')}</b></span>{mode === 'exam' && <span>{t('scoreLabel')} <b>{String(score).padStart(2, '0')} / {String(answered).padStart(2, '0')}</b></span>}<span>{t('plateLabel')} <b>{diagram.id.toUpperCase()}</b></span></div>
      </div>

      <div className="schema-study-grid">
        <section className="diagram-stage-panel">
          <div className="diagram-stage-top"><span><i className="live-indicator" />{mode === 'exam' ? t('examMode') : t('studyMode')}</span><span>{diagram.photo ? `PHOTO: ${diagram.photo.author} · ${diagram.photo.license}` : t('vectorSchemaScale')}</span></div>
          <DiagramArtwork diagram={diagram} activeId={mode === 'study' ? selectedId : undefined} examMode={mode === 'exam'} onSelect={handleTargetSelect} />
          <div className="diagram-stage-bottom"><span>{diagram.photo ? <a href={diagram.photo.sourceUrl} target="_blank" rel="noreferrer">{diagram.photo.title} ↗</a> : 'FACULTY OF SCIENCE · LEARNING ATLAS'}</span><span>{diagram.disclaimer[lang]}</span></div>
        </section>

        <aside className="structure-panel">
          {mode === 'study' ? (
            <>
              <div className="structure-panel-head"><span className="panel-index">{t('structureIndex')}</span><span className="structure-total">{String(diagram.structures.length).padStart(2, '0')}</span></div>
              <div className="structure-list">
                {diagram.structures.map((structure, index) => <button type="button" key={structure.id} className={`structure-row${selectedId === structure.id ? ' is-selected' : ''}`} onPointerEnter={() => setSelectedId(structure.id)} onFocus={() => setSelectedId(structure.id)} onClick={() => setSelectedId(structure.id)} aria-pressed={selectedId === structure.id}><span className="structure-row-number">{String(index + 1).padStart(2, '0')}</span><span>{structure.name[lang]}</span><i>↗</i></button>)}
              </div>
              {selected && <div className="structure-detail">
                <div className="eyebrow"><span className="eyebrow-line" />{lang === 'ar' ? 'وظيفة التركيب' : 'FUNCTION'}</div>
                <h2>{selected.name[lang]}</h2><p className="structure-secondary-name">{selected.name[lang === 'en' ? 'ar' : 'en']}</p>
                <p>{selected.function[lang]}</p><p className="structure-secondary-copy">{selected.function[lang === 'en' ? 'ar' : 'en']}</p>
                <div className="exam-note"><span>{lang === 'ar' ? 'ملاحظة للاختبار' : 'EXAM NOTE'}</span><p>{selected.note[lang]}</p><p className="structure-secondary-copy">{selected.note[lang === 'en' ? 'ar' : 'en']}</p></div>
              </div>}
            </>
          ) : (
            <div className="quiz-panel">
              <div className="quiz-panel-head"><span className="panel-index">{t('identification')} / {String(targetIndex + 1).padStart(2, '0')}</span><span className="quiz-dot" /></div>
              <div className="quiz-prompt-icon">?</div>
              <div className="eyebrow"><span className="eyebrow-line" />{lang === 'ar' ? 'حدّد التركيب' : 'IDENTIFY THE STRUCTURE'}</div>
              <h2>{target.function[lang]}</h2>
              <p className="quiz-hint">{lang === 'ar' ? 'انقر على الجزء الصحيح في الرسم، أو اكتب اسمه.' : 'Click the correct part in the plate, or type its name.'}</p>
              <form className="quiz-answer-form" onSubmit={handleSubmit}>
                <label htmlFor="structure-answer">{lang === 'ar' ? 'اسم التركيب' : 'STRUCTURE NAME'}</label>
                <div className="quiz-input-row"><input id="structure-answer" value={answer} onChange={(event) => setAnswer(event.target.value)} placeholder={t('searchStructure')} autoComplete="off" /><button type="submit" aria-label={t('checkAnswer')}>↗</button></div>
              </form>
              <div className={`quiz-feedback${grade ? ` is-${grade}` : ''}`} role="status" aria-live="polite">
                {grade === 'correct' ? <><b>✓</b>{t('correct')}</> : grade === 'wrong' ? <><b>×</b>{t('tryAgain')}</> : <span>{lang === 'ar' ? 'بانتظار إجابتك…' : 'Waiting for your answer…'}</span>}
              </div>
              <div className="quiz-footer"><span>{t('academicPractice')}</span><span>{lang === 'ar' ? 'الملصقات مخفية' : 'LABELS HIDDEN'}</span></div>
            </div>
          )}
        </aside>
      </div>
      <div className="schema-study-disclaimer"><span>◈</span><p>{diagram.disclaimer[lang]}</p><button type="button" onClick={() => setShowReferences(true)}>{t('sourcesLabel')} ↗</button></div>
      {showReferences && <ReferenceDialog title={diagram.title[lang]} subtitle={diagram.summary[lang]} facts={diagram.structures.map((structure) => ({ en: `${structure.name.en}: ${structure.function.en}`, ar: `${structure.name.ar}: ${structure.function.ar}` }))} references={diagram.references} caveats={[diagram.disclaimer]} onClose={() => setShowReferences(false)} />}
    </div>
  );
}
