import { useEffect, useState } from 'react';
import { usePreferences } from '../app/PreferencesContext';

// Reads a name aloud with the browser's built-in speech synthesis (no audio files, nothing sent anywhere).
// Voices differ by device; scientific names are read by the English voice, so pronunciation is approximate.
export function SpeakButton({ text, lang }: { text: string; lang: 'en' | 'ar' }) {
  const { locale } = usePreferences();
  const ar = locale === 'ar';
  const supported = typeof window !== 'undefined' && 'speechSynthesis' in window;
  const [speaking, setSpeaking] = useState(false);
  useEffect(() => () => { if (supported) window.speechSynthesis.cancel(); }, [supported, text]);
  if (!supported) return null;

  function speak() {
    const synth = window.speechSynthesis;
    synth.cancel();
    const u = new SpeechSynthesisUtterance(text);
    const tag = lang === 'ar' ? 'ar' : 'en';
    u.lang = tag === 'ar' ? 'ar-EG' : 'en-US';
    const voice = synth.getVoices().find((v) => v.lang.toLowerCase().startsWith(tag));
    if (voice) u.voice = voice;
    u.rate = 0.85;
    u.onstart = () => setSpeaking(true);
    u.onend = () => setSpeaking(false);
    u.onerror = () => setSpeaking(false);
    synth.speak(u);
  }
  const label = lang === 'en' ? (ar ? 'انطق الاسم (إنجليزي)' : 'Hear the name') : (ar ? 'انطق الاسم (عربي)' : 'Hear in Arabic');
  return (
    <button type="button" className={`speak-button${speaking ? ' is-speaking' : ''}`} onClick={speak} aria-label={label} title={label}>
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4zM16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12" /></svg>
      <span>{label}</span>
    </button>
  );
}
