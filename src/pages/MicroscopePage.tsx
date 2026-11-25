import { useCallback, useEffect, useMemo, useState } from 'react';
import { ShareButton } from '../components/ShareButton';
import { Link, useSearchParams } from 'react-router-dom';
import { usePreferences } from '../app/PreferencesContext';
import { ReferenceDialog } from '../components/ReferenceDialog';
import { bloodStains, type BloodStainId } from '../data/bloodStains';
import { MicroscopeCanvas } from '../microscope/MicroscopeCanvas';
import { specimens, type DepartmentId } from '../data/scientificData';
import { specimenMedia } from '../data/specimenMedia';

const departments: { id: DepartmentId; label: { en: string; ar: string } }[] = [
  { id: 'hematology', label: { en: 'Blood cells', ar: 'خلايا الدم' } },
  { id: 'histology', label: { en: 'Tissues', ar: 'الأنسجة' } },
  { id: 'microbiology', label: { en: 'Microorganisms', ar: 'كائنات دقيقة' } },
  { id: 'botany', label: { en: 'Plant slides', ar: 'شرائح نباتية' } },
  { id: 'aquatic-life', label: { en: 'Freshwater life', ar: 'كائنات المياه العذبة' } },
  { id: 'zoology', label: { en: 'Zoology', ar: 'علم الحيوان' } },
  { id: 'genetics', label: { en: 'Cell division & genetics', ar: 'الانقسام الخلوي والوراثة' } },
];
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

export function MicroscopePage() {
  const { locale, t } = usePreferences();
  const lang = locale;
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedSpecimen = specimens.find((sample) => sample.id === searchParams.get('slide'));
  const [department, setDepartment] = useState<DepartmentId>(requestedSpecimen?.department ?? 'hematology');
  const availableSpecimens = useMemo(() => specimens.filter((sample) => sample.department === department), [department]);
  const [selectedByDepartment, setSelectedByDepartment] = useState<Record<DepartmentId, string>>({
    hematology: requestedSpecimen?.department === 'hematology' ? requestedSpecimen.id : 'blood-smear',
    histology: requestedSpecimen?.department === 'histology' ? requestedSpecimen.id : 'onion-epidermis',
    microbiology: requestedSpecimen?.department === 'microbiology' ? requestedSpecimen.id : 'budding-yeast',
    botany: requestedSpecimen?.department === 'botany' ? requestedSpecimen.id : 'dicot-leaf',
    'aquatic-life': requestedSpecimen?.department === 'aquatic-life' ? requestedSpecimen.id : 'daphnia',
    zoology: requestedSpecimen?.department === 'zoology' ? requestedSpecimen.id : 'ascaris-section',
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
  const [sampleQuery, setSampleQuery] = useState('');
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [favoriteIds, setFavoriteIds] = useState<string[]>(readFavorites);
  const [challengeSpecimenId, setChallengeSpecimenId] = useState<string | null>(null);
  const [challengeRevealed, setChallengeRevealed] = useState(false);
  const [selectedStainId, setSelectedStainId] = useState<BloodStainId>('wright-giemsa');
  const [appliedStainId, setAppliedStainId] = useState<BloodStainId | null>(null);
  const activeStain = bloodStains.find((stain) => stain.id === appliedStainId);
  const activeObjective = objectives.find((objective) => objective.value === magnification)!;
  const challengeHidden = challengeSpecimenId !== null && !challengeRevealed;
  const resetView = useCallback(() => setPan({ x: 0, y: 0 }), []);

  const filteredSpecimens = useMemo(() => {
    const query = sampleQuery.trim().toLocaleLowerCase(lang === 'ar' ? 'ar' : 'en');
    return availableSpecimens.filter((sample) => {
      if (favoritesOnly && !favoriteIds.includes(sample.id)) return false;
      if (!query) return true;
      return [sample.title[lang], sample.subtitle[lang], sample.description[lang]]
        .some((value) => value.toLocaleLowerCase(lang === 'ar' ? 'ar' : 'en').includes(query));
    });
  }, [availableSpecimens, favoriteIds, favoritesOnly, lang, sampleQuery]);

  useEffect(() => {
    try {
      window.localStorage.setItem(favoriteStorageKey, JSON.stringify(favoriteIds));
    } catch {
      // Keep favorites available for the current session when browser storage is blocked.
    }
  }, [favoriteIds]);

  function changeDepartment(id: DepartmentId) {
    setDepartment(id);
    setAppliedStainId(null);
    setChallengeSpecimenId(null);
    setChallengeRevealed(false);
    setSearchParams({ slide: selectedByDepartment[id] }, { replace: true });
    resetView();
  }
  function changeSpecimen(id: string) {
    setSelectedByDepartment((current) => ({ ...current, [department]: id }));
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
          {!challengeHidden && <ShareButton path={`/microscope?slide=${specimen.id}`} title={`${specimen.title[locale]} | SciLab`} />}
          {!challengeHidden && <button type="button" className="button button-outline source-trigger" onClick={() => setShowReferences(true)}><ReferenceIcon />{t('sourcesLabel')}</button>}
          {!challengeSpecimenId && <button type="button" className="button button-outline challenge-trigger" onClick={startChallenge}>{t('randomChallenge')}</button>}
          {challengeHidden && <button type="button" className="button button-primary challenge-trigger" onClick={() => setChallengeRevealed(true)}>{t('revealSlide')}</button>}
          {challengeHidden && <button type="button" className="button button-outline challenge-trigger" onClick={endChallenge}>{t('endChallenge')}</button>}
          {challengeSpecimenId && challengeRevealed && <button type="button" className="button button-outline challenge-trigger" onClick={endChallenge}>{t('endChallenge')}</button>}
        </div>
      </div>

      <div className={`microscope-workspace${challengeHidden ? ' is-challenge' : ''}`}>
        <section className="scope-view-panel" aria-label={lang === 'ar' ? 'منظر المجهر' : 'Microscope view'}>
          <div className="scope-view-head">
            <div className="specimen-heading">
              <span className="specimen-id">{challengeHidden ? t('unknownSlide') : (lang === 'ar' ? 'شريحة مجهّزة' : 'Prepared slide')}</span>
              <h2>{challengeHidden ? (lang === 'ar' ? 'عينة غير معروفة' : 'Unknown specimen') : specimen.title[lang]}</h2>
              <p>{challengeHidden ? t('challengePrompt') : specimen.subtitle[lang]}</p>
            </div>
            <div className="view-head-right">
              <div className="objective-readout"><span>{t('fieldOfView')}</span><b>{magnification}<small>×</small></b><i>{activeObjective[lang]}</i></div>
              <button type="button" className="icon-button reset-button" onClick={resetView} aria-label={lang === 'ar' ? 'إعادة توسيط الشريحة' : 'Center slide'} title={lang === 'ar' ? 'إعادة توسيط الشريحة' : 'Center slide'}><ResetIcon /></button>
            </div>
          </div>
          <div className="canvas-stage">
            <MicroscopeCanvas imageSrc={activeMedia?.src} magnification={magnification} coarseFocus={coarseFocus} fineFocus={fineFocus} light={light} stainFilter={activeStain?.canvasFilter ?? 'none'} pan={pan} placeholders={{ empty: lang === 'ar' ? 'اختر شريحة مجهّزة' : 'Choose a prepared slide', loading: lang === 'ar' ? 'جارٍ تحميل صورة الشريحة…' : 'Loading slide photograph…', failed: lang === 'ar' ? 'تعذّر تحميل صورة الشريحة' : 'Slide photograph unavailable' }} onPan={setPan} onZoom={(direction) => { const order = objectives.map((objective) => objective.value); const next = order[Math.max(0, Math.min(order.length - 1, order.indexOf(magnification) + direction))]; if (next !== undefined) setMagnification(next); }} ariaLabel={challengeHidden ? (lang === 'ar' ? 'عينة مجهرية مخفية للاختبار' : 'Hidden specimen for identification challenge') : specimen.title[lang]} />
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
                    <span>{item.label[lang]}</span>
                  </button>
                ))}
              </div>
            </section>

            <section className="control-section specimen-control-section">
              <div className="control-section-title control-section-title--split"><h3>{t('selectSpecimen')}</h3><small className="specimen-count">{filteredSpecimens.length} / {availableSpecimens.length} {t('samplesCount')}</small></div>
              <div className="specimen-tools">
                <label className="specimen-search-wrap">
                  <span className="sr-only">{t('searchSamples')}</span>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.3" /><path d="m15.5 15.5 4.2 4.2" /></svg>
                  <input type="search" value={sampleQuery} onChange={(event) => setSampleQuery(event.target.value)} placeholder={t('searchSamples')} />
                </label>
                <button type="button" className={`favorites-filter${favoritesOnly ? ' is-active' : ''}`} onClick={() => setFavoritesOnly((current) => !current)} aria-pressed={favoritesOnly}><span aria-hidden="true">★</span>{favoritesOnly ? t('allSamples') : t('favoritesOnly')}</button>
              </div>
              {filteredSpecimens.length === 0 ? <p className="specimen-empty">{t('noSamplesFound')}</p> : (
                <div className="specimen-pick">
                  {filteredSpecimens.map((sample) => {
                    const isFavorite = favoriteIds.includes(sample.id);
                    const isSelected = specimen.id === sample.id;
                    return (
                      <div key={sample.id} className={`specimen-pick-row${isSelected ? ' is-selected' : ''}`}>
                        <button type="button" className="specimen-pick-button" onClick={() => changeSpecimen(sample.id)} aria-pressed={isSelected}>
                          <img className="specimen-thumbnail" src={specimenMedia[sample.id]?.src} alt="" loading="lazy" />
                          <span><b>{sample.title[lang]}</b><small>{sample.subtitle[lang]}</small></span>
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
