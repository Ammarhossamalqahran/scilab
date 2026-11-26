import { useRef, useState } from 'react';
import { usePreferences } from '../app/PreferencesContext';
import { resizeToJpeg, uploadPhoto } from '../lib/leaderboardApi';

// "Choose a photo" button: shrinks the picture on the device, uploads it, and reports success.
export function PhotoPicker({ onDone, label }: { onDone: () => void; label?: string }) {
  const { locale } = usePreferences();
  const ar = locale === 'ar';
  const input = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState('');
  async function pick(file?: File) {
    if (!file) return;
    setBusy(true); setMsg('');
    const img = await resizeToJpeg(file);
    if (!img) { setBusy(false); setMsg(ar ? 'الصورة دي ماينفعش. جرب صورة تانية (JPG أو PNG).' : 'That picture will not work. Try another one (JPG or PNG).'); return; }
    const r = await uploadPhoto(img);
    setBusy(false);
    if (r.ok) onDone();
    else setMsg(r.reason === 'rate_limited' ? (ar ? 'محاولات كتير. جرب بعد شوية.' : 'Too many tries. Try again later.') : (ar ? 'ماتحملتش. جرب تاني.' : 'Upload failed. Try again.'));
  }
  return (
    <>
      <input ref={input} type="file" accept="image/jpeg,image/png,image/webp" hidden onChange={(e) => { void pick(e.target.files?.[0]); e.target.value = ''; }} />
      <button type="button" className="button button-primary welcome-go" disabled={busy} onClick={() => input.current?.click()}>{busy ? (ar ? 'بنرفع...' : 'Uploading...') : (label ?? (ar ? 'اختار صورة' : 'Choose a photo'))}</button>
      {msg && <small>{msg}</small>}
    </>
  );
}
