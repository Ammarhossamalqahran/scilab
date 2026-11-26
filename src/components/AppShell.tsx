import { NavLink, Link, Outlet } from 'react-router-dom';
import { usePreferences } from '../app/PreferencesContext';
import { LogoMark } from './LogoMark';
import { FeedbackButton } from './FeedbackButton';
import { InstallButton } from './InstallButton';
import { ReminderBanner } from './ReminderBanner';

function ThemeGlyph({ theme }: { theme: 'dark' | 'light' }) {
  return theme === 'dark'
    ? <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></svg>
    : <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 15.5A8.5 8.5 0 0 1 8.5 3.5 8.5 8.5 0 1 0 20.5 15.5Z" /></svg>;
}

function CompassGlyph() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="m15.8 8.2-2.3 5.3-5.3 2.3 2.3-5.3 5.3-2.3Z" /></svg>;
}

function MicroscopeGlyph() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 3 5 5m-7 1 6-6 3 3-6 6M6 14a5 5 0 1 0 10 0m-7 5h11M13 9l2 2m-2 3h5" /><path d="M6 19h13" /></svg>;
}
function ExamGlyph() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4h8l1 2h3v14H4V6h3zM9 4V2h6v2M8 11l2 2 5-5M8 17h8" /></svg>;
}
function SchemaGlyph() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="2" /><path d="m12 3.5-3 6.7m3 0 6.5 3.5M10.5 13l-5 5" /></svg>;
}

function StudyGlyph() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="6" width="14" height="12" rx="1.5" /><path d="M7 3h13a1 1 0 0 1 1 1v11M7 11h6" /></svg>;
}
function DailyGlyph() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="15" rx="1.5" /><path d="M4 10h16M9 3v4m6-4v4" /></svg>;
}

function CompareGlyph() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="8" height="14" rx="1" /><rect x="13" y="5" width="8" height="14" rx="1" /></svg>;
}

function ChallengeGlyph() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="13" r="8" /><path d="M12 9v4l3 2M9 2h6" /></svg>;
}

export function AppShell() {
  const { locale, setLocale, theme, toggleTheme, t } = usePreferences();

  return (
    <div className="app-shell">
      <header className="topbar">
        <Link to="/" className="brand-lockup" aria-label={t('brand')}>
          <LogoMark />
          <span className="brand-copy">
            <span className="brand-name">{t('brand')}</span>
            <span className="brand-subtitle">{t('brandShort')}</span>
          </span>
        </Link>
        <div className="topbar-tools">
          <button className="quiet-button language-button" onClick={() => setLocale(locale === 'en' ? 'ar' : 'en')} aria-label={t('switchLanguage')}>
            {t('switchLanguage')}
          </button>
          <button className="icon-button" onClick={toggleTheme} aria-label={t('switchTheme')} title={t('switchTheme')}>
            <ThemeGlyph theme={theme} />
          </button>
          <InstallButton />
        </div>
      </header>

      <div className="app-frame">
        <aside className="sidebar">
          <div className="sidebar-caption">{t('subjectLabel')}</div>
          <nav className="main-nav" aria-label="Main navigation">
            <NavLink to="/" end className={({ isActive }) => `nav-item${isActive ? ' is-active' : ''}`}>
              <CompassGlyph /><span>{t('navHome')}</span>
            </NavLink>
            <NavLink to="/microscope" className={({ isActive }) => `nav-item${isActive ? ' is-active' : ''}`}>
              <MicroscopeGlyph /><span>{t('navMicroscope')}</span>
            </NavLink>
            <NavLink to="/exams" className={({ isActive }) => `nav-item${isActive ? ' is-active' : ''}`}>
              <ExamGlyph /><span>{t('navExams')}</span>
            </NavLink>
            <NavLink to="/schemas" className={({ isActive }) => `nav-item${isActive ? ' is-active' : ''}`}>
              <SchemaGlyph /><span>{t('navSchemas')}</span>
            </NavLink>
            <NavLink to="/study" className={({ isActive }) => `nav-item${isActive ? ' is-active' : ''}`}>
              <StudyGlyph /><span>{locale === 'ar' ? 'فلاش كاردز' : 'Flashcards'}</span>
            </NavLink>
            <NavLink to="/daily" className={({ isActive }) => `nav-item${isActive ? ' is-active' : ''}`}>
              <DailyGlyph /><span>{locale === 'ar' ? 'عينة اليوم' : 'Specimen of the day'}</span>
            </NavLink>
            <NavLink to="/compare" className={({ isActive }) => `nav-item${isActive ? ' is-active' : ''}`}>
              <CompareGlyph /><span>{locale === 'ar' ? 'مقارنة' : 'Compare'}</span>
            </NavLink>
            <NavLink to="/challenge" className={({ isActive }) => `nav-item${isActive ? ' is-active' : ''}`}>
              <ChallengeGlyph /><span>{locale === 'ar' ? 'تحدي الـ 60 ثانية' : '60-second challenge'}</span>
            </NavLink>
          </nav>
        </aside>
        <main className="main-content"><ReminderBanner /><Outlet /></main>
        <FeedbackButton />
      </div>
    </div>
  );
}
