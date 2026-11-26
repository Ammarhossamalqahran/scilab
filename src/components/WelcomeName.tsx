import { useEffect, useRef, useState } from 'react';
import { usePreferences } from '../app/PreferencesContext';
import { checkNick, createCode, restoreCode, updateProfile, saveAvatar, NICK_OK, saveNick, savedNick } from '../lib/leaderboardApi';
import { AVATARS, Avatar } from '../data/avatars';
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
  const [step, setStep] = useState<'name' | 'code' | 'avatar' | 'restore'>('name');
  const [pick, setPick] = useState('');
  const [code, setCode] = useState('');
  const [copied, setCopied] = useState(false);
  const [restoreErr, setRestoreErr] = useState('');
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => { if (open) input.current?.focus(); }, [open, step]);
  useEffect(() => {
    const on = () => { setStep('name'); setName(''); setMsg(''); setOpen(true); };
    window.addEventListener('scilab-open-welcome', on);
    return () => window.removeEventListener('scilab-open-welcome', on);
  }, []);
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
    setBusy(true);
    const made = await createCode(clean);
    setBusy(false);
    if (!made.ok && (made.reason === 'nick_taken' || made.reason === 'bad_nick')) { setMsg(made.reason === 'nick_taken' ? 'taken' : 'bad'); return; }
    saveNick(clean);
    try { window.localStorage.setItem(KEY, 'named'); } catch { /* ignored */ }
    if (made.ok) { setCode(made.code); setStep('code'); } else setOpen(false); // server unreachable: name still saved, no code
  }
  async function restore(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true); setRestoreErr('');
    const r = await restoreCode(name);
    setBusy(false);
    if (r.ok) { try { window.localStorage.setItem(KEY, 'named'); } catch { /* ignored */ } window.location.reload(); return; }
    setRestoreErr(r.reason === 'bad_code' ? (ar ? 'الكود غلط.' : 'That code is not right.') : r.reason === 'rate_limited' ? (ar ? 'محاولات كتير. جرب بعد شوية.' : 'Too many tries. Try again later.') : (ar ? 'ماقدرناش نوصل للسيرفر.' : 'Could not reach the server.'));
  }
  async function copy() { try { await navigator.clipboard.writeText(code); setCopied(true); } catch { /* select by hand */ } }

  return (
    <div className="welcome-backdrop" role="dialog" aria-modal="true" aria-labelledby="welcome-title">
      <form className="welcome-card" onSubmit={step === 'restore' ? restore : step === 'code' ? (e) => e.preventDefault() : submit}>
        <div className="welcome-hero" aria-hidden="true">
          <span className="welcome-ring welcome-ring--a" /><span className="welcome-ring welcome-ring--b" /><span className="welcome-ring welcome-ring--c" />
          <LogoMark />
        </div>
        <button type="button" className="welcome-lang" onClick={() => setLocale(ar ? 'en' : 'ar')}>{ar ? 'EN' : 'ع'}</button>
        {step === 'code' ? (
          <div className="welcome-body">
            <h2 id="welcome-title">{ar ? 'كودك الشخصي' : 'Your personal code'}</h2>
            <p>{ar ? 'احفظ الكود ده. بيرجعلك اسمك ونتايجك لو غيرت الموبايل أو مسحت البيانات. بيظهر مرة واحدة بس.' : 'Save this code. It brings back your name and scores on a new phone or after clearing data. It is shown only once.'}</p>
            <output className="welcome-code" dir="ltr">{code}</output>
            <button type="button" className="button welcome-go" onClick={copy}>{copied ? (ar ? 'اتنسخ' : 'Copied') : (ar ? 'انسخ الكود' : 'Copy code')}</button>
            <button type="button" className="button button-primary welcome-go" onClick={() => setStep('avatar')}>{ar ? 'تمام، حفظته' : 'Done, I saved it'}</button>
          </div>
        ) : step === 'avatar' ? (
          <div className="welcome-body">
            <h2 id="welcome-title">{ar ? 'اختار شخصيتك' : 'Pick your character'}</h2>
            <div className="avatar-grid" role="listbox" aria-label={ar ? 'الشخصيات' : 'Characters'}>
              {AVATARS.map((a) => (
                <button type="button" key={a.id} role="option" aria-selected={pick === a.id} className={`avatar-pick${pick === a.id ? ' is-picked' : ''}`} onClick={() => setPick(a.id)}>
                  <Avatar id={a.id} size={48} /><span>{a.label[ar ? 'ar' : 'en']}</span>
                </button>
              ))}
            </div>
            <button type="button" className="button button-primary welcome-go" onClick={() => { const id = pick || 'cell'; saveAvatar(id); void updateProfile({ avatar: id }); setOpen(false); }}>{ar ? 'خلاص' : 'Finish'}</button>
          </div>
        ) : step === 'restore' ? (
          <div className="welcome-body">
            <h2 id="welcome-title">{ar ? 'عندي كود' : 'I have a code'}</h2>
            <p>{ar ? 'اكتب كودك الشخصي عشان يرجعلك اسمك ونتايجك.' : 'Enter your personal code to bring back your name and scores.'}</p>
            <input value={name} maxLength={14} dir="ltr" onChange={(e) => { setName(e.target.value); setRestoreErr(''); }} placeholder="ABCDE-FGHIJ" aria-label={ar ? 'الكود' : 'Code'} autoCapitalize="characters" autoComplete="off" />
            {restoreErr && <small>{restoreErr}</small>}
            <button type="submit" className="button button-primary welcome-go" disabled={busy || name.replace(/[^A-Za-z0-9]/g, '').length < 10}>{ar ? 'استرجع' : 'Restore'}</button>
            <button type="button" className="welcome-skip" onClick={() => { setStep('name'); setName(''); setRestoreErr(''); }}>{ar ? 'رجوع' : 'Back'}</button>
          </div>
        ) : (
        <div className="welcome-body">
          <h2 id="welcome-title">{ar ? 'أهلاً بيك في SciLab' : 'Welcome to SciLab'}</h2>
          <p>{ar ? 'اكتب اسمك وادخل المنافسة. هتلاقي اسمك في لوحة الشرف مع أحسن نتايجك.' : 'Enter your name and join the race. You will see it on the leaderboard next to your best scores.'}</p>
          <input ref={input} value={name} maxLength={16} onChange={(e) => { setName(e.target.value); setMsg(''); }} placeholder={ar ? 'اسمك' : 'Your name'} aria-label={ar ? 'اسمك' : 'Your name'} autoComplete="nickname" />
          {msg === 'bad' && <small>{ar ? 'الاسم لازم 2 لـ 16 حرف أو رقم.' : 'Use 2 to 16 letters or numbers.'}</small>}
          {msg === 'taken' && <small>{ar ? 'الاسم ده مأخوذ. جرب اسم تاني (مثلاً زوّد رقم).' : 'That name is taken. Try another (for example add a number).'}</small>}
          <button type="submit" className="button button-primary welcome-go" disabled={busy || name.trim().length < 2}>{ar ? 'يلا نبدأ' : "Let's go"}</button>
          <button type="button" className="welcome-skip" onClick={() => { setStep('restore'); setName(''); }}>{ar ? 'عندي كود' : 'I have a code'}</button>
          <button type="button" className="welcome-skip" onClick={skip}>{ar ? 'تخطّى' : 'Skip'}</button>
        </div>
        )}
      </form>
    </div>
  );
}
