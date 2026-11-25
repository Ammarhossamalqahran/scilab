import { Component, useEffect, type ErrorInfo, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { usePreferences } from '../app/PreferencesContext';

type Kind = 'notFound' | 'schemaMissing' | 'crash';

const copy = {
  notFound: {
    code: '404',
    en: { title: 'Page not found', text: 'This page does not exist or the link is wrong. Go back to the lab and pick a section.' },
    ar: { title: 'الصفحة مش موجودة', text: 'الصفحة دي مش موجودة أو اللينك غلط. ارجع للمعمل واختار قسم.' },
  },
  schemaMissing: {
    code: '404',
    en: { title: 'Diagram not found', text: 'There is no study diagram with this link. Open the full list and choose one.' },
    ar: { title: 'الرسم مش موجود', text: 'مفيش رسم للمذاكرة بالرابط ده. افتح القايمة الكاملة واختار رسم.' },
  },
  crash: {
    code: '500',
    en: { title: 'Something went wrong', text: 'The page hit an unexpected error. Reload it, or go back home. Your saved settings are safe.' },
    ar: { title: 'حصلت مشكلة', text: 'الصفحة وقعت في خطأ غير متوقع. أعد تحميلها أو ارجع للرئيسية. إعداداتك محفوظة.' },
  },
} as const;

export function ErrorScreen({ kind }: { kind: Kind }) {
  const { locale } = usePreferences();
  const c = copy[kind];
  const text = c[locale];
  useEffect(() => { document.title = `${c.code} | SciLab`; }, [c.code]);
  return (
    <div className="page error-screen" role="alert">
      <div className="error-code" aria-hidden="true">{c.code}</div>
      <h1 className="error-title">{text.title}</h1>
      <p className="error-text">{text.text}</p>
      <div className="error-actions">
        {kind === 'crash'
          ? <button type="button" className="button button-primary" onClick={() => window.location.reload()}>{locale === 'ar' ? 'إعادة التحميل' : 'Reload page'}</button>
          : null}
        {kind === 'schemaMissing'
          ? <Link to="/schemas" className="button button-primary">{locale === 'ar' ? 'كل الرسومات' : 'All diagrams'}</Link>
          : null}
        <a href="/" className={kind === 'crash' ? 'button button-outline' : 'button button-primary'}>{locale === 'ar' ? 'الرئيسية' : 'Home'}</a>
      </div>
    </div>
  );
}

export class ErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch(error: Error, info: ErrorInfo) { console.error('SciLab error', error, info.componentStack); }
  render() { return this.state.failed ? <ErrorScreen kind="crash" /> : this.props.children; }
}
