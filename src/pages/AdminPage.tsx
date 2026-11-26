import { useState } from 'react';
import { usePreferences } from '../app/PreferencesContext';

type Row = { nick: string; score: number; correct?: number; games?: number; last_at?: number; month?: string; at?: number };
type Msg = { nick: string; created: number; seen_at: number | null };
type Data = { month: string; thisMonth: Row[]; archive: Row[]; messages?: Msg[] };
const KEY = 'scilab-admin-key';
const fmt = (t?: number) => (t ? new Date(t).toLocaleString() : '');

// Owner-only list of names and scores (for giveaways). Not linked anywhere; the key is the ADMIN_KEY
// secret set in the Cloudflare dashboard and is kept only for this browser tab.
export function AdminPage() {
  const { locale } = usePreferences();
  const ar = locale === 'ar';
  const [key, setKey] = useState(() => { try { return sessionStorage.getItem(KEY) ?? ''; } catch { return ''; } });
  const [data, setData] = useState<Data | null>(null);
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);

  async function load(e?: React.FormEvent) {
    e?.preventDefault(); setBusy(true); setErr('');
    try {
      const res = await fetch('/api/admin/data', { headers: { 'x-admin-key': key } });
      const body = await res.json().catch(() => ({})) as Data & { error?: string };
      if (res.ok) { setData(body); try { sessionStorage.setItem(KEY, key); } catch { /* ignored */ } }
      else setErr(body.error === 'admin_not_configured' ? (ar ? 'المفتاح لسه ما اتضافش في Cloudflare.' : 'The key is not set in Cloudflare yet.') : body.error === 'locked' ? (ar ? 'محاولات كتير. استنى 10 دقايق.' : 'Too many tries. Wait 10 minutes.') : (ar ? 'المفتاح غلط.' : 'Wrong key.'));
    } catch { setErr(ar ? 'مفيش اتصال.' : 'No connection.'); }
    setBusy(false);
  }
  const [to, setTo] = useState<string | null>(null);
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  async function send() {
    if (!to) return;
    setBusy(true); setResult('');
    try {
      const res = await fetch('/api/admin/winner', { method: 'POST', headers: { 'x-admin-key': key, 'content-type': 'application/json' }, body: JSON.stringify({ nick: to, message: text }) });
      const body = await res.json().catch(() => ({})) as { push?: string; error?: string };
      if (res.ok) { setResult(ar ? `اتحفظت لـ ${to}. ${body.push === 'sent' ? 'واتبعتله إشعار.' : 'مفيش إشعار (مش مفعّل). هتظهرله لما يفتح الموقع.'}` : `Saved for ${to}. ${body.push === 'sent' ? 'Push sent.' : 'No push (not enabled). Shown when they open the site.'}`); setTo(null); setText(''); void load(); }
      else setResult(body.error === 'no_such_player' ? (ar ? 'الاسم مش موجود.' : 'No such player.') : (ar ? 'ماتبعتش.' : 'Not sent.'));
    } catch { setResult(ar ? 'مفيش اتصال.' : 'No connection.'); }
    setBusy(false);
  }
  const msgBtn = (nick: string) => <button className="quiet-button" onClick={() => { setTo(nick); setResult(''); }}>{ar ? 'رسالة فائز' : 'Winner message'}</button>;
  const copy = (rows: Row[]) => navigator.clipboard?.writeText(rows.map((r, i) => `${i + 1}\t${r.nick}\t${r.score}`).join('\n')).catch(() => undefined);

  return (
    <section className="admin-page">
      <h1>{ar ? 'لوحة المالك' : 'Owner view'}</h1>
      {!data && (
        <form className="admin-login" onSubmit={load}>
          <input type="password" value={key} onChange={(e) => setKey(e.target.value)} placeholder={ar ? 'المفتاح السري' : 'Secret key'} autoComplete="off" />
          <button className="button button-primary" disabled={busy || key.length < 8}>{ar ? 'دخول' : 'Open'}</button>
          {err && <small>{err}</small>}
        </form>
      )}
      {data && (
        <>
          {to && (
            <div className="admin-msg">
              <b>{ar ? `رسالة خاصة لـ ${to}` : `Private message to ${to}`}</b>
              <textarea value={text} maxLength={400} onChange={(e) => setText(e.target.value)} placeholder={ar ? 'مثلاً: كود الجائزة ... أو كلمني على ...' : 'e.g. your prize code ... or contact me at ...'} />
              <div><button className="button button-primary" onClick={send} disabled={busy || !text.trim()}>{ar ? 'ابعت' : 'Send'}</button> <button className="quiet-button" onClick={() => setTo(null)}>{ar ? 'إلغاء' : 'Cancel'}</button></div>
            </div>
          )}
          {result && <p>{result}</p>}
          <h2>{ar ? `الشهر الحالي (${data.month})` : `This month (${data.month})`} <button className="quiet-button" onClick={() => copy(data.thisMonth)}>{ar ? 'نسخ' : 'Copy'}</button> <button className="quiet-button" onClick={() => void load()}>{ar ? 'تحديث' : 'Refresh'}</button></h2>
          <table className="admin-table"><thead><tr><th>#</th><th>{ar ? 'الاسم' : 'Name'}</th><th>{ar ? 'أحسن نتيجة' : 'Best'}</th><th>{ar ? 'ألعاب' : 'Games'}</th><th>{ar ? 'آخر لعب' : 'Last played'}</th><th /></tr></thead>
            <tbody>{data.thisMonth.map((r, i) => <tr key={`${r.nick}-${i}`}><td>{i + 1}</td><td>{r.nick}</td><td>{r.score}</td><td>{r.games}</td><td>{fmt(r.last_at)}</td><td>{msgBtn(r.nick)}</td></tr>)}</tbody></table>
          {data.thisMonth.length === 0 && <p>{ar ? 'مفيش نتايج لسه.' : 'No scores yet.'}</p>}
          <h2>{ar ? 'أرشيف الشهور اللي فاتت (أعلى 50)' : 'Past months (top 50)'}</h2>
          <table className="admin-table"><thead><tr><th>{ar ? 'الشهر' : 'Month'}</th><th>{ar ? 'الاسم' : 'Name'}</th><th>{ar ? 'النتيجة' : 'Score'}</th><th /></tr></thead>
            <tbody>{data.archive.map((r, i) => <tr key={i}><td>{r.month}</td><td>{r.nick}</td><td>{r.score}</td><td>{msgBtn(r.nick)}</td></tr>)}</tbody></table>
          {data.archive.length === 0 && <p>{ar ? 'الأرشيف فاضي لحد أول مسح شهري.' : 'Empty until the first monthly wipe.'}</p>}
          {(data.messages?.length ?? 0) > 0 && (
            <>
              <h2>{ar ? 'الرسائل اللي اتبعتت' : 'Sent messages'}</h2>
              <table className="admin-table"><thead><tr><th>{ar ? 'الاسم' : 'Name'}</th><th>{ar ? 'اتبعتت' : 'Sent'}</th><th>{ar ? 'اتشافت' : 'Seen'}</th></tr></thead>
                <tbody>{data.messages!.map((m, i) => <tr key={i}><td>{m.nick}</td><td>{fmt(m.created)}</td><td>{m.seen_at ? fmt(m.seen_at) : (ar ? 'لسه' : 'not yet')}</td></tr>)}</tbody></table>
            </>
          )}
        </>
      )}
    </section>
  );
}
