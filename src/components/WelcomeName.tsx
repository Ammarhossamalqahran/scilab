import { useEffect, useRef, useState } from 'react';
import { usePreferences } from '../app/PreferencesContext';
import { checkNick, NICK_OK, saveNick, savedNick } from '../lib/leaderboardApi';
import { LogoMark } from './LogoMark';

const KEY = 'scilab-welcome';
const seen = () => { try { return window.localStorage.getItem(KEY) !== null || savedNick() !== ''; } catch { return true; } };

// Shown once, the first time the site opens. The name becomes the leaderboard name.
// Skipping is allowed and not asked again; the name can be changed on the challenge page.
export function WelcomeName() {
  const { locale, setLocale } = usePreferences();
  const ar = locale === 'ar';
  const [open, setOpen] = useState(() => !seen());
  const [name, setName] = useState('');
  const [msg, setMsg] = useState<'' | 'bad' | 'taken'>('');
  const [busy, setBusy] = useState(false);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => { if (open) input.current?.focus(); }, [open]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') skip(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });
  if (!open) return null;

  function skip() { try { window.localStorage.setItem(KEY, 'skipped'); } catch { /* ignored */ } setOpen(false); }
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const clean = name.trim().replace(/\s+/g, ' ');
    if (!NICK_OK.test(clean)) { setMsg('bad'); return; }
    setBusy(true);
    const free = await checkNick(clean);
    setBusy(false);
    if (free === 'taken') { setMsg('taken'); return; }
    saveNick(clean);
    try { window.localStorage.setItem(KEY, 'named'); } catch { /* ignored */ }
    setOpen(false);
  }

  return (
    <div className="welcome-backdrop" role="dialog" aria-modal="true" aria-labelledby="welcome-title">
      <form className="welcome-card" onSubmit={submit}>
        <div className="welcome-hero" aria-hidden="true">
          <span className="welcome-ring welcome-ring--a" /><span className="welcome-ring welcome-ring--b" /><span className="welcome-ring welcome-ring--c" />
          <LogoMark />
        </div>
        <button type="button" className="welcome-lang" onClick={() => setLocale(ar ? 'en' : 'ar')}>{ar ? 'EN' : 'ع'}</button>
        <div className="welcome-body">
          <h2 id="welcome-title">{ar ? 'أهلاً بيك في SciLab' : 'Welcome to SciLab'}</h2>
          <p>{ar ? 'اكتب اسمك وادخل المنافسة. هتلاقي اسمك في لوحة الشرف مع أحسن نتايجك.' : 'Enter your name and join the race. You will see it on the leaderboard next to your best scores.'}</p>
          <input ref={input} value={name} maxLength={16} onChange={(e) => { setName(e.target.value); setMsg(''); }} placeholder={ar ? 'اسمك' : 'Your name'} aria-label={ar ? 'اسمك' : 'Your name'} autoComplete="nickname" />
          {msg === 'bad' && <small>{ar ? 'الاسم لازم 2 لـ 16 حرف أو رقم.' : 'Use 2 to 16 letters or numbers.'}</small>}
          {msg === 'taken' && <small>{ar ? 'الاسم ده مأخوذ. جرب اسم تاني (مثلاً زوّد رقم).' : 'That name is taken. Try another (for example add a number).'}</small>}
          <button type="submit" className="button button-primary welcome-go" disabled={busy || name.trim().length < 2}>{ar ? 'يلا نبدأ' : "Let's go"}</button>
          <button type="button" className="welcome-skip" onClick={skip}>{ar ? 'تخطّى' : 'Skip'}</button>
        </div>
      </form>
    </div>
  );
}
