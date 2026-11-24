import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { usePreferences } from '../app/PreferencesContext';
import { specimens } from '../data/scientificData';
import { diagrams } from '../data/diagramData';

const STOP = new Set(['section', 'slide', 'specimen', 'schema', 'drawing', 'cross', 'longitudinal', 'of', 'the', 'in', 'a', 'where', 'is', 'are', 'there', 'do', 'you', 'have', 'find', 'فين', 'فيين', 'موجود', 'موجوده', 'هي', 'هو', 'هل', 'ازاي', 'عايز', 'عاوز', 'اطلب', 'ابي', 'قطاع', 'شريحه', 'شريحة', 'عينة', 'رسمة', 'في', 'عرضي', 'طولي', 'من']);

function norm(v: string) {
  return v.toLowerCase().replace(/[ً-ْـ]/g, '').replace(/[أإآ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي').replace(/(.)\1+/g, '$1');
}
function split(v: string) {
  return norm(v).split(/[^a-z؀-ۿ0-9]+/).map((t) => t.replace(/^ال/, ''));
}

type Hit = { key: string; to: string; label: string };

function findMatches(query: string, kind: string): Hit[] {
  const q = split(query).filter((t) => t.length > 1 && !STOP.has(t));
  if (!q.length) return [];
  const ok = (words: string[]) => q.every((t) => words.some((w) => w === t || (t.length > 3 && w.length > 3 && (w.startsWith(t) || t.startsWith(w)))));
  const hits: Hit[] = [];
  if (kind === 'specimen') {
    for (const s of specimens) {
      if (ok(split(`${s.title.en} ${s.title.ar} ${s.id.replace(/-/g, ' ')}`))) hits.push({ key: s.id, to: `/microscope?slide=${s.id}`, label: `${s.title.ar} / ${s.title.en}` });
    }
  } else {
    for (const d of diagrams) {
      if (ok(split(`${d.title.en} ${d.title.ar} ${d.id.replace(/-/g, ' ')}`))) hits.push({ key: d.id, to: `/schemas/${d.id}`, label: `${d.title.ar} / ${d.title.en}` });
    }
  }
  return hits.slice(0, 5);
}

// Web3Forms public access key. Replace with the real key (it is safe to publish).
const ACCESS_KEY = 'c3456be1-ce28-4f41-8c5a-0aa6f32f9f21';

export function RequestBox() {
  const { locale } = usePreferences();
  const isArabic = locale === 'ar';
  const [text, setText] = useState('');
  const [kind, setKind] = useState('specimen');
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error' | 'found'>('idle');
  const [hits, setHits] = useState<Hit[]>([]);
  const ready = !ACCESS_KEY.startsWith('REPLACE');

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (!text.trim() || !ready) return;
    const found = findMatches(text, kind);
    if (found.length) {
      setHits(found);
      setState('found');
      return;
    }
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
        {state === 'found' && (
          <div role="status">
            <small>{isArabic ? 'موجود عندنا بالفعل، اضغط على الاسم عشان تفتحه:' : 'We already have this. Click a name to open it:'}</small>
            <ul>{hits.map((h) => <li key={h.key}><Link to={h.to}>{h.label}</Link></li>)}</ul>
          </div>
        )}
        {state === 'sent' && <small>{isArabic ? 'شكراً لمساهمتك في تطوير الموقع! وصل طلبك وهنراجعه ونضيفه لو مناسب.' : 'Thank you for helping improve the website! Your request was received and we will review it.'}</small>}
        {state === 'error' && <small>{isArabic ? 'حصل خطأ، جرّب تاني.' : 'Something went wrong, try again.'}</small>}
      </form>
    </section>
  );
}
