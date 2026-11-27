import { useEffect, useState } from 'react';
import { usePreferences } from '../app/PreferencesContext';
import { Avatar } from '../data/avatars';
import { playerId, photoUrl, savedNick } from '../lib/leaderboardApi';

type Opinion = { text: string; at: number; nick: string; avatar: string | null; photo: string | null };
const MAX = 300;
const MIN = 10;

export function StudentOpinions() {
  const { locale } = usePreferences();
  const ar = locale === 'ar';
  const [list, setList] = useState<Opinion[]>([]);
  const [mine, setMine] = useState('none');
  const [text, setText] = useState('');
  const [msg, setMsg] = useState('');
  const [busy, setBusy] = useState(false);
  const nick = savedNick();

  useEffect(() => {
    fetch('/api/opinions').then((r) => r.json()).then((d: { opinions?: Opinion[] }) => setList(d.opinions ?? [])).catch(() => undefined);
    if (nick) fetch(`/api/opinion/mine?player=${playerId()}`).then((r) => r.json()).then((d: { status?: string }) => setMine(d.status ?? 'none')).catch(() => undefined);
  }, [nick]);

  async function send() {
    setBusy(true); setMsg('');
    try {
      const res = await fetch('/api/opinion', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ player: playerId(), text }) });
      const d = await res.json().catch(() => ({})) as { error?: string };
      if (res.ok) { setMine('pending'); setText(''); }
      else if (d.error === 'no_profile') setMsg(ar ? 'سجّل اسمك الأول من زرار الحساب أو من التحدي.' : 'Set your name first from the profile button or the challenge.');
      else if (d.error === 'already_pending') { setMine('pending'); setMsg(ar ? 'عندك رأي منتظر المراجعة.' : 'You already have an opinion waiting for review.'); }
      else if (d.error === 'rate_limited') setMsg(ar ? 'حاولت كتير. جرّب بعد شوية.' : 'Too many tries. Try again later.');
      else if (d.error === 'bad_text') setMsg(ar ? `اكتب من ${MIN} لـ ${MAX} حرف، من غير لينكات.` : `Write ${MIN} to ${MAX} characters, no links.`);
      else setMsg(ar ? 'حصلت مشكلة. جرّب تاني.' : 'Something went wrong. Try again.');
    } catch { setMsg(ar ? 'مفيش اتصال.' : 'No connection.'); }
    setBusy(false);
  }

  return (
    <section className="student-section" aria-labelledby="student-title">
      <div className="eyebrow eyebrow-muted">{ar ? 'الطلبة' : 'STUDENTS'}</div>
      <h2 id="student-title">{ar ? 'آراء الطلبة' : 'Student opinions'}</h2>
      {list.length === 0 && <p className="student-empty">{ar ? 'لسه مفيش آراء معروضة. كن أول واحد.' : 'No opinions shown yet. Be the first.'}</p>}
      <div className="student-list">
        {list.map((o, i) => (
          <figure key={`${o.nick}-${o.at}-${i}`} className="student-quote">
            <blockquote>{o.text}</blockquote>
            <figcaption><Avatar id={o.avatar} photo={photoUrl(o.photo)} size={28} className="lb-avatar" /><b>{o.nick}</b></figcaption>
          </figure>
        ))}
      </div>
      <div className="student-form">
        <h3>{ar ? 'اكتب رأيك' : 'Share your opinion'}</h3>
        {!nick ? <p>{ar ? 'سجّل اسمك الأول (زرار الحساب فوق) عشان تكتب رأي.' : 'Set your name first (profile button above) to write an opinion.'}</p>
          : mine === 'pending' ? <p>{ar ? 'رأيك وصل وبيتراجع. هيظهر هنا بعد موافقة صاحب الموقع.' : 'Your opinion was sent and is being reviewed. It shows here after the owner approves it.'}</p>
          : (
            <>
              <textarea value={text} onChange={(e) => setText(e.target.value.slice(0, MAX))} rows={3} maxLength={MAX} placeholder={ar ? 'رأيك في الموقع...' : 'Your opinion of the site...'} />
              <small>{text.length} / {MAX} · {ar ? 'بيظهر اسمك وصورتك (لو اتوافق عليها) بعد المراجعة. الإيميل مش بيظهر.' : 'Your name and photo (if approved) show after review. Email is never shown.'}</small>
              <div><button type="button" className="button" onClick={() => void send()} disabled={busy || text.trim().length < MIN}>{ar ? 'ابعت للمراجعة' : 'Send for review'}</button></div>
            </>
          )}
        {msg && <p role="status">{msg}</p>}
      </div>
    </section>
  );
}
