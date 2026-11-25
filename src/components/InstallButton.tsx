import { useEffect, useState } from 'react';
import { usePreferences } from '../app/PreferencesContext';

type InstallPrompt = Event & { prompt: () => Promise<void>; userChoice: Promise<{ outcome: string }> };

const isStandalone = () => window.matchMedia('(display-mode: standalone)').matches || (navigator as Navigator & { standalone?: boolean }).standalone === true;
const isIos = () => /iphone|ipad|ipod/i.test(navigator.userAgent);

// One tap installs the app to the home screen where the browser allows it.
// iPhone Safari has no install prompt, so there the button shows the two-step manual hint instead.
export function InstallButton() {
  const { locale } = usePreferences();
  const ar = locale === 'ar';
  const [deferred, setDeferred] = useState<InstallPrompt | null>(null);
  const [installed, setInstalled] = useState(false);
  const [hint, setHint] = useState(false);

  useEffect(() => {
    const onPrompt = (e: Event) => { e.preventDefault(); setDeferred(e as InstallPrompt); };
    const onInstalled = () => { setInstalled(true); setDeferred(null); };
    window.addEventListener('beforeinstallprompt', onPrompt);
    window.addEventListener('appinstalled', onInstalled);
    return () => { window.removeEventListener('beforeinstallprompt', onPrompt); window.removeEventListener('appinstalled', onInstalled); };
  }, []);

  if (installed || isStandalone()) return null;
  const ios = isIos();
  if (!deferred && !ios) return null;

  async function install() {
    if (deferred) {
      await deferred.prompt();
      await deferred.userChoice;
      setDeferred(null);
    } else {
      setHint((v) => !v);
    }
  }

  return (
    <span className="install-wrap">
      <button type="button" className="quiet-button install-button" onClick={install}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v10m0 0 4-4m-4 4-4-4M5 19h14" /></svg>
        {ar ? 'ثبّت التطبيق' : 'Install app'}
      </button>
      {hint && <span className="install-hint" role="status">{ar ? 'من زر المشاركة اختار "إضافة إلى الشاشة الرئيسية".' : 'Tap Share, then "Add to Home Screen".'}</span>}
    </span>
  );
}
