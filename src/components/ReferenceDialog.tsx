import { useEffect, useRef } from 'react';
import type { Bilingual, ScientificReference } from '../data/scientificData';
import { usePreferences } from '../app/PreferencesContext';

type Props = {
  title: string;
  subtitle?: string;
  facts: Bilingual[];
  references: ScientificReference[];
  caveats?: Bilingual[];
  onClose: () => void;
};

export function ReferenceDialog({ title, subtitle, facts, references, caveats = [], onClose }: Props) {
  const { locale, t } = usePreferences();
  const language = locale;
  const dialogRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;
  useEffect(() => {
    const previous = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();
    const handleDialogKeys = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); onCloseRef.current(); return; }
      if (event.key !== 'Tab') return;
      const focusable = Array.from(dialogRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])') ?? []);
      if (!focusable.length) { event.preventDefault(); dialogRef.current?.focus(); return; }
      const first = focusable[0]; const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    window.addEventListener('keydown', handleDialogKeys);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', handleDialogKeys); previous?.focus(); };
  }, []);

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section ref={dialogRef} className="reference-dialog" role="dialog" aria-modal="true" aria-labelledby="reference-title" tabIndex={-1}>
        <div className="dialog-header">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" />{t('sourcesLabel')}</div>
            <h2 id="reference-title">{title}</h2>
            {subtitle && <p>{subtitle}</p>}
          </div>
          <button ref={closeButtonRef} type="button" className="dialog-close" onClick={onClose} aria-label={t('close')}>×</button>
        </div>
        <div className="dialog-scroll">
          <div className="reference-block">
            <h3>{language === 'ar' ? 'حقائق علمية موثّقة' : 'Verified scientific notes'}</h3>
            <ul className="fact-list">{facts.map((fact) => <li key={fact.en}>{fact[language]}</li>)}</ul>
          </div>
          {caveats.length > 0 && <div className="caveat-block"><b>{language === 'ar' ? 'تنبيه' : 'Important context'}</b><ul>{caveats.map((fact) => <li key={fact.en}>{fact[language]}</li>)}</ul></div>}
          <div className="reference-block">
            <h3>{language === 'ar' ? 'المراجع الأكاديمية' : 'Academic references'}</h3>
            <div className="reference-list">
              {references.map((reference, index) => (
                <a key={reference.id} className="reference-item" href={reference.url} target="_blank" rel="noreferrer">
                  <span className="reference-index">{String(index + 1).padStart(2, '0')}</span>
                  <span><b>{reference.title}</b><small>{reference.provider}</small><i>{reference.supports}</i></span>
                  <span className="external-mark" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="dialog-footer"><span className="source-lock">◈</span>{t('referenceNote')}<button type="button" className="button button-outline" onClick={onClose}>{t('close')}</button></div>
      </section>
    </div>
  );
}
