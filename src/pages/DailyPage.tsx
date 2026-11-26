import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { usePreferences } from '../app/PreferencesContext';
import { specimenMedia } from '../data/specimenMedia';
import { specimenOfTheDay, PROD_URL } from '../lib/dailySpecimen';
import { renderShareCard } from '../lib/shareCard';

export function DailyPage() {
  const { locale: lang, theme } = usePreferences();
  const ar = lang === 'ar';
  const [today] = useState(() => new Date());
  const specimen = specimenOfTheDay(today);
  const media = specimenMedia[specimen.id];
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => { setError(false); }, [lang]);

  const dateLabel = new Intl.DateTimeFormat(ar ? 'ar-EG' : 'en-GB', { weekday: 'long', day: 'numeric', month: 'long' }).format(today);

  async function share() {
    setBusy(true); setError(false);
    try {
      const blob = await renderShareCard({
        imageSrc: media.src, title: specimen.title, subtitle: specimen.subtitle, fact: specimen.facts[0], lang,
        heading: ar ? 'عينة اليوم من SciLab' : 'SciLab specimen of the day', url: PROD_URL, dark: theme === 'dark',
      });
      const file = new File([blob], `scilab-${specimen.id}.png`, { type: 'image/png' });
      if (navigator.canShare?.({ files: [file] })) {
        try { await navigator.share({ files: [file], title: specimen.title[lang], url: PROD_URL }); return; } catch (e) { if ((e as Error).name === 'AbortError') return; }
      }
      const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = file.name; a.click();
      window.setTimeout(() => URL.revokeObjectURL(a.href), 4000);
    } catch { setError(true); } finally { setBusy(false); }
  }

  return (
    <div className="page page-daily">
      <div className="eyebrow">{ar ? 'عينة اليوم' : 'SPECIMEN OF THE DAY'} · {dateLabel}</div>
      <h1 className="daily-title">{specimen.title[lang]}</h1>
      <p className="daily-lead">{specimen.subtitle[lang]}</p>
      <figure className="daily-figure"><img src={media.src} alt={specimen.title[lang]} /></figure>
      <div className="daily-facts">
        {specimen.facts.slice(0, 2).map((f, i) => <p key={i} className="daily-fact">{f[lang]}</p>)}
      </div>
      <div className="daily-actions">
        <button className="button button-primary" onClick={share} disabled={busy}>{busy ? (ar ? 'بجهز الكارت…' : 'Preparing card…') : (ar ? 'شارك كارت للستوري' : 'Share as story card')}</button>
        <Link className="button" to={`/microscope?slide=${specimen.id}`}>{ar ? 'افحصها بالمجهر' : 'Examine in microscope'}</Link>
      </div>
      {error && <p className="daily-hint">{ar ? 'حصلت مشكلة في تجهيز الكارت. جرب تاني.' : 'Could not prepare the card. Try again.'}</p>}
      <p className="daily-hint">{ar ? 'عينة جديدة كل يوم. الصورة والمصدر في صفحة المجهر.' : 'A new specimen every day. Photo credits are on the microscope page.'}</p>
    </div>
  );
}
