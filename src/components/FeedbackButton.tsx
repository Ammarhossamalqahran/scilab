import { FormEvent, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { usePreferences } from '../app/PreferencesContext';
import { secondsToWait, markSent } from '../lib/formGuard';

// Same Web3Forms public key as the request box: messages arrive in the owner's inbox.
const ACCESS_KEY = 'c3456be1-ce28-4f41-8c5a-0aa6f32f9f21';

export function FeedbackButton() {
  const { locale } = usePreferences();
  const ar = locale === 'ar';
  const { pathname, search } = useLocation();
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  const [contact, setContact] = useState('');
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error' | 'wait'>('idle');
  const [trap, setTrap] = useState('');

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (!text.trim()) return;
    if (trap) { setState('sent'); setText(''); return; }
    if (state === 'sending') return;
    if (secondsToWait() > 0) { setState('wait'); return; }
    setState('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: ACCESS_KEY, subject: 'SciLab feedback', kind: 'feedback', page: pathname + search, message: text.trim(), contact: contact.trim() || 'not given' }),
      });
      const data = await res.json();
      setState(data.success ? 'sent' : 'error');
      if (data.success) { setText(''); setContact(''); markSent(); }
    } catch {
      setState('error');
    }
  }

  return (
    <>
      <button type="button" className="feedback-fab" onClick={() => { setOpen(true); setState('idle'); }} aria-haspopup="dialog">
        {ar ? 'ابعت ملاحظة' : 'Send feedback'}
      </button>
      {open && (
        <div className="feedback-backdrop" onClick={() => setOpen(false)}>
          <form className="feedback-dialog" role="dialog" aria-modal="true" aria-labelledby="feedback-title" onClick={(e) => e.stopPropagation()} onSubmit={submit}>
            <h2 id="feedback-title">{ar ? 'ابعت ملاحظة' : 'Send feedback'}</h2>
            <p>{ar ? 'لقيت غلطة أو عندك اقتراح؟ اكتبه هنا وهيوصل لصاحب الموقع.' : 'Found a mistake or have an idea? Write it here and it goes to the site owner.'}</p>
            <textarea value={text} onChange={(e) => setText(e.target.value)} maxLength={1000} rows={4} required placeholder={ar ? 'ملاحظتك' : 'Your message'} />
            <input value={contact} onChange={(e) => setContact(e.target.value)} maxLength={120} placeholder={ar ? 'إيميل أو رقم للرد (اختياري)' : 'Email or number to reply (optional)'} />
            <input type="text" name="website" value={trap} onChange={(e) => setTrap(e.target.value)} tabIndex={-1} autoComplete="off" aria-hidden="true" className="hp-field" />
            {state === 'wait' && <small role="status">{ar ? 'استنى نص دقيقة بين كل رسالة والتانية.' : 'Please wait 30 seconds between messages.'}</small>}
            {state === 'sent' && <small role="status">{ar ? 'شكراً! وصلتنا ملاحظتك.' : 'Thank you! Your feedback was received.'}</small>}
            {state === 'error' && <small role="alert">{ar ? 'حصل خطأ، جرّب تاني.' : 'Something went wrong, try again.'}</small>}
            <div className="feedback-actions">
              <button type="submit" className="button button-primary" disabled={state === 'sending'}>{ar ? 'ابعت' : 'Send'}</button>
              <button type="button" className="button button-outline" onClick={() => setOpen(false)}>{ar ? 'إغلاق' : 'Close'}</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
