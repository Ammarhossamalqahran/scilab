import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { usePreferences } from '../app/PreferencesContext';
import { specimens, type ScientificSpecimen } from '../data/scientificData';
import { specimenMedia } from '../data/specimenMedia';

const pool = specimens.filter((s) => specimenMedia[s.id]);
const byId = new Map(pool.map((s) => [s.id, s]));
const departmentLabel: Record<string, { en: string; ar: string }> = {
  hematology: { en: 'Blood cells', ar: 'خلايا الدم' }, histology: { en: 'Tissues', ar: 'الأنسجة' }, microbiology: { en: 'Microorganisms', ar: 'كائنات دقيقة' },
  botany: { en: 'Plant slides', ar: 'شرائح نباتية' }, 'aquatic-life': { en: 'Freshwater life', ar: 'كائنات المياه العذبة' }, zoology: { en: 'Zoology', ar: 'علم الحيوان' }, genetics: { en: 'Cell division & genetics', ar: 'الانقسام الخلوي والوراثة' },
};

function Picker({ value, onChange, label, lang }: { value: string; onChange: (id: string) => void; label: string; lang: 'en' | 'ar' }) {
  const [query, setQuery] = useState('');
  const options = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = q ? pool.filter((s) => `${s.title.en} ${s.title.ar} ${s.subtitle.en}`.toLowerCase().includes(q)) : pool;
    const picked = byId.get(value);
    return (picked && !list.includes(picked) ? [picked, ...list] : list).slice(0, 80);
  }, [query, value]);
  return (
    <div className="compare-picker">
      <span className="compare-label">{label}</span>
      <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder={lang === 'ar' ? 'ابحث بالاسم…' : 'Search by name…'} aria-label={label} />
      <select value={value} onChange={(e) => onChange(e.target.value)} aria-label={label}>
        {options.map((s) => <option key={s.id} value={s.id}>{s.title[lang]}</option>)}
      </select>
    </div>
  );
}

function Side({ s, lang }: { s: ScientificSpecimen; lang: 'en' | 'ar' }) {
  const m = specimenMedia[s.id];
  return (
    <article className="compare-side">
      <div className="compare-photo"><img src={m.src} alt={s.title[lang]} /></div>
      <h2>{s.title[lang]}</h2>
      <div className="compare-dept">{departmentLabel[s.department]?.[lang]} · {s.title[lang === 'ar' ? 'en' : 'ar']}</div>
      <p>{s.subtitle[lang]}</p>
      {s.facts.slice(0, 3).map((f, i) => <p key={i} className="compare-fact">{f[lang]}</p>)}
    </article>
  );
}

export function ComparePage() {
  const { locale: lang } = usePreferences();
  const ar = lang === 'ar';
  const [params, setParams] = useSearchParams();
  const a = byId.get(params.get('a') ?? '') ?? byId.get('blood-smear') ?? pool[0];
  const b = byId.get(params.get('b') ?? '') ?? pool.find((s) => s.id !== a.id) ?? pool[1];
  const [hideNames, setHideNames] = useState(false);

  function set(next: { a?: string; b?: string }) { setParams({ a: next.a ?? a.id, b: next.b ?? b.id }, { replace: true }); }
  function randomPair() {
    const first = pool[Math.floor(Math.random() * pool.length)];
    const same = pool.filter((s) => s.department === first.department && s.id !== first.id);
    const second = same[Math.floor(Math.random() * same.length)] ?? pool[0];
    set({ a: first.id, b: second.id });
  }

  return (
    <div className="page page-compare">
      <div className="eyebrow">{ar ? 'مقارنة' : 'COMPARE'}</div>
      <h1 className="compare-title">{ar ? 'قارن عينتين جنب بعض' : 'Compare two slides side by side'}</h1>
      <p className="compare-lead">{ar ? 'اختار عينتين وشوف الصور والمعلومات المسجلة لكل واحدة.' : 'Pick two specimens and see their photos and recorded facts together.'}</p>
      <div className="compare-controls">
        <Picker value={a.id} onChange={(id) => set({ a: id })} label={ar ? 'العينة الأولى' : 'Slide A'} lang={lang} />
        <Picker value={b.id} onChange={(id) => set({ b: id })} label={ar ? 'العينة التانية' : 'Slide B'} lang={lang} />
      </div>
      <div className="compare-buttons">
        <button className="button" onClick={() => set({ a: b.id, b: a.id })}>{ar ? 'بدّل' : 'Swap'}</button>
        <button className="button" onClick={randomPair}>{ar ? 'زوج عشوائي من نفس القسم' : 'Random pair, same department'}</button>
        <button className="button" aria-pressed={hideNames} onClick={() => setHideNames((v) => !v)}>{hideNames ? (ar ? 'اظهر الأسماء' : 'Show names') : (ar ? 'اخفي الأسماء (اختبر نفسك)' : 'Hide names (test yourself)')}</button>
      </div>
      <div className={`compare-grid${hideNames ? ' is-hidden' : ''}`}>
        {hideNames ? (
          [a, b].map((s, i) => (
            <article className="compare-side" key={s.id}>
              <div className="compare-photo"><img src={specimenMedia[s.id].src} alt={i === 0 ? 'A' : 'B'} /></div>
              <h2>{i === 0 ? (ar ? 'عينة أ' : 'Slide A') : (ar ? 'عينة ب' : 'Slide B')}</h2>
              <p className="compare-dept">{ar ? 'الاسم مخفي. حاول تحدد الفروق قبل ما تظهره.' : 'Name hidden. Try to spot the differences first.'}</p>
            </article>
          ))
        ) : (<><Side s={a} lang={lang} /><Side s={b} lang={lang} /></>)}
      </div>
    </div>
  );
}
