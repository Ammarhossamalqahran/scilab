import { useCallback, useEffect, useMemo, useState } from 'react';
import { SpeakButton } from '../components/SpeakButton';
import { ShareButton } from '../components/ShareButton';
import { Link, useSearchParams } from 'react-router-dom';
import { usePreferences } from '../app/PreferencesContext';
import { ReferenceDialog } from '../components/ReferenceDialog';
import { bloodStains, type BloodStainId } from '../data/bloodStains';
import { MicroscopeCanvas } from '../microscope/MicroscopeCanvas';
import { specimens, type DepartmentId } from '../data/scientificData';
import { specimenMedia } from '../data/specimenMedia';
import { clinicalNotes } from '../data/clinicalNotes';
import { plantNotes } from '../data/plantNotes';
import { animalNotes } from '../data/animalNotes';
import { inSubcategory, subcategoryOptions } from '../data/subcategories';

const departments: { id: DepartmentId; label: { en: string; ar: string } }[] = [
  { id: 'hematology', label: { en: 'Blood cells', ar: 'خلايا الدم' } },
  { id: 'histology', label: { en: 'Tissues', ar: 'الأنسجة' } },
  { id: 'microbiology', label: { en: 'Microorganisms', ar: 'كائنات دقيقة' } },
  { id: 'parasitology', label: { en: 'Parasitology', ar: 'طفيليات' } },
  { id: 'botany', label: { en: 'Plant slides', ar: 'شرائح نباتية' } },
  { id: 'aquatic-life', label: { en: 'Freshwater life', ar: 'كائنات المياه العذبة' } },
  { id: 'zoology', label: { en: 'Zoology', ar: 'علم الحيوان' } },
  { id: 'genetics', label: { en: 'Cell division & genetics', ar: 'الانقسام الخلوي والوراثة' } },
];
const departmentCounts = departments.reduce<Record<string, number>>((acc, item) => { acc[item.id] = specimens.filter((sample) => sample.department === item.id).length; return acc; }, {});
const objectives: { value: 4 | 10 | 40 | 100; en: string; ar: string }[] = [
  { value: 4, en: 'Scanning', ar: 'مسح' },
  { value: 10, en: 'Low power', ar: 'قوة منخفضة' },
  { value: 40, en: 'High power', ar: 'قوة عالية' },
  { value: 100, en: 'Oil immersion', ar: 'غمر بالزيت' },
];
const favoriteStorageKey = 'scilab-microscope-favorites';

function readFavorites(): string[] {
  try {
    const saved: unknown = JSON.parse(window.localStorage.getItem(favoriteStorageKey) ?? '[]');
    return Array.isArray(saved) ? saved.filter((id): id is string => typeof id === 'string') : [];
  } catch {
    return [];
  }
}

function Slider({ label, value, min = 0, max = 100, onChange }: { label: string; value: number; min?: number; max?: number; onChange: (value: number) => void }) {
  return (
    <label className="range-control">
      <span className="range-label"><span>{label}</span><b>{value}%</b></span>
      <input type="range" min={min} max={max} value={value} onChange={(event) => onChange(Number(event.target.value))} aria-label={label} style={{ '--range-progress': `${((value - min) / (max - min)) * 100}%` } as React.CSSProperties} />
    </label>
  );
}

function ReferenceIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h11l3 3v13H5zM15 4v4h4M8 12h8M8 16h5" /></svg>;
}
function ResetIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7v5h5M5 12a7 7 0 1 0 2-5" /><path d="M12 8v4l3 2" /></svg>;
}

const searchStopWords = new Set(['and','the','of','in','a','an','with','section','sections','slide','slides','و','في','من']);
function normalizeSearch(value: string) {
  return value.normalize('NFD').replace(/[\u0300-\u036f\u064b-\u065f\u0670\u0640]/g, '').replace(/[أإآٱ]/g, 'ا').toLowerCase().trim();
}

// Small 160x138 list thumbnails live in /specimens/thumbs; the microscope view still uses the full image.
function thumbSrc(src?: string) {
  return src ? src.replace('/specimens/', '/specimens/thumbs/') : src;
}

export function MicroscopePage() {
  const { locale, t } = usePreferences();
  const lang = locale;
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedSpecimen = specimens.find((sample) => sample.id === searchParams.get('slide'));
  const [department, setDepartment] = useState<DepartmentId>(requestedSpecimen?.department ?? 'hematology');
  const availableSpecimens = useMemo(() => specimens.filter((sample) => sample.department === department).sort((a, b) => a.title[lang].localeCompare(b.title[lang], lang)), [department, lang]);
  const [selectedByDepartment, setSelectedByDepartment] = useState<Record<DepartmentId, string>>({
    hematology: requestedSpecimen?.department === 'hematology' ? requestedSpecimen.id : 'blood-smear',
    histology: requestedSpecimen?.department === 'histology' ? requestedSpecimen.id : 'compact-bone',
    microbiology: requestedSpecimen?.department === 'microbiology' ? requestedSpecimen.id : 'budding-yeast',
    botany: requestedSpecimen?.department === 'botany' ? requestedSpecimen.id : 'dicot-leaf',
    'aquatic-life': requestedSpecimen?.department === 'aquatic-life' ? requestedSpecimen.id : 'daphnia',
    parasitology: requestedSpecimen?.department === 'parasitology' ? requestedSpecimen.id : 'plasmodium-257-33',
    zoology: requestedSpecimen?.department === 'zoology' ? requestedSpecimen.id : 'earthworm-section',
    genetics: requestedSpecimen?.department === 'genetics' ? requestedSpecimen.id : '',
  });
  const selectedSpecimenId = selectedByDepartment[department];
  const specimen = availableSpecimens.find((sample) => sample.id === selectedSpecimenId) ?? availableSpecimens[0];
  const activeMedia = specimenMedia[specimen.id];
  const [magnification, setMagnification] = useState<4 | 10 | 40 | 100>(4);
  const [coarseFocus, setCoarseFocus] = useState(50);
  const [fineFocus, setFineFocus] = useState(50);
  const [light, setLight] = useState(62);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [showReferences, setShowReferences] = useState(false);
  const [showKeys, setShowKeys] = useState(false);
  const [sampleQuery, setSampleQuery] = useState('');
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [subcategory, setSubcategory] = useState('all');
  useEffect(() => setSubcategory('all'), [department]);
  const subcategoryChoices = useMemo(() => subcategoryOptions(department, availableSpecimens), [department, availableSpecimens]);
  const [favoriteIds, setFavoriteIds] = useState<string[]>(readFavorites);
  const [challengeSpecimenId, setChallengeSpecimenId] = useState<string | null>(null);
  const [challengeRevealed, setChallengeRevealed] = useState(false);
  const [selectedStainId, setSelectedStainId] = useState<BloodStainId>('wright-giemsa');
  const [appliedStainId, setAppliedStainId] = useState<BloodStainId | null>(null);
  const activeStain = bloodStains.find((stain) => stain.id === appliedStainId);
  const activeObjective = objectives.find((objective) => objective.value === magnification)!;
  const challengeHidden = challengeSpecimenId !== null && !challengeRevealed;
  const resetView = useCallback(() => setPan({ x: 0, y: 0 }), []);


  // Keyboard shortcuts (ignored while typing in a field or when a dialog is open).
  useEffect(() => {
    const clamp = (value: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, value));
    const onKey = (event: KeyboardEvent) => {
      if (event.ctrlKey || event.metaKey || event.altKey) return;
      const target = event.target as HTMLElement | null;
      if (target && (target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName))) return;
      if (showReferences) return;
      const order: (4 | 10 | 40 | 100)[] = [4, 10, 40, 100];
      const key = event.key;
      if (key === '+' || key === '=') setMagnification((m) => order[Math.min(order.length - 1, order.indexOf(m) + 1)]);
      else if (key === '-' || key === '_') setMagnification((m) => order[Math.max(0, order.indexOf(m) - 1)]);
      else if (key === ']') setCoarseFocus((v) => clamp(v + 5, 0, 100));
      else if (key === '[') setCoarseFocus((v) => clamp(v - 5, 0, 100));
      else if (key === '.') setFineFocus((v) => clamp(v + 2, 0, 100));
      else if (key === ',') setFineFocus((v) => clamp(v - 2, 0, 100));
      else if (key === 'l' || key === 'L') setLight((v) => clamp(v + 5, 20, 100));
      else if (key === 'k' || key === 'K') setLight((v) => clamp(v - 5, 20, 100));
      else if (key === '0') { setMagnification(4); setPan({ x: 0, y: 0 }); }
      else if (key === '?') setShowKeys((v) => !v);
      else if (key === 'Escape') setShowKeys(false);
      else return;
      event.preventDefault();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [showReferences]);

  const searchWords = useMemo(() => normalizeSearch(sampleQuery).split(/[\s,;]+/).filter((word) => word && !searchStopWords.has(word)), [sampleQuery]);
  const searching = searchWords.length > 0;
  const allSpecimensSorted = useMemo(() => [...specimens].sort((a, b) => a.title[lang].localeCompare(b.title[lang], lang)), [lang]);
  const filteredSpecimens = useMemo(() => {
    // A typed search looks through every department, in both languages, and every word must match somewhere in the slide text, in any order.
    const pool = searching ? allSpecimensSorted : availableSpecimens;
    if (!searching) return pool.filter((sample) => (!favoritesOnly || favoriteIds.includes(sample.id)) && inSubcategory(department, sample, subcategory));
    // Score each slide by how many of the typed words it contains. Slides with every word come first; if none has every word, show the slides with the most matching words.
    const scored = pool.filter((sample) => !favoritesOnly || favoriteIds.includes(sample.id)).map((sample) => {
      const dept = departments.find((item) => item.id === sample.department);
      const haystack = normalizeSearch([sample.id.replace(/-/g, ' '), sample.title.ar, sample.title.en, sample.subtitle.ar, sample.subtitle.en, sample.description.ar, sample.description.en, specimenMedia[sample.id]?.title ?? '', dept?.label.en ?? '', dept?.label.ar ?? ''].join(' '));
      return { sample, score: searchWords.filter((word) => haystack.includes(word)).length };
    });
    const best = Math.max(0, ...scored.map((row) => row.score));
    return scored.filter((row) => best > 0 && row.score === best).map((row) => row.sample);
  }, [allSpecimensSorted, availableSpecimens, department, favoriteIds, favoritesOnly, searching, searchWords, subcategory]);

  useEffect(() => {
    try {
      window.localStorage.setItem(favoriteStorageKey, JSON.stringify(favoriteIds));
    } catch {
      // Keep favorites available for the current session when browser storage is blocked.
    }
  }, [favoriteIds]);

  function changeDepartment(id: DepartmentId) {
    setDepartment(id);
    setSampleQuery('');
    setAppliedStainId(null);
    setChallengeSpecimenId(null);
    setChallengeRevealed(false);
    setSearchParams({ slide: selectedByDepartment[id] }, { replace: true });
    resetView();
  }
  function changeSpecimen(id: string) {
    const target = specimens.find((sample) => sample.id === id);
    const targetDepartment = target?.department ?? department;
    if (targetDepartment !== department) setDepartment(targetDepartment);
    setSelectedByDepartment((current) => ({ ...current, [targetDepartment]: id }));
    setAppliedStainId(null);
    setSearchParams({ slide: id }, { replace: true });
    setChallengeSpecimenId(null);
    setChallengeRevealed(false);
    resetView();
  }
  function toggleFavorite(id: string) {
    setFavoriteIds((current) => current.includes(id) ? current.filter((favorite) => favorite !== id) : [...current, id]);
  }
  function startChallenge() {
    const choices = specimens.filter((sample) => sample.id !== specimen.id);
    const target = choices[Math.floor(Math.random() * choices.length)] ?? specimens[0];
    setDepartment(target.department);
    setSelectedByDepartment((current) => ({ ...current, [target.department]: target.id }));
    setSearchParams({}, { replace: true });
    setChallengeSpecimenId(target.id);
    setAppliedStainId(null);
    setChallengeRevealed(false);
    setShowReferences(false);
    resetView();
  }
  function endChallenge() {
    setSearchParams({ slide: challengeSpecimenId ?? specimen.id }, { replace: true });
    setChallengeSpecimenId(null);
    setChallengeRevealed(false);
  }

  return (
    <div className="page microscope-page">
      <div className="module-page-head">
        <div>
          <Link to="/" className="back-link">← {t('backToOverview')}</Link>
          <div className="eyebrow"><span className="eyebrow-line" />{t('microscopeEyebrow')}</div>
          <h1 className="page-title">{t('microscopeTitle')}</h1>
          <p className="page-intro">{t('microscopeDescription')}</p>
        </div>
        <div className="module-head-actions">
          <button type="button" className="button button-outline keys-trigger" onClick={() => setShowKeys((v) => !v)} aria-expanded={showKeys}>⌨ {lang === 'ar' ? 'اختصارات' : 'Shortcuts'}</button>
          {!challengeHidden && <ShareButton path={`/microscope?slide=${specimen.id}`} title={`${specimen.title[locale]} | SciLab`} />}
          {!challengeHidden && <button type="button" className="button button-outline source-trigger" onClick={() => setShowReferences(true)}><ReferenceIcon />{t('sourcesLabel')}</button>}
          {!challengeSpecimenId && <button type="button" className="button button-outline challenge-trigger" onClick={startChallenge}>{t('randomChallenge')}</button>}
          {challengeHidden && <button type="button" className="button button-primary challenge-trigger" onClick={() => setChallengeRevealed(true)}>{t('revealSlide')}</button>}
          {challengeHidden && <button type="button" className="button button-outline challenge-trigger" onClick={endChallenge}>{t('endChallenge')}</button>}
          {challengeSpecimenId && challengeRevealed && <button type="button" className="button button-outline challenge-trigger" onClick={endChallenge}>{t('endChallenge')}</button>}
        </div>
      </div>

      {!challengeHidden && (
        <nav className="subject-bar" aria-label={lang === 'ar' ? 'الأقسام' : 'Subjects'}>
          {departments.map((item) => (
            <button type="button" key={item.id} onClick={() => changeDepartment(item.id)} className={`subject-chip${department === item.id ? ' is-selected' : ''}`} aria-pressed={department === item.id}>
              <span>{item.label[lang]}</span><b>{departmentCounts[item.id]}</b>
            </button>
          ))}
        </nav>
      )}

      {showKeys && (
        <div className="keys-panel" role="region" aria-label={lang === 'ar' ? 'اختصارات الكيبورد' : 'Keyboard shortcuts'}>
          <b>{lang === 'ar' ? 'اختصارات الكيبورد' : 'Keyboard shortcuts'}</b>
          <ul>
            <li><kbd>+</kbd> <kbd>-</kbd> <span>{lang === 'ar' ? 'العدسة أقوى / أضعف' : 'Objective stronger / weaker'}</span></li>
            <li><kbd>[</kbd> <kbd>]</kbd> <span>{lang === 'ar' ? 'بؤرة خشنة' : 'Coarse focus'}</span></li>
            <li><kbd>,</kbd> <kbd>.</kbd> <span>{lang === 'ar' ? 'بؤرة دقيقة' : 'Fine focus'}</span></li>
            <li><kbd>K</kbd> <kbd>L</kbd> <span>{lang === 'ar' ? 'إضاءة أقل / أكثر' : 'Light dimmer / brighter'}</span></li>
            <li><kbd>←</kbd><kbd>↑</kbd><kbd>→</kbd><kbd>↓</kbd> <span>{lang === 'ar' ? 'تحريك الشريحة (بعد الضغط عليها)' : 'Move the slide (click it first)'}</span></li>
            <li><kbd>0</kbd> <span>{lang === 'ar' ? 'رجوع لـ 4× وتوسيط' : 'Back to 4x, centred'}</span></li>
            <li><kbd>?</kbd> <span>{lang === 'ar' ? 'إظهار / إخفاء القايمة' : 'Show / hide this list'}</span></li>
          </ul>
        </div>
      )}

      <div className={`microscope-workspace${challengeHidden ? ' is-challenge' : ''}`}>
        <section className="scope-view-panel" aria-label={lang === 'ar' ? 'منظر المجهر' : 'Microscope view'}>
          <div className="scope-view-head">
            <div className="specimen-heading">
              <span className="specimen-id">{challengeHidden ? t('unknownSlide') : (lang === 'ar' ? 'شريحة مجهّزة' : 'Prepared slide')}</span>
              <h2>{challengeHidden ? (lang === 'ar' ? 'عينة غير معروفة' : 'Unknown specimen') : specimen.title[lang]}</h2>
              <p>{challengeHidden ? t('challengePrompt') : specimen.subtitle[lang]}</p>
              {!challengeHidden && <SpeakButton text={specimen.title.en} lang="en" />}
            </div>
            <div className="view-head-right">
              <div className="objective-readout"><span>{t('fieldOfView')}</span><b>{magnification}<small>×</small></b><i>{activeObjective[lang]}</i></div>
              <button type="button" className="icon-button reset-button" onClick={resetView} aria-label={lang === 'ar' ? 'إعادة توسيط الشريحة' : 'Center slide'} title={lang === 'ar' ? 'إعادة توسيط الشريحة' : 'Center slide'}><ResetIcon /></button>
            </div>
          </div>
          {!challengeHidden && clinicalNotes[specimen.id] && (
            <aside className="clinical-note" aria-label={lang === 'ar' ? 'ملاحظات للتعرف والنقطة الإكلينيكية' : 'Recognition and clinical point'}>
              {clinicalNotes[specimen.id].recognize && <p><b>{lang === 'ar' ? 'ازاي تتعرف عليها: ' : 'How to recognize it: '}</b>{clinicalNotes[specimen.id].recognize![lang]}</p>}
              {clinicalNotes[specimen.id].clinical && <p><b>{lang === 'ar' ? 'النقطة الإكلينيكية: ' : 'Clinical point: '}</b>{clinicalNotes[specimen.id].clinical![lang]}</p>}
              <small>{lang === 'ar' ? 'المصدر: ' : 'Source: '}<a href={clinicalNotes[specimen.id].source.url} target="_blank" rel="noreferrer">{clinicalNotes[specimen.id].source.title}</a>{lang === 'ar' ? ' · للمذاكرة فقط، مش للتشخيص.' : ' · For study only, not for diagnosis.'}</small>
            </aside>
          )}
          {!challengeHidden && plantNotes[specimen.id] && (
            <aside className="clinical-note plant-note" aria-label={lang === 'ar' ? 'ملاحظات نباتية: التعرف والوظيفة والمقارنة' : 'Plant notes: recognition, function and comparison'}>
              {plantNotes[specimen.id].recognize && <p><b>{lang === 'ar' ? 'ازاي تتعرف عليها: ' : 'How to recognize it: '}</b>{plantNotes[specimen.id].recognize![lang]}</p>}
              {plantNotes[specimen.id].function && <p><b>{lang === 'ar' ? 'وظيفتها للنبات: ' : 'What it does for the plant: '}</b>{plantNotes[specimen.id].function![lang]}</p>}
              {plantNotes[specimen.id].compare && <p><b>{lang === 'ar' ? 'مقارنة: ' : 'Comparison: '}</b>{plantNotes[specimen.id].compare![lang]}</p>}
              <small>{lang === 'ar' ? 'المصدر: ' : 'Source: '}<a href={plantNotes[specimen.id].source.url} target="_blank" rel="noreferrer">{plantNotes[specimen.id].source.title}</a>{lang === 'ar' ? ' · للمذاكرة.' : ' · For study.'}</small>
            </aside>
          )}
          {!challengeHidden && animalNotes[specimen.id] && (
            <aside className="clinical-note plant-note animal-note" aria-label={lang === 'ar' ? 'ملاحظات حيوانية: التعرف والوظيفة والمقارنة' : 'Animal notes: recognition, function and comparison'}>
              {animalNotes[specimen.id].recognize && <p><b>{lang === 'ar' ? 'ازاي تتعرف عليها: ' : 'How to recognize it: '}</b>{animalNotes[specimen.id].recognize![lang]}</p>}
              {animalNotes[specimen.id].function && <p><b>{animalNotes[specimen.id].functionLabel?.[lang] ?? (lang === 'ar' ? 'وظيفتها في المجموعة دي: ' : 'What it does in this group: ')}</b>{animalNotes[specimen.id].function![lang]}</p>}
              {animalNotes[specimen.id].compare && <p><b>{lang === 'ar' ? 'مقارنة: ' : 'Comparison: '}</b>{animalNotes[specimen.id].compare![lang]}</p>}
              <small>{lang === 'ar' ? 'المصدر: ' : 'Source: '}<a href={animalNotes[specimen.id].source.url} target="_blank" rel="noreferrer">{animalNotes[specimen.id].source.title}</a>{lang === 'ar' ? ' · وصف للمجموعة مش للعينة بالذات، للمذاكرة.' : ' · Describes the group, not this exact specimen. For study.'}</small>
            </aside>
          )}
          <div className="canvas-stage">
            <MicroscopeCanvas imageSrc={activeMedia?.src} magnification={magnification} coarseFocus={coarseFocus} fineFocus={fineFocus} light={light} stainFilter={activeStain?.canvasFilter ?? 'none'} pan={pan} placeholders={{ empty: lang === 'ar' ? 'اختر شريحة مجهّزة' : 'Choose a prepared slide', loading: lang === 'ar' ? 'جارٍ تحميل صورة الشريحة…' : 'Loading slide photograph…', failed: lang === 'ar' ? 'تعذّر تحميل صورة الشريحة' : 'Slide photograph unavailable' }} onPan={setPan} onZoomReset={() => { setMagnification(4); setPan({ x: 0, y: 0 }); }} onZoom={(direction) => { const order = objectives.map((objective) => objective.value); const next = order[Math.max(0, Math.min(order.length - 1, order.indexOf(magnification) + direction))]; if (next !== undefined) setMagnification(next); }} ariaLabel={challengeHidden ? (lang === 'ar' ? 'عينة مجهرية مخفية للاختبار' : 'Hidden specimen for identification challenge') : specimen.title[lang]} />
          </div>
          <div className="view-status-line"><span>{lang === 'ar' ? 'اسحب الصورة للتنقّل داخل الشريحة.' : 'Drag the image to move across the slide.'}</span>{activeStain && <span className="active-stain-readout">{t('currentStainPreview')}: {activeStain.title[lang]}</span>}<span>{t('learningOnly')}</span></div>
          {!challengeHidden && activeMedia && <p className="photo-credit">{lang === 'ar' ? 'الصورة داخل الصفحة · تصوير' : 'Image shown here · photographed by'} {activeMedia.author} · {activeMedia.license}</p>}
        </section>

        <aside className="scope-control-panel">
          {challengeHidden ? (
            <section className="challenge-note"><span className="eyebrow">{t('randomChallenge')}</span><p>{t('challengePrompt')}</p><small>{lang === 'ar' ? 'استخدم العدسات وضبط البؤرة والإضاءة لفحص الصورة.' : 'Use the objective, focus, and light controls to examine the image.'}</small></section>
          ) : <>
            <section className="control-section">
              <div className="control-section-title"><h3>{t('chooseDepartment')}</h3></div>
              <div className="department-list">
                {departments.map((item) => (
                  <button type="button" key={item.id} onClick={() => changeDepartment(item.id)} className={`department-button${department === item.id ? ' is-selected' : ''}`} aria-pressed={department === item.id}>
                    <span>{item.label[lang]} ({departmentCounts[item.id]})</span>
                  </button>
                ))}
              </div>
            </section>

            <section className="control-section specimen-control-section">
              <div className="control-section-title control-section-title--split"><h3>{t('selectSpecimen')}</h3><small className="specimen-count">{filteredSpecimens.length} / {searching ? specimens.length : availableSpecimens.length} {t('samplesCount')}{searching ? (lang === 'ar' ? ' (كل الأقسام)' : ' (all departments)') : ''}</small></div>
              <div className="specimen-tools">
                <label className="specimen-search-wrap">
                  <span className="sr-only">{t('searchSamples')}</span>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.3" /><path d="m15.5 15.5 4.2 4.2" /></svg>
                  <input type="search" value={sampleQuery} onChange={(event) => setSampleQuery(event.target.value)} placeholder={t('searchSamples')} />
                </label>
                <button type="button" className={`favorites-filter${favoritesOnly ? ' is-active' : ''}`} onClick={() => setFavoritesOnly((current) => !current)} aria-pressed={favoritesOnly}><span aria-hidden="true">★</span>{favoritesOnly ? t('allSamples') : t('favoritesOnly')}</button>
              </div>
              {subcategoryChoices.length > 0 && (
                <label className="subcategory-filter">
                  <span>{lang === 'ar' ? 'التصنيف' : 'Category'}</span>
                  <select value={subcategory} onChange={(event) => setSubcategory(event.target.value)}>
                    <option value="all">{lang === 'ar' ? `كل الشرائح (${availableSpecimens.length})` : `All slides (${availableSpecimens.length})`}</option>
                    {subcategoryChoices.map((choice) => <option key={choice.id} value={choice.id}>{choice.label[lang]} ({choice.count})</option>)}
                  </select>
                </label>
              )}
              {filteredSpecimens.length === 0 ? <p className="specimen-empty">{t('noSamplesFound')}</p> : (
                <div className="specimen-pick">
                  {filteredSpecimens.map((sample) => {
                    const isFavorite = favoriteIds.includes(sample.id);
                    const isSelected = specimen.id === sample.id;
                    return (
                      <div key={sample.id} className={`specimen-pick-row${isSelected ? ' is-selected' : ''}`}>
                        <button type="button" className="specimen-pick-button" onClick={() => changeSpecimen(sample.id)} aria-pressed={isSelected}>
                          <img className="specimen-thumbnail" src={thumbSrc(specimenMedia[sample.id]?.src)} alt="" width="50" height="43" loading="lazy" decoding="async" />
                          <span><b>{sample.title[lang]}</b><small>{searching ? `${departments.find((item) => item.id === sample.department)?.label[lang] ?? ''} · ` : ''}{sample.subtitle[lang]}</small></span>
                        </button>
                        <button type="button" className={`specimen-favorite${isFavorite ? ' is-favorite' : ''}`} onClick={() => toggleFavorite(sample.id)} aria-label={`${isFavorite ? t('removeFavorite') : t('addFavorite')}: ${sample.title[lang]}`} aria-pressed={isFavorite} title={isFavorite ? t('removeFavorite') : t('addFavorite')}>{isFavorite ? '★' : '☆'}</button>
                      </div>
                    );
                  })}
                </div>
              )}
            </section>
          </>}

          {department === 'hematology' && !challengeHidden && <section className="control-section stain-section">
            <div className="control-section-title control-section-title--split"><h3>{t('bloodStainStation')}</h3><span className="digital-stain-tag">{lang === 'ar' ? 'محاكاة' : 'Digital'}</span></div>
            <p className="stain-preview-disclaimer">{t('stainPreviewOnly')}</p>
            <div className="stain-options" role="group" aria-label={t('chooseBloodStain')}>
              {bloodStains.map((stain) => <button type="button" key={stain.id} className={`stain-option${selectedStainId === stain.id ? ' is-selected' : ''}`} onClick={() => setSelectedStainId(stain.id)} aria-pressed={selectedStainId === stain.id}>
                <i style={{ '--stain-color': stain.color } as React.CSSProperties} />
                <span><b>{stain.title[lang]}</b><small>{stain.purpose[lang]}</small></span>
              </button>)}
            </div>
            <div className="stain-actions">
              <button type="button" className="stain-apply-button" onClick={() => setAppliedStainId(selectedStainId)}>{t('applyStainPreview')}</button>
              {activeStain && <button type="button" className="stain-clear-button" onClick={() => setAppliedStainId(null)}>{t('clearStainPreview')}</button>}
            </div>
          </section>}

          <section className="control-section optics-control-section">
            <div className="control-section-title"><h3>{t('objectiveLens')}</h3></div>
            <div className="objective-grid">
              {objectives.map((objective) => <button type="button" key={objective.value} className={`objective-button objective-button--${objective.value}${magnification === objective.value ? ' is-selected' : ''}`} onClick={() => setMagnification(objective.value)} aria-pressed={magnification === objective.value}><b>{objective.value}<small>×</small></b><span>{objective[lang]}</span></button>)}
            </div>
            {magnification === 100 && <p className="oil-note">{t('oilImmersionNote')}</p>}
          </section>

          <section className="control-section focus-section">
            <div className="control-section-title"><h3>{lang === 'ar' ? 'ضبط البؤرة' : 'Focus'}</h3></div>
            <Slider label={t('coarseFocus')} value={coarseFocus} onChange={setCoarseFocus} />
            <Slider label={t('focus')} value={fineFocus} onChange={setFineFocus} />
          </section>

          <section className="control-section light-section">
            <div className="control-section-title"><h3>{t('illumination')}</h3></div>
            <Slider label={t('illumination')} value={light} min={20} max={100} onChange={setLight} />
          </section>
        </aside>
      </div>
      {showReferences && !challengeHidden && <ReferenceDialog title={specimen.title[lang]} subtitle={specimen.subtitle[lang]} facts={specimen.facts} references={[...(activeMedia ? [{ id: `photo-${specimen.id}`, title: activeMedia.title, provider: `${activeMedia.author} · ${activeMedia.license}`, url: activeMedia.sourceUrl, supports: activeMedia.adaptation ?? 'Photomicrograph displayed directly in the microscope field.' }] : []), ...specimen.references, ...(activeStain?.references ?? [])]} onClose={() => setShowReferences(false)} />}
    </div>
  );
}
