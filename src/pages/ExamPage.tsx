import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { usePreferences } from '../app/PreferencesContext';
import { bloodStains, type BloodStainId } from '../data/bloodStains';
import { diagramCategories, diagrams } from '../data/diagramData';
import { specimens } from '../data/scientificData';
import { specimenMedia } from '../data/specimenMedia';
import { readProgress, recordAnswer, saveProgress, totals, weakPoints, type Progress } from '../data/examProgress';
import { MicroscopeCanvas } from '../microscope/MicroscopeCanvas';
import { DiagramArtwork } from '../schemas/DiagramArtwork';

type Station = 'identify' | 'compare' | 'prepare' | 'notebook' | 'schemas';
type ExamQuestion = { specimenId: string; choices: string[] };
type AnswerGrade = 'correct' | 'wrong' | null;
type PrepStepId = 'record' | 'film' | 'fix' | 'stain' | 'rinse' | 'focus';
const prepStepIds: PrepStepId[] = ['record', 'film', 'fix', 'stain', 'rinse', 'focus'];
const prepStepLabels: Record<PrepStepId, { en: string; ar: string }> = {
  record: { en: 'Label the slide and record the specimen.', ar: 'اكتب بيانات الشريحة وسجّل نوع العينة.' },
  film: { en: 'Prepare a thin blood film and let it air-dry.', ar: 'حضّر لطاخة رقيقة واتركها تجف في الهواء.' },
  fix: { en: 'Follow the selected stain protocol for fixation.', ar: 'اتبع بروتوكول الصبغة المختارة في خطوة التثبيت.' },
  stain: { en: 'Apply the stain according to the teaching-lab protocol.', ar: 'استخدم الصبغة وفق بروتوكول المعمل التعليمي.' },
  rinse: { en: 'Rinse or buffer as directed, then allow the slide to dry.', ar: 'اغسل أو استخدم المحلول المنظّم حسب التعليمات، ثم اترك الشريحة تجف.' },
  focus: { en: 'Start with low power, focus, then move to a higher objective.', ar: 'ابدأ بتكبير منخفض واضبط البؤرة، ثم انتقل لعدسة أقوى.' },
};

const notebookStorageKey = 'scilab-practical-notebook';

function shuffle<T,>(items: T[]): T[] {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

function makeQuestion(previousId?: string): ExamQuestion {
  const pool = specimens.filter((sample) => sample.id !== previousId);
  const answer = pool[Math.floor(Math.random() * pool.length)] ?? specimens[0];
  const distractors = shuffle(specimens.filter((sample) => sample.id !== answer.id)).slice(0, 3);
  return { specimenId: answer.id, choices: shuffle([answer.id, ...distractors.map((sample) => sample.id)]) };
}

function readNotebook(): Record<string, string> {
  try {
    const value: unknown = JSON.parse(window.localStorage.getItem(notebookStorageKey) ?? '{}');
    if (!value || typeof value !== 'object' || Array.isArray(value)) return {};
    return Object.fromEntries(Object.entries(value).filter((entry): entry is [string, string] => typeof entry[1] === 'string'));
  } catch {
    return {};
  }
}

function ExamMicroscope({ imageSrc, locale, pan, onPan }: { imageSrc?: string; locale: 'en' | 'ar'; pan: { x: number; y: number }; onPan: (value: { x: number; y: number }) => void }) {
  return <MicroscopeCanvas imageSrc={imageSrc} magnification={10} coarseFocus={50} fineFocus={50} light={70} pan={pan} onPan={onPan} ariaLabel={locale === 'ar' ? 'مجال مجهري في سؤال امتحان' : 'Microscope field for exam question'} placeholders={{ empty: locale === 'ar' ? 'اختار عينة' : 'Choose a specimen', loading: locale === 'ar' ? 'تحميل الشريحة…' : 'Loading slide…', failed: locale === 'ar' ? 'الصورة غير متاحة' : 'Image unavailable' }} />;
}

function ProgressPanel({ progress, lang, onReset }: { progress: Progress; lang: 'en' | 'ar'; onReset: () => void }) {
  const ar = lang === 'ar';
  const sum = totals(progress);
  if (!sum.attempts) return <div className="exam-progress"><p>{ar ? 'تقدمك هيظهر هنا بعد أول إجابة. بيتحفظ على جهازك بس.' : 'Your progress shows here after your first answer. It is saved on this device only.'}</p></div>;
  const pct = Math.round((sum.right / sum.attempts) * 100);
  const weak = weakPoints(progress);
  return (
    <div className="exam-progress">
      <div className="exam-progress-head"><b>{ar ? 'تقدمك' : 'Your progress'}</b><span>{sum.right}/{sum.attempts} · {pct}%</span><button type="button" className="button button-outline" onClick={onReset}>{ar ? 'امسح التقدم' : 'Reset progress'}</button></div>
      <div className="exam-progress-bar" role="img" aria-label={`${pct}%`}><span style={{ width: `${pct}%` }} /></div>
      {weak.length > 0 && <div className="exam-weak"><small>{ar ? 'نقاط ضعفك (راجعها):' : 'Weak points (review these):'}</small><ul>{weak.map((w) => { const sp = specimens.find((x) => x.id === w.id); return <li key={w.id}><Link to={`/microscope?slide=${w.id}`}>{sp ? sp.title[lang] : w.id}</Link><em>{ar ? `${w.wrong} غلط من ${w.right + w.wrong}` : `${w.wrong} wrong of ${w.right + w.wrong}`}</em></li>; })}</ul></div>}
    </div>
  );
}

export function ExamPage() {
  const { locale, t } = usePreferences();
  const lang = locale;
  const [station, setStation] = useState<Station>('identify');
  const [question, setQuestion] = useState<ExamQuestion | null>(null);
  const [chosenAnswerId, setChosenAnswerId] = useState<string | null>(null);
  const [grade, setGrade] = useState<AnswerGrade>(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [progress, setProgress] = useState<Progress>(readProgress);

  const [compareAId, setCompareAId] = useState('blood-smear');
  const [compareBId, setCompareBId] = useState('sickle-cell-smear');
  const [compareBlind, setCompareBlind] = useState(false);

  const [prepSpecimenId, setPrepSpecimenId] = useState('blood-smear');
  const [prepStainId, setPrepStainId] = useState<BloodStainId>('wright-giemsa');
  const [prepGrade, setPrepGrade] = useState<AnswerGrade>(null);
  const [prepAppliedStainId, setPrepAppliedStainId] = useState<BloodStainId | null>(null);
  const [prepStepOrder, setPrepStepOrder] = useState<PrepStepId[]>(() => shuffle(prepStepIds));
  const [prepStepIndex, setPrepStepIndex] = useState(0);
  const [prepStepMistake, setPrepStepMistake] = useState(false);
  const [prepWorkflowComplete, setPrepWorkflowComplete] = useState(false);

  const [notebookSpecimenId, setNotebookSpecimenId] = useState('blood-smear');
  const [notebook, setNotebook] = useState<Record<string, string>>(readNotebook);
  const compareNoteKey = '__comparison__';
  const questionSpecimen = specimens.find((sample) => sample.id === question?.specimenId);
  const compareA = specimens.find((sample) => sample.id === compareAId) ?? specimens[0];
  const compareB = specimens.find((sample) => sample.id === compareBId) ?? specimens[1];
  const prepSpecimen = specimens.find((sample) => sample.id === prepSpecimenId) ?? specimens[0];
  const activePrepStain = bloodStains.find((stain) => stain.id === prepAppliedStainId);
  const notebookSpecimen = specimens.find((sample) => sample.id === notebookSpecimenId) ?? specimens[0];
  const bloodSpecimens = useMemo(() => specimens.filter((sample) => sample.department === 'hematology'), []);

  useEffect(() => {
    try {
      window.localStorage.setItem(notebookStorageKey, JSON.stringify(notebook));
    } catch {
      // Notes remain usable for the current session if browser storage is blocked.
    }
  }, [notebook]);

  const copy = lang === 'ar' ? {
    eyebrow: 'تدريب وامتحانات عملي الأحياء',
    stations: { identify: 'تعرّف على عينة', compare: 'قارن الشرائح', prepare: 'تجهيز الشريحة', notebook: 'دفتر المعمل', schemas: 'رسومات الاسكيما' },
    identifyTitle: 'امتحان التعرف على العينات',
    identifyDescription: 'افحص الصورة في مجال المجهر واختار اسم العينة من غير ما يظهر الحل قبل إجابتك.',
    startQuestion: 'ابدأ سؤال عشوائي',
    nextQuestion: 'العينة التالية',
    waiting: 'اختار الإجابة المناسبة.',
    correct: 'إجابة صحيحة، تحديد ممتاز.',
    wrong: 'الإجابة الصحيحة:',
    compareTitle: 'مقارنة مجهرية',
    comparePrompt: 'قارن شكل الخلايا وتوزيعها ولون الصبغة. الصور معروضة للملاحظة التعليمية.',
    slideA: 'الشريحة أ', slideB: 'الشريحة ب', chooseSlide: 'اختار شريحة', randomPair: 'عينتان عشوائيتان', hideNames: 'اخفِ الأسماء', showNames: 'أظهر الأسماء',
    comparisonNote: 'ملاحظات المقارنة', comparePlaceholder: 'اكتب أوجه التشابه والاختلاف التي لاحظتها…',
    prepTitle: 'اختبار اختيار الصبغة',
    prepDescription: 'اختار صبغة مناسبة للمهمة، تحقق من اختيارك، ثم طبّق معاينة اللون الرقمية على الشريحة.',
    selectBloodSlide: 'اختار لطاخة دم', selectStain: 'اختار الصبغة المناسبة', checkStain: 'تحقق من الاختيار', applyPreview: 'طبّق معاينة رقمية',
    prepRight: 'اختيار مناسب. تقدر تطبّق معاينة اللون.', prepWrong: 'جرّب صبغة تانية وفكّر في نوع العينة.',
    prepCaveat: 'اللون هنا فلتر رقمي فقط؛ لا يحاكي ارتباط الصبغة كيميائيًا ولا يغيّر الصورة الأصلية.',
    prepWorkflowTitle: 'رتّب خطوات تحضير اللطاخة', prepWorkflowPrompt: 'اختار الخطوة التالية بالترتيب. هذا مخطط تعليمي عام؛ اتبع تعليمات المعمل لكل صبغة.', prepWorkflowWaiting: 'اختار أول خطوة للبدء.', prepWorkflowWrong: 'مش دي الخطوة التالية؛ راجع ترتيب التحضير وحاول تاني.', prepWorkflowDone: 'اكتمل التسلسل. راجع بروتوكول المعمل قبل العمل الحقيقي.', resetWorkflow: 'ابدأ الترتيب من جديد',
    notebookTitle: 'دفتر ملاحظات الطالب', notebookDescription: 'ملاحظاتك تتحفظ تلقائيًا في هذا المتصفح ولكل شريحة سجل مستقل.',
    chooseNoteSlide: 'اختار الشريحة', notePlaceholder: 'اكتب ملاحظاتك: شكل الخلايا، التراكيب الظاهرة، والصبغة…', exportNotes: 'نزّل الدفتر', noteSaved: 'الحفظ تلقائي على هذا الجهاز.',
    schemasTitle: 'امتحان رسومات الاسكيما', schemasDescription: 'اختار لوحة، اخفِ التسميات، وسمّ التراكيب من الرسم التفاعلي.',
    schemaExam: 'ابدأ الامتحان', schemaStudy: 'افتح للمذاكرة', structureNumber: 'تراكيب للاختبار',
    score: 'الإجابات الصحيحة', attempts: 'المحاولات',
  } : {
    eyebrow: 'BIOLOGY PRACTICAL · PRACTICE ROOM',
    stations: { identify: 'Identify a specimen', compare: 'Compare slides', prepare: 'Prepare a slide', notebook: 'Lab notebook', schemas: 'Schema drawings' },
    identifyTitle: 'Specimen identification exam',
    identifyDescription: 'Inspect the microscope field and choose the specimen name. The answer stays hidden until you submit.',
    startQuestion: 'Start a random question',
    nextQuestion: 'Next specimen',
    waiting: 'Choose the best answer.',
    correct: 'Correct. Well identified.',
    wrong: 'Correct answer:',
    compareTitle: 'Microscope comparison',
    comparePrompt: 'Compare cell shape, distribution, and stain color. These photographs are for study.',
    slideA: 'Slide A', slideB: 'Slide B', chooseSlide: 'Choose a slide', randomPair: 'Random pair', hideNames: 'Hide names', showNames: 'Show names',
    comparisonNote: 'Comparison notes', comparePlaceholder: 'Record the similarities and differences you see…',
    prepTitle: 'Stain selection exam',
    prepDescription: 'Choose a stain for the task, check your answer, then apply a digital color preview to the slide.',
    selectBloodSlide: 'Choose a blood film', selectStain: 'Choose the suitable stain', checkStain: 'Check choice', applyPreview: 'Apply digital preview',
    prepRight: 'Good choice. You can apply the color preview.', prepWrong: 'Try another stain and consider the specimen type.',
    prepCaveat: 'This is a digital filter only; it does not reproduce chemical binding or alter the original photo.',
    prepWorkflowTitle: 'Order the blood-film steps', prepWorkflowPrompt: 'Choose the next step in sequence. This is a general teaching outline; follow the local protocol for each stain.', prepWorkflowWaiting: 'Choose the first step to begin.', prepWorkflowWrong: 'That is not the next step. Review the sequence and try again.', prepWorkflowDone: 'Sequence complete. Check the laboratory protocol before practical work.', resetWorkflow: 'Restart the sequence',
    notebookTitle: 'Student lab notebook', notebookDescription: 'Notes save automatically in this browser, with a separate entry for each slide.',
    chooseNoteSlide: 'Choose a slide', notePlaceholder: 'Record cell shapes, visible structures, stain, and observations…', exportNotes: 'Download notebook', noteSaved: 'Saved automatically on this device.',
    schemasTitle: 'Schema drawing exam', schemasDescription: 'Choose a plate, hide its labels, and identify structures on the interactive drawing.',
    schemaExam: 'Start exam', schemaStudy: 'Open for study', structureNumber: 'structures to identify',
    score: 'Correct answers', attempts: 'Attempts',
  };

  const stationList: { id: Station; label: string }[] = [
    { id: 'identify', label: copy.stations.identify },
    { id: 'compare', label: copy.stations.compare },
    { id: 'prepare', label: copy.stations.prepare },
    { id: 'notebook', label: copy.stations.notebook },
    { id: 'schemas', label: copy.stations.schemas },
  ];

  function answerIdentification(specimenId: string) {
    if (!question || grade) return;
    setChosenAnswerId(specimenId);
    setGrade(specimenId === question.specimenId ? 'correct' : 'wrong');
    setAnswered((current) => current + 1);
    if (specimenId === question.specimenId) setScore((current) => current + 1);
    setProgress((current) => { const next = recordAnswer(current, question.specimenId, specimenId === question.specimenId); saveProgress(next); return next; });
  }
  function resetProgress() { setProgress({}); saveProgress({}); }

  function nextQuestion() {
    setQuestion(makeQuestion(question?.specimenId));
    setGrade(null);
    setChosenAnswerId(null);
    setPan({ x: 0, y: 0 });
  }

  function randomizePair() {
    const [first, second] = shuffle(specimens).slice(0, 2);
    setCompareAId(first.id);
    setCompareBId(second.id);
    setCompareBlind(true);
  }

  function changeCompareA(id: string) {
    setCompareAId(id);
    if (id === compareBId) setCompareBId(specimens.find((sample) => sample.id !== id)!.id);
  }
  function changeCompareB(id: string) {
    setCompareBId(id);
    if (id === compareAId) setCompareAId(specimens.find((sample) => sample.id !== id)!.id);
  }

  function expectedStains(specimenId: string): BloodStainId[] {
    if (specimenId === 'malaria-smear') return ['giemsa'];
    if (specimenId === 'reticulocyte-smear') return ['new-methylene-blue', 'brilliant-cresyl-blue'];
    return ['wright-giemsa'];
  }

  function selectPrepSpecimen(id: string) {
    setPrepSpecimenId(id);
    setPrepGrade(null);
    setPrepAppliedStainId(null);
    setPrepStainId('wright-giemsa');
  }

  function checkPrepStain() {
    setPrepGrade(expectedStains(prepSpecimenId).includes(prepStainId) ? 'correct' : 'wrong');
    setPrepAppliedStainId(null);
  }

  function choosePrepStep(id: PrepStepId) {
    if (prepWorkflowComplete) return;
    if (id !== prepStepIds[prepStepIndex]) {
      setPrepStepMistake(true);
      return;
    }
    const next = prepStepIndex + 1;
    setPrepStepIndex(next);
    setPrepStepMistake(false);
    if (next === prepStepIds.length) setPrepWorkflowComplete(true);
  }

  function resetPrepWorkflow() {
    setPrepStepOrder(shuffle(prepStepIds));
    setPrepStepIndex(0);
    setPrepStepMistake(false);
    setPrepWorkflowComplete(false);
  }

  function setNotebookText(key: string, text: string) {
    setNotebook((current) => ({ ...current, [key]: text }));
  }

  function exportNotebook() {
    const entries = Object.entries(notebook).filter(([, note]) => note.trim());
    const content = entries.map(([id, note]) => {
      const sample = specimens.find((item) => item.id === id);
      const title = id === compareNoteKey ? copy.comparisonNote : sample?.title[lang] ?? id;
      return `${title}\n${'-'.repeat(title.length)}\n${note}`;
    }).join('\n\n');
    const blob = new Blob([content || copy.noteSaved], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'biology-lab-notebook.txt';
    anchor.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  return (
    <div className="page exam-page">
      <div className="module-page-head exam-page-head">
        <div>
          <Link to="/" className="back-link">← {t('backToOverview')}</Link>
          <div className="eyebrow"><span className="eyebrow-line" />{copy.eyebrow}</div>
          <h1 className="page-title">{t('examRoomTitle')}</h1>
          <p className="page-intro">{t('examRoomDescription')}</p>
        </div>
        <Link to="/microscope" className="button button-outline">{lang === 'ar' ? 'افتح الميكروسكوب' : 'Open microscope'}</Link>
      </div>

      <nav className="exam-stations" aria-label={lang === 'ar' ? 'محطات الامتحان' : 'Exam stations'}>
        {stationList.map((item, index) => <button type="button" key={item.id} className={`exam-station-tab${station === item.id ? ' is-active' : ''}`} onClick={() => setStation(item.id)} aria-pressed={station === item.id}><small>{String(index + 1).padStart(2, '0')}</small><span>{item.label}</span></button>)}
      </nav>

      {station === 'identify' && <section className="exam-station-content">
        <div className="exam-section-heading"><div><div className="eyebrow">{copy.stations.identify}</div><h2>{copy.identifyTitle}</h2><p>{copy.identifyDescription}</p></div><div className="exam-scoreboard"><span>{copy.score}<b>{score}</b></span><span>{copy.attempts}<b>{answered}</b></span></div></div>
        <ProgressPanel progress={progress} lang={lang} onReset={resetProgress} />
        {!question ? <div className="exam-start-card"><div className="exam-question-mark">?</div><p>{copy.identifyDescription}</p><button type="button" className="button button-primary" onClick={() => setQuestion(makeQuestion())}>{copy.startQuestion}</button></div> : (
          <div className="exam-identify-grid">
            <div className="exam-microscope-panel"><div className="exam-panel-label"><span>{lang === 'ar' ? 'مجال مجهري' : 'MICROSCOPE FIELD'}</span><span>{lang === 'ar' ? 'الاسم مخفي' : 'IDENTITY HIDDEN'}</span></div><div className="exam-canvas"><ExamMicroscope imageSrc={specimenMedia[question.specimenId]?.src} locale={lang} pan={pan} onPan={setPan} /></div><p>{lang === 'ar' ? 'اسحب الصورة للتنقّل داخل المجال.' : 'Drag the image to inspect the field.'}</p></div>
          <div className="exam-answer-panel"><div className="exam-panel-label"><span>{lang === 'ar' ? 'سؤال' : 'QUESTION'}</span><b>{copy.stations.identify}</b></div><h3>{copy.waiting}</h3><div className="exam-answer-list">{question.choices.map((id, index) => {
              const option = specimens.find((sample) => sample.id === id)!;
              const isCorrectAnswer = grade !== null && id === question.specimenId;
              const isWrongSelection = grade === 'wrong' && chosenAnswerId === id;
              return <button type="button" key={id} className={`exam-answer-option${isCorrectAnswer ? ' is-correct' : ''}${isWrongSelection ? ' is-wrong' : ''}`} onClick={() => answerIdentification(id)} disabled={grade !== null}><small>{String.fromCharCode(65 + index)}</small><span>{option.title[lang]}</span>{isCorrectAnswer && <b>✓</b>}{isWrongSelection && <i>×</i>}</button>;
            })}</div><div className={`exam-answer-feedback${grade ? ` is-${grade}` : ''}`} role="status" aria-live="polite">{grade === 'correct' ? copy.correct : grade === 'wrong' ? <>{copy.wrong} <b>{questionSpecimen?.title[lang]}</b></> : copy.waiting}</div>{grade && <button type="button" className="button button-primary" onClick={nextQuestion}>{copy.nextQuestion}</button>}</div>
          </div>
        )}
      </section>}

      {station === 'compare' && <section className="exam-station-content">
        <div className="exam-section-heading"><div><div className="eyebrow">{copy.stations.compare}</div><h2>{copy.compareTitle}</h2><p>{copy.comparePrompt}</p></div><div className="exam-heading-actions"><button type="button" className="button button-outline" onClick={randomizePair}>{copy.randomPair}</button><button type="button" className="button button-outline" onClick={() => setCompareBlind((current) => !current)}>{compareBlind ? copy.showNames : copy.hideNames}</button></div></div>
        <div className="compare-selectors"><label><span>{copy.slideA}</span><select value={compareAId} onChange={(event) => changeCompareA(event.target.value)}>{specimens.map((sample) => <option key={sample.id} value={sample.id}>{sample.title[lang]}</option>)}</select></label><label><span>{copy.slideB}</span><select value={compareBId} onChange={(event) => changeCompareB(event.target.value)}>{specimens.map((sample) => <option key={sample.id} value={sample.id}>{sample.title[lang]}</option>)}</select></label></div>
        <div className="exam-compare-grid">{[{ sample: compareA, label: copy.slideA }, { sample: compareB, label: copy.slideB }].map(({ sample, label }) => <figure className="exam-compare-card" key={sample.id}><div className="exam-compare-label"><span>{label}</span><b>{compareBlind ? (lang === 'ar' ? 'الاسم مخفي' : 'Identity hidden') : sample.title[lang]}</b></div><div className="exam-image-field"><img src={specimenMedia[sample.id]?.src} alt={compareBlind ? label : sample.title[lang]} loading="lazy" /></div><figcaption>{compareBlind ? (lang === 'ar' ? 'ركز على شكل الخلايا وتوزيعها.' : 'Focus on cell shape and distribution.') : sample.subtitle[lang]}</figcaption></figure>)}</div>
        <label className="exam-note-field"><span>{copy.comparisonNote}</span><textarea value={notebook[compareNoteKey] ?? ''} onChange={(event) => setNotebookText(compareNoteKey, event.target.value)} placeholder={copy.comparePlaceholder} /></label>
      </section>}

      {station === 'prepare' && <section className="exam-station-content">
        <div className="exam-section-heading"><div><div className="eyebrow">{copy.stations.prepare}</div><h2>{copy.prepTitle}</h2><p>{copy.prepDescription}</p></div><span className="exam-step-badge">{lang === 'ar' ? 'محاكاة تعليمية' : 'TEACHING SIMULATION'}</span></div>
        <div className="prep-exam-grid"><div className="prep-controls">
          <label className="exam-field-label"><span>01 · {copy.selectBloodSlide}</span><select value={prepSpecimenId} onChange={(event) => selectPrepSpecimen(event.target.value)}>{bloodSpecimens.map((sample) => <option key={sample.id} value={sample.id}>{sample.title[lang]}</option>)}</select></label>
          <div className="exam-field-label"><span>02 · {copy.selectStain}</span><div className="prep-stain-choices">{bloodStains.map((stain) => <button type="button" key={stain.id} className={`prep-stain-choice${prepStainId === stain.id ? ' is-selected' : ''}`} onClick={() => { setPrepStainId(stain.id); setPrepGrade(null); setPrepAppliedStainId(null); }} aria-pressed={prepStainId === stain.id}><i style={{ '--stain-color': stain.color } as React.CSSProperties} /><span>{stain.title[lang]}</span></button>)}</div></div>
          <div className={`prep-feedback${prepGrade ? ` is-${prepGrade}` : ''}`} role="status" aria-live="polite">{prepGrade === 'correct' ? copy.prepRight : prepGrade === 'wrong' ? copy.prepWrong : copy.waiting}</div>
          <div className="prep-action-row"><button type="button" className="button button-primary" onClick={checkPrepStain}>{copy.checkStain}</button><button type="button" className="button button-outline" disabled={prepGrade !== 'correct'} onClick={() => setPrepAppliedStainId(prepStainId)}>{copy.applyPreview}</button></div>
          <p className="stain-preview-disclaimer">{copy.prepCaveat}</p>
          <section className="prep-workflow"><div className="prep-workflow-head"><div><h3>{copy.prepWorkflowTitle}</h3><p>{copy.prepWorkflowPrompt}</p></div><span>{String(prepStepIndex).padStart(2, '0')} / {String(prepStepIds.length).padStart(2, '0')}</span></div><div className="prep-workflow-options">{prepStepOrder.map((id) => <button type="button" key={id} onClick={() => choosePrepStep(id)} disabled={prepWorkflowComplete}>{prepStepLabels[id][lang]}</button>)}</div><div className={`prep-workflow-status${prepWorkflowComplete ? ' is-correct' : prepStepMistake ? ' is-wrong' : ''}`} role="status" aria-live="polite">{prepWorkflowComplete ? copy.prepWorkflowDone : prepStepMistake ? copy.prepWorkflowWrong : copy.prepWorkflowWaiting}</div>{prepWorkflowComplete && <button type="button" className="prep-restart" onClick={resetPrepWorkflow}>{copy.resetWorkflow}</button>}</section>
        </div><figure className="prep-slide-preview"><div className="exam-image-field"><img src={specimenMedia[prepSpecimenId]?.src} alt={prepSpecimen.title[lang]} style={{ filter: activePrepStain?.canvasFilter ?? 'none' }} /></div><figcaption><b>{prepSpecimen.title[lang]}</b><span>{activePrepStain ? `${lang === 'ar' ? 'معاينة' : 'Preview'} · ${activePrepStain.title[lang]}` : (lang === 'ar' ? 'الصورة الأصلية' : 'Original source photograph')}</span></figcaption></figure></div>
      </section>}

      {station === 'notebook' && <section className="exam-station-content">
        <div className="exam-section-heading"><div><div className="eyebrow">{copy.stations.notebook}</div><h2>{copy.notebookTitle}</h2><p>{copy.notebookDescription}</p></div><button type="button" className="button button-outline" onClick={exportNotebook}>{copy.exportNotes}</button></div>
        <div className="notebook-paper"><label className="exam-field-label"><span>{copy.chooseNoteSlide}</span><select value={notebookSpecimenId} onChange={(event) => setNotebookSpecimenId(event.target.value)}>{specimens.map((sample) => <option key={sample.id} value={sample.id}>{sample.title[lang]}</option>)}</select></label><div className="notebook-entry-head"><img src={specimenMedia[notebookSpecimenId]?.src} alt="" /><div><span>{lang === 'ar' ? 'شريحة عملية' : 'PRACTICAL SLIDE'}</span><h3>{notebookSpecimen.title[lang]}</h3><small>{notebookSpecimen.subtitle[lang]}</small></div></div><label className="exam-note-field"><span>{lang === 'ar' ? 'ملاحظات الشريحة' : 'SLIDE OBSERVATIONS'}</span><textarea value={notebook[notebookSpecimenId] ?? ''} onChange={(event) => setNotebookText(notebookSpecimenId, event.target.value)} placeholder={copy.notePlaceholder} /></label><p className="notebook-save-note">✓ {copy.noteSaved}</p></div>
      </section>}

      {station === 'schemas' && <section className="exam-station-content">
        <div className="exam-section-heading"><div><div className="eyebrow">{copy.stations.schemas}</div><h2>{copy.schemasTitle}</h2><p>{copy.schemasDescription}</p></div><span className="exam-step-badge">{String(diagrams.length).padStart(2, '0')} {lang === 'ar' ? 'رسومات' : 'PLATES'}</span></div>
        <div className="exam-schema-grid">{diagrams.map((diagram) => {
          const category = diagramCategories.find((item) => item.id === diagram.category);
          return <article className="exam-schema-card" key={diagram.id}><div className="exam-schema-art"><DiagramArtwork diagram={diagram} compact /></div><div className="exam-schema-copy"><span>{category?.title[lang]}</span><h3>{diagram.title[lang]}</h3><p>{diagram.summary[lang]}</p><small>{diagram.structures.length} {copy.structureNumber}</small><div className="exam-schema-actions"><Link to={`/schemas/${diagram.id}?mode=exam`} className="button button-primary">{copy.schemaExam}</Link><Link to={`/schemas/${diagram.id}`} className="button button-outline">{copy.schemaStudy}</Link></div></div></article>;
        })}</div>
      </section>}
    </div>
  );
}
