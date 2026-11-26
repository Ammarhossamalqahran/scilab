import { useState } from 'react';
import { usePreferences } from '../app/PreferencesContext';
import { createCode, restoreCode, savedNick } from '../lib/leaderboardApi';

// Optional: make a new personal code, or restore a name and scores with an existing one.
export function AccountCode() {
  const { locale } = usePreferences();
  const ar = locale === 'ar';
  const [code, setCode] = useState('');
  const [input, setInput] = useState('');
  const [msg, setMsg] = useState('');
  const [busy, setBusy] = useState(false);

  async function make() {
    const nick = savedNick();
    if (nick.length < 2) { setMsg(ar ? 'اكتب اسمك الأول (سجّل نتيجة أو افتح الموقع من جديد).' : 'Set your name first (post a score or reopen the site).'); return; }
    setBusy(true); setMsg('');
    const r = await createCode(nick);
    setBusy(false);
    if (r.ok) setCode(r.code); else setMsg(r.reason === 'nick_taken' ? (ar ? 'الاسم ده مأخوذ.' : 'That name is taken.') : r.reason === 'rate_limited' ? (ar ? 'محاولات كتير. جرب بعد شوية.' : 'Too many tries. Try later.') : (ar ? 'ماقدرناش نوصل للسيرفر.' : 'Could not reach the server.'));
  }
  async function restore(e: React.FormEvent) {
    e.preventDefault(); setBusy(true); setMsg('');
    const r = await restoreCode(input);
    setBusy(false);
    if (r.ok) window.location.reload();
    else setMsg(r.reason === 'bad_code' ? (ar ? 'الكود غلط.' : 'That code is not right.') : r.reason === 'rate_limited' ? (ar ? 'محاولات كتير. جرب بعد شوية.' : 'Too many tries. Try again later.') : (ar ? 'ماقدرناش نوصل للسيرفر.' : 'Could not reach the server.'));
  }
  return (
    <details className="code-panel">
      <summary>{ar ? 'كودي الشخصي' : 'My personal code'}</summary>
      <div className="code-row">
        <button type="button" className="button" onClick={make} disabled={busy}>{ar ? 'اعمل كود جديد' : 'Make a new code'}</button>
        {code && <output className="welcome-code" dir="ltr">{code}</output>}
      </div>
      <small>{ar ? 'الكود الجديد بيلغي القديم وبيظهر مرة واحدة. لو ضاع الكود ومعاك الجهاز القديم اعمل واحد جديد من هنا. لو ضاع والجهاز راح، مفيش طريقة نرجعه لأننا مش بنحفظ رقم ولا إيميل.' : 'A new code replaces the old one and is shown only once. If you lose it but still have this device, make a new one here. If both are gone it cannot be recovered, because we do not keep a phone number or email.'}</small>
      <form className="code-row" onSubmit={restore}>
        <input value={input} maxLength={14} onChange={(e) => setInput(e.target.value)} placeholder="ABCDE-FGHIJ" aria-label={ar ? 'الكود' : 'Code'} autoCapitalize="characters" autoComplete="off" />
        <button className="button" disabled={busy || input.replace(/[^A-Za-z0-9]/g, '').length < 10}>{ar ? 'استرجع بالكود' : 'Restore with code'}</button>
      </form>
      {msg && <small>{msg}</small>}
    </details>
  );
}
