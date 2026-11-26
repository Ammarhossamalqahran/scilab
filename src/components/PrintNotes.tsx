import { createPortal } from 'react-dom';
import { specimens } from '../data/scientificData';
import { specimenMedia } from '../data/specimenMedia';

// Print-only sheet: hidden on screen, the only thing shown when the browser prints / saves as PDF.
export function PrintNotes({ notes, lang, comparisonKey, comparisonTitle, title }: { notes: Record<string, string>; lang: 'en' | 'ar'; comparisonKey: string; comparisonTitle: string; title: string }) {
  const entries = Object.entries(notes).filter(([, note]) => note.trim());
  return createPortal(
    <div className="print-notes" dir={lang === 'ar' ? 'rtl' : 'ltr'} lang={lang}>
      <h1>{title}</h1>
      <p className="print-notes-meta">SciLab · {new Date().toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-GB')}</p>
      {entries.length === 0 && <p>{lang === 'ar' ? 'لسه مفيش ملاحظات.' : 'No notes yet.'}</p>}
      {entries.map(([id, note]) => {
        const sample = specimens.find((s) => s.id === id);
        const media = sample ? specimenMedia[sample.id] : undefined;
        return (
          <section key={id} className="print-note">
            {media && <img src={media.src} alt="" />}
            <div>
              <h2>{id === comparisonKey ? comparisonTitle : sample?.title[lang] ?? id}</h2>
              {sample && <small>{sample.title[lang === 'ar' ? 'en' : 'ar']}</small>}
              <p>{note}</p>
            </div>
          </section>
        );
      })}
    </div>,
    document.body,
  );
}
