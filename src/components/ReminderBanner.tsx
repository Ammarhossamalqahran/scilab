import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { usePreferences } from '../app/PreferencesContext';
import { readStats, DOCTOR_SCORE } from '../data/gameStats';
import { currentState, enableReminders, disableReminders, sendTestPush, rememberLanguage, type PushState } from '../lib/pushReminders';

const VISIT = 'scilab-visit';
const HIDE = 'scilab-banner-hidden';
const day = (d = new Date()) => `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

// Counts consecutive days the site was opened. Kept only in this browser.
function touchStreak(): number {
  try {
    const v = JSON.parse(localStorage.getItem(VISIT) ?? 'null') as { last?: string; streak?: number } | null;
    const today = day();
    if (v?.last === today) return v.streak ?? 1;
    const y = new Date(); y.setDate(y.getDate() - 1);
    const streak = v?.last === day(y) ? (v.streak ?? 0) + 1 : 1;
    localStorage.setItem(VISIT, JSON.stringify({ last: today, streak }));
    return streak;
  } catch { return 1; }
}

// In-site teaser shown once a day. It works everywhere, including where push is not available.
export function ReminderBanner() {
  const { locale } = usePreferences();
  const ar = locale === 'ar';
  const [streak] = useState(touchStreak);
  const [hidden, setHidden] = useState(() => { try { return localStorage.getItem(HIDE) === day(); } catch { return false; } });
  const [state, setState] = useState<PushState>('unsupported');
  const [busy, setBusy] = useState(false);
  const [note, setNote] = useState('');
  const best = readStats().best;

  useEffect(() => { void currentState().then(setState); }, []);
  useEffect(() => { void rememberLanguage(ar ? 'ar' : 'en'); }, [ar]);

  const [taps, setTaps] = useState(0);
  const testMode = taps >= 5 || new URLSearchParams(window.location.search).has('pushtest');
  if (hidden && !testMode) return null;
  const left = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate() - new Date().getDate();
  const monthEnd = left <= 2;
  const tease = monthEnd
    ? (ar ? 'آخر الشهر يا ضعيف! الليدربورد هيتصفّر قريب، تعالى كمّل التحدي.' : 'Month end, weakling! The leaderboard resets soon. Come finish the challenge.')
    : best >= DOCTOR_SCORE
    ? (ar ? `إنت غلبت الدكتور (${best}). بس هو بيتدرب في السر. تعالى ثبّت مكانك.` : `You beat the Doctor (${best}). He is training in secret. Come defend your spot.`)
    : best > 0
      ? (ar ? `أحسن نتيجة ليك ${best} والدكتور جاب ${DOCTOR_SCORE}. ناقصك ${DOCTOR_SCORE - best}.` : `Your best is ${best}, the Doctor scored ${DOCTOR_SCORE}. ${DOCTOR_SCORE - best} to go.`)
      : (ar ? `الدكتور جاب ${DOCTOR_SCORE} في دقيقة. لسه ما جربتش؟` : `The Doctor scored ${DOCTOR_SCORE} in one minute. Haven't tried yet?`);
  const days = streak > 1 ? (ar ? ` ${streak} أيام ورا بعض عندنا.` : ` ${streak} days in a row.`) : '';

  function close() { try { localStorage.setItem(HIDE, day()); } catch { /* session only */ } setHidden(true); }
  async function test() {
    setBusy(true); setNote('');
    const ok = await sendTestPush().catch(() => false);
    setNote(ok ? (ar ? 'اتبعت. الإشعار يوصل خلال ثواني.' : 'Sent. It should arrive within seconds.') : (ar ? 'ماتبعتش. استنى شوية وجرّب تاني.' : 'Not sent. Wait a bit and try again.'));
    setBusy(false);
  }
  async function toggle() {
    setBusy(true); setNote('');
    try { setState(state === 'on' ? await disableReminders() : await enableReminders(ar ? 'ar' : 'en')); }
    catch { setNote(ar ? 'ماقدرناش نفعّل التذكير دلوقتي.' : 'Could not turn reminders on right now.'); }
    setBusy(false);
  }

  return (
    <aside className="remind-banner" role="status">
      <p onClick={() => setTaps((n) => n + 1)}><b>{tease}</b>{days}</p>
      <div className="remind-actions">
        <Link className="quiet-button" to="/challenge" onClick={close}>{ar ? 'ابدأ التحدي' : 'Start the challenge'}</Link>
        {(state === 'off' || state === 'on') && (
          <button type="button" className="quiet-button" onClick={toggle} disabled={busy}>
            {state === 'on' ? (ar ? 'وقّف التذكير اليومي' : 'Turn off daily reminder') : (ar ? 'فعّل التذكير اليومي' : 'Enable daily reminder')}
          </button>
        )}
        {testMode && state === 'on' && <button type="button" className="quiet-button" onClick={test} disabled={busy}>{ar ? 'ابعت إشعار تجريبي' : 'Send test notification'}</button>}
        <button type="button" className="quiet-button" onClick={close}>{ar ? 'اخفي' : 'Hide'}</button>
      </div>
      {state === 'needs-install' && <small>{ar ? 'عشان التذكير يشتغل على الآيفون: من زر المشاركة اختار "إضافة إلى الشاشة الرئيسية"، افتح التطبيق من هناك وفعّله.' : 'For reminders on iPhone: tap Share, "Add to Home Screen", open SciLab from there, then enable.'}</small>}
      {state === 'denied' && <small>{ar ? 'الإشعارات مقفولة من إعدادات المتصفح.' : 'Notifications are blocked in your browser settings.'}</small>}
      {note && <small>{note}</small>}
    </aside>
  );
}
