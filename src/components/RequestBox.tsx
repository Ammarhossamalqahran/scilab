import { FormEvent, useState } from 'react';
import { usePreferences } from '../app/PreferencesContext';

// Web3Forms public access key. Replace with the real key (it is safe to publish).
const ACCESS_KEY = 'REPLACE_WITH_WEB3FORMS_KEY';

export function RequestBox() {
  const { locale } = usePreferences();
  const isArabic = locale === 'ar';
  const [text, setText] = useState('');
  const [kind, setKind] = useState('specimen');
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const ready = !ACCESS_KEY.startsWith('REPLACE');

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (!text.trim() || !ready) return;
    setState('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: ACCESS_KEY, subject: `SciLab request (${kind})`, kind, request: text.trim() }),
      });
      const data = await res.json();
      setState(data.success ? 'sent' : 'error');
      if (data.success) setText('');
    } catch {
      setState('error');
    }
  }

  return (
    <section className="contact-section" aria-labelledby="request-title">
      <div className="eyebrow eyebrow-muted">{isArabic ? 'اطلب' : 'REQUEST'}</div>
      <h2 id="request-title">{isArabic ? 'عايز رسمة أو عينة مش موجودة؟' : 'Missing a drawing or specimen?'}</h2>
      <p>{isArabic ? 'اكتب اسمها هنا. بنراجع الطلب ونضيفها لو كانت علمية وصورتها بترخيص حر.' : 'Write its name here. We review each request and add it if it is academic and a freely licensed image exists.'}</p>
      <form onSubmit={submit} className="request-form" style={{ display: 'grid', gap: 8, maxWidth: 520 }}>
        <select value={kind} onChange={(e) => setKind(e.target.value)} aria-label={isArabic ? 'النوع' : 'Type'}>
          <option value="specimen">{isArabic ? 'عينة' : 'Specimen'}</option>
          <option value="schema">{isArabic ? 'رسمة schema' : 'Schema drawing'}</option>
        </select>
        <textarea value={text} onChange={(e) => setText(e.target.value)} maxLength={500} rows={3} required placeholder={isArabic ? 'مثال: قطاع في الكبد' : 'e.g. Liver section'} />
        <button type="submit" disabled={state === 'sending' || !ready}>{isArabic ? 'ابعت الطلب' : 'Send request'}</button>
        {!ready && <small>{isArabic ? 'الخانة لسه متفعلتش.' : 'The request box is not active yet.'}</small>}
        {state === 'sent' && <small>{isArabic ? 'تم الإرسال، شكراً.' : 'Sent, thank you.'}</small>}
        {state === 'error' && <small>{isArabic ? 'حصل خطأ، جرّب تاني.' : 'Something went wrong, try again.'}</small>}
      </form>
    </section>
  );
}
