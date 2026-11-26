import { useEffect, useRef, useState } from 'react';
import { usePreferences } from '../app/PreferencesContext';
import { googleClientId, loadGis } from '../lib/google';

// Google's own sign-in button. Renders nothing when no Client ID is configured or the script is blocked.
export function GoogleButton({ onCredential, text = 'continue_with' }: { onCredential: (credential: string) => void; text?: 'continue_with' | 'signin_with' }) {
  const { locale, theme } = usePreferences();
  const box = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(true);
  const cb = useRef(onCredential); cb.current = onCredential;
  useEffect(() => {
    let live = true;
    (async () => {
      const id = await googleClientId();
      const gis = id ? await loadGis() : null;
      if (!live) return;
      if (!id || !gis || !box.current) { setReady(false); return; }
      gis.accounts.id.initialize({ client_id: id, callback: (r: { credential?: string }) => { if (r.credential) cb.current(r.credential); }, ux_mode: 'popup' });
      gis.accounts.id.renderButton(box.current, { type: 'standard', theme: theme === 'dark' ? 'filled_black' : 'outline', size: 'large', text, shape: 'pill', locale: locale === 'ar' ? 'ar' : 'en', width: 240 });
    })();
    return () => { live = false; };
  }, [locale, theme, text]);
  if (!ready) return null;
  return <div ref={box} className="google-btn" />;
}
