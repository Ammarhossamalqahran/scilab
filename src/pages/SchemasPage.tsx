import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { usePreferences } from '../app/PreferencesContext';
import { DiagramArtwork } from '../schemas/DiagramArtwork';
import { diagramCategories, diagrams, type DiagramCategory } from '../data/diagramData';

export function SchemasPage() {
  const { locale, t } = usePreferences();
  const [category, setCategory] = useState<DiagramCategory | 'all'>('all');
  const filtered = useMemo(() => category === 'all' ? diagrams : diagrams.filter((diagram) => diagram.category === category), [category]);
  const lang = locale;
  return (
    <div className="page schemas-page">
      <div className="module-page-head schema-page-head">
        <div>
          <Link to="/" className="back-link">← {t('backToOverview')}</Link>
          <div className="eyebrow"><span className="eyebrow-line" />{t('schemasEyebrow')}</div>
          <h1 className="page-title">{t('schemasTitle')}</h1>
          <p className="page-intro">{t('schemasDescription')}</p>
        </div>
        <div className="atlas-total"><b>04</b><span>{lang === 'ar' ? 'صفائح علمية أولية' : 'VERIFIED PLATES'}</span></div>
      </div>
      <div className="schema-toolbar">
        <div className="schema-filter-label"><span className="filter-reticle">⌖</span>{t('allCategories')}</div>
        <div className="schema-filters" role="group" aria-label={t('allCategories')}>
          <button type="button" className={`filter-chip${category === 'all' ? ' is-selected' : ''}`} onClick={() => setCategory('all')} aria-pressed={category === 'all'}>{t('allCategories')}<b>04</b></button>
          {diagramCategories.map((item) => <button key={item.id} type="button" className={`filter-chip${category === item.id ? ' is-selected' : ''}`} onClick={() => setCategory(item.id)} aria-pressed={category === item.id}><span>{item.title[lang]}</span></button>)}
        </div>
      </div>
      <div className="schema-card-grid">
        {filtered.map((diagram, index) => {
          const categoryTitle = diagramCategories.find((item) => item.id === diagram.category)!.title[lang];
          return (
            <Link to={`/schemas/${diagram.id}`} className="schema-card" key={diagram.id}>
              <div className="schema-thumb"><DiagramArtwork diagram={diagram} compact /></div>
              <div className="schema-card-body">
                <div className="schema-card-top"><span className="schema-category">{categoryTitle}</span><span className="schema-card-index">PLATE / {String(index + 1).padStart(2, '0')}</span></div>
                <h2>{diagram.title[lang]}</h2>
                <p>{diagram.summary[lang]}</p>
                <div className="schema-card-footer"><span>{diagram.structures.length} {lang === 'ar' ? 'تراكيب تفاعلية' : 'INTERACTIVE STRUCTURES'}</span><span className="schema-open">↗</span></div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="schema-caveat"><span>◈</span><p>{lang === 'ar' ? 'رسومات تعليمية مبسطة ومسنودة بمراجع أكاديمية. راجع المراجع داخل كل صفيحة.' : 'Simplified educational diagrams backed by academic references. Open each plate to review its sources.'}</p></div>
    </div>
  );
}
