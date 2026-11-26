import { useEffect, useState } from 'react';
import { usePreferences } from '../app/PreferencesContext';

// Phones keep a tab (or the installed app) alive for days, so it can keep running an old version after a
// new one is published. This checks the published page when the tab comes back and offers a refresh.
const current = () => [...document.scripts].map((s) => s.src).find((s) => /\/assets\/index-[^/]+\.js$/.test(s))?.split('/').pop() ?? '';

export function UpdateNotice() {
  const { locale } = usePreferences();
  const ar = locale === 'ar';
  const [stale, setStale] = useState(false);

  useEffect(() => {
    if (!import.meta.env.PROD) return;
    const mine = current();
    if (!mine) return;
    let busy = false;
    const check = async () => {
      if (busy) return; busy = true;
      try {
        const html = await (await fetch(`/?__v=${Date.now()}`, { cache: 'no-store' })).text();
        const latest = /\/assets\/(index-[^"'/]+\.js)/.exec(html)?.[1];
        if (latest && latest !== mine) setStale(true);
      } catch { /* offline: try later */ }
      busy = false;
    };
    const onVis = () => { if (document.visibilityState === 'visible') void check(); };
    document.addEventListener('visibilitychange', onVis);
    const timer = window.setInterval(() => void check(), 10 * 60 * 1000);
    void check();
    return () => { document.removeEventListener('visibilitychange', onVis); window.clearInterval(timer); };
  }, []);

  if (!stale) return null;
  return (
    <div className="update-notice" role="status">
      <span>{ar ? 'فيه نسخة جديدة من الموقع.' : 'A new version of the site is available.'}</span>
      <button type="button" className="button button-primary" onClick={() => window.location.reload()}>{ar ? 'حدّث' : 'Refresh'}</button>
    </div>
  );
}
