import { useEffect, useState } from 'react';
import { usePreferences } from '../app/PreferencesContext';
import { takeGoogleResult, type GoogleResult } from '../lib/google';

// After coming back from Google: a clear message that it worked (or why it did not), with one button to continue.
export function GoogleResultDialog() {
  const { locale } = usePreferences();
  const ar = locale === 'ar';
  const [r, setR] = useState<GoogleResult | null>(() => takeGoogleResult());
  useEffect(() => {
    const on = () => { const v = takeGoogleResult(); if (v) setR(v); };
    window.addEventListener('scilab-google-result', on);
    return () => window.removeEventListener('scilab-google-result', on);
  }, []);
  if (!r) return null;
  const ok = r.kind !== 'error';
  const title = r.kind === 'linked' ? (ar ? 'تم ربط حساب جوجل' : 'Google account linked')
    : r.kind === 'signedin' ? (ar ? `أهلاً ${r.nick ?? ''}، تم الدخول` : `Welcome back ${r.nick ?? ''}, you are signed in`)
    : (ar ? 'ماتمش الربط' : 'It did not work');
  const text = r.kind === 'linked' ? (ar ? 'تقدر دلوقتي تدخل بحساب جوجل من أي جهاز: اضغط "عندي كود" ثم "ادخل بحساب جوجل".' : 'You can now sign in with Google on any device: tap "I have a code", then "Sign in with Google".')
    : r.kind === 'signedin' ? (ar ? 'رجعنالك اسمك ونتايجك.' : 'Your name and scores are back.')
    : r.reason === 'already_linked' ? (ar ? 'حساب جوجل ده مربوط باسم تاني. ادخل بيه من "عندي كود".' : 'That Google account is already linked to another name. Sign in with it from "I have a code".')
    : r.reason === 'no_account' ? (ar ? 'مفيش اسم مربوط بحساب جوجل ده. اعمل اسم الأول وبعدين اربطه من البروفايل.' : 'No name is linked to this Google account. Create a name first, then link it from the profile.')
    : r.reason === 'no_profile' ? (ar ? 'سجّل اسمك الأول، بعدين اربط جوجل من البروفايل.' : 'Set your name first, then link Google from the profile.')
    : r.reason === 'cancelled' ? (ar ? 'لغيت العملية. مفيش حاجة اتغيرت.' : 'You cancelled. Nothing changed.')
    : (ar ? 'حصلت مشكلة. جرب تاني بعد شوية.' : 'Something went wrong. Please try again in a moment.');
  return (
    <div className="welcome-backdrop" role="alertdialog" aria-modal="true" aria-labelledby="gr-title">
      <div className="welcome-card profile-card">
        <div className="welcome-body">
          <h2 id="gr-title" style={{ color: ok ? 'var(--accent, #0a6b4f)' : undefined }}>{ok ? '✓ ' : ''}{title}</h2>
          <p>{text}</p>
          <button type="button" className="button button-primary welcome-go" onClick={() => setR(null)}>{ar ? 'تمام' : 'OK'}</button>
        </div>
      </div>
    </div>
  );
}
