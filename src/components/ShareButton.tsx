import { useState } from 'react';
import { usePreferences } from '../app/PreferencesContext';

// Shares a direct link: the phone share sheet where available, otherwise copies the link.
export function ShareButton({ path, title }: { path: string; title: string }) {
  const { locale } = usePreferences();
  const ar = locale === 'ar';
  const [copied, setCopied] = useState(false);

  async function share() {
    const url = `${window.location.origin}${path}`;
    if (navigator.share) {
      try { await navigator.share({ title, url }); return; } catch (e) { if ((e as Error).name === 'AbortError') return; }
    }
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      window.prompt(ar ? 'انسخ اللينك:' : 'Copy this link:', url);
      return;
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button type="button" className="button button-outline share-button" onClick={share}>
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 15V4m0 0L8 8m4-4 4 4M5 13v6h14v-6" /></svg>
      <span aria-live="polite">{copied ? (ar ? 'تم نسخ اللينك' : 'Link copied') : (ar ? 'شارك' : 'Share')}</span>
    </button>
  );
}
