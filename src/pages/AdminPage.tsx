import { useEffect, useState } from 'react';
import { usePreferences } from '../app/PreferencesContext';
import { startGoogle } from '../lib/google';
import { getAdminSession, clearAdminSession, alertState, enableAdminAlerts, disableAdminAlerts, type AlertState } from '../lib/adminSession';

type Row = { nick: string; score: number; correct?: number; games?: number; last_at?: number; month?: string; at?: number };
type Msg = { nick: string; created: number; seen_at: number | null };
type Photo = { nick: string; pub: string; status: string; updated: number; image: string };
type Data = { month: string; thisMonth: Row[]; archive: Row[]; messages?: Msg[] };
const KEY = 'scilab-admin-key';
const fmt = (t?: number) => (t ? new Date(t).toLocaleString() : '');

// Owner-only list of names and scores (for giveaways). Not linked anywhere; the key is the ADMIN_KEY
// secret set in the Cloudflare dashboard and is kept only for this browser tab.
export function AdminPage() {
  const { locale } = usePreferences();
  const ar = locale === 'ar';
  const [key, setKey] = useState(() => { try { return getAdminSession() || (sessionStorage.getItem(KEY) ?? ''); } catch { return ''; } });
  const [data, setData] = useState<Data | null>(null);
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);

  async function load(e?: React.FormEvent) {
    e?.preventDefault(); setBusy(true); setErr('');
    try {
      const res = await fetch('/api/admin/data', { headers: { 'x-admin-key': key } });
      const body = await res.json().catch(() => ({})) as Data & { error?: string };
      if (res.ok && Array.isArray(body.thisMonth) && Array.isArray(body.archive)) { setData(body); try { if (!key.startsWith('gs.')) sessionStorage.setItem(KEY, key); } catch { /* ignored */ } }
      else if (key.startsWith('gs.') && res.status === 403) { clearAdminSession(); setKey(''); setErr(ar ? 'انتهت الجلسة. ادخل بجوجل تاني.' : 'Session expired. Sign in with Google again.'); }
      else setErr(body.error === 'admin_not_configured' ? (ar ? 'المفتاح لسه ما اتضافش في Cloudflare.' : 'The key is not set in Cloudflare yet.') : body.error === 'locked' ? (ar ? 'محاولات كتير. استنى 10 دقايق.' : 'Too many tries. Wait 10 minutes.') : (ar ? 'المفتاح غلط.' : 'Wrong key.'));
    } catch { setErr(ar ? 'مفيش اتصال.' : 'No connection.'); }
    setBusy(false);
  }
  useEffect(() => { if (key.startsWith('gs.')) void load(); }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const [alerts, setAlerts] = useState<AlertState>('off');
  const [alertErr, setAlertErr] = useState('');
  useEffect(() => { if (data) void alertState().then(setAlerts); }, [data]);
  async function toggleAlerts() {
    setAlertErr('');
    try { setAlerts(alerts === 'on' ? await disableAdminAlerts(key) : await enableAdminAlerts(key)); }
    catch { setAlertErr(ar ? 'ماتفعّلش. جرب تاني.' : 'Could not turn on. Try again.'); }
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
  const [chk, setChk] = useState('');
  const [chkRes, setChkRes] = useState('');
  async function checkCode() {
    setChkRes('');
    let res: Response;
    try { res = await fetch('/api/admin/code', { method: 'POST', headers: { 'x-admin-key': key, 'content-type': 'application/json' }, body: JSON.stringify({ code: chk }) }); } catch { setChkRes(ar ? 'مفيش اتصال.' : 'No connection.'); return; }
    if (res.status === 403 || res.status === 429) { guard(res); return; }
    const b = await res.json().catch(() => ({})) as { nick?: string };
    setChkRes(res.ok && b.nick ? (ar ? `الكود ده بتاع: ${b.nick}` : `This code belongs to: ${b.nick}`) : (ar ? 'مفيش حد بالكود ده.' : 'No player has this code.'));
  }
  const [actErr, setActErr] = useState('');
  // Shared check for the small admin calls: an expired session sends the owner back to sign-in, any other failure is shown.
  function guard(res: Response): boolean {
    if (res.ok) { setActErr(''); return true; }
    if (key.startsWith('gs.') && res.status === 403) { clearAdminSession(); setKey(''); setData(null); setErr(ar ? 'انتهت الجلسة. ادخل بجوجل تاني.' : 'Session expired. Sign in with Google again.'); }
    else setActErr(res.status === 429 ? (ar ? 'محاولات كتير. استنى شوية.' : 'Too many tries. Wait a bit.') : (ar ? 'العملية ماتمتش. جرب تاني.' : 'That did not work. Try again.'));
    return false;
  }
  type Opin = { id: number; nick: string; text: string; status: string; created: number };
  const [opins, setOpins] = useState<Opin[]>([]);
  async function loadOpins() {
    try {
      const res = await fetch('/api/admin/opinions', { headers: { 'x-admin-key': key } });
      const b = await res.json().catch(() => ({})) as { opinions?: Opin[] };
      if (guard(res)) setOpins(b.opinions ?? []);
    } catch { setActErr(ar ? 'مفيش اتصال.' : 'No connection.'); }
  }
  async function decideOpin(id: number, action: string) {
    try {
      const res = await fetch('/api/admin/opinion', { method: 'POST', headers: { 'x-admin-key': key, 'content-type': 'application/json' }, body: JSON.stringify({ id, action }) });
      if (!guard(res)) return;
    } catch { setActErr(ar ? 'مفيش اتصال.' : 'No connection.'); return; }
    void loadOpins();
  }
  const [photos, setPhotos] = useState<Photo[]>([]);
  async function loadPhotos() {
    try {
      const res = await fetch('/api/admin/photos', { headers: { 'x-admin-key': key } });
      const b = await res.json().catch(() => ({})) as { photos?: Photo[] };
      if (guard(res)) setPhotos(b.photos ?? []);
    } catch { setActErr(ar ? 'مفيش اتصال.' : 'No connection.'); }
  }
  async function decide(pub: string, action: 'approve' | 'reject' | 'remove') {
    try {
      const res = await fetch('/api/admin/photo', { method: 'POST', headers: { 'x-admin-key': key, 'content-type': 'application/json' }, body: JSON.stringify({ pub, action }) });
      if (!guard(res)) return;
    } catch { setActErr(ar ? 'مفيش اتصال.' : 'No connection.'); return; }
    void loadPhotos();
  }
  useEffect(() => { if (data) { void loadPhotos(); void loadOpins(); } }, [data]); // eslint-disable-line react-hooks/exhaustive-deps
  const copy = (rows: Row[]) => navigator.clipboard?.writeText(rows.map((r, i) => `${i + 1}\t${r.nick}\t${r.score}`).join('\n')).catch(() => undefined);

  return (
    <section className="admin-page">
      <h1>{ar ? 'لوحة المالك' : 'Owner view'}</h1>
      {actErr && <p className="admin-error" role="alert">{actErr}</p>}
      {!data && (
        <form className="admin-login" onSubmit={load}>
          <input type="password" value={key} onChange={(e) => setKey(e.target.value)} placeholder={ar ? 'المفتاح السري' : 'Secret key'} autoComplete="off" />
          <button className="button button-primary" disabled={busy || key.length < 8}>{ar ? 'دخول' : 'Open'}</button>
          {err && <small>{err}</small>}
          <button type="button" className="button" disabled={busy} onClick={() => void startGoogle('admin')}>{ar ? 'دخول بحساب جوجل (المالك)' : 'Sign in with Google (owner)'}</button>
        </form>
      )}
      {data && (
        <>
          <div className="admin-msg">
            <b>{ar ? 'إشعارات المالك على الجهاز ده' : 'Owner alerts on this device'}</b>
            <p>{ar ? 'بتوصلك إشعارات لما حد يكسر رقم قياسي، أو يسجل مستخدم جديد، أو يوصل رأي أو صورة محتاجة موافقتك. للجهاز ده بس.' : 'You get a notification when a record is broken, a new user registers, or an opinion or photo needs your approval. This device only.'}</p>
            {alerts === 'needs-install' && <p>{ar ? 'على الآيفون لازم تثبّت الموقع على الشاشة الرئيسية الأول.' : 'On iPhone, add the site to the home screen first.'}</p>}
            {alerts === 'unsupported' && <p>{ar ? 'المتصفح ده مش بيدعم الإشعارات.' : 'This browser does not support notifications.'}</p>}
            {alerts === 'denied' && <p>{ar ? 'الإشعارات متقفلة من إعدادات المتصفح.' : 'Notifications are blocked in the browser settings.'}</p>}
            {(alerts === 'on' || alerts === 'off') && <button className="button" onClick={() => void toggleAlerts()}>{alerts === 'on' ? (ar ? 'وقّف الإشعارات' : 'Turn off') : (ar ? 'فعّل الإشعارات' : 'Turn on')}</button>}
            {alertErr && <small> {alertErr}</small>}
          </div>
          {to && (
            <div className="admin-msg">
              <b>{ar ? `رسالة خاصة لـ ${to}` : `Private message to ${to}`}</b>
              <textarea value={text} maxLength={400} onChange={(e) => setText(e.target.value)} placeholder={ar ? 'مثلاً: كود الجائزة ... أو كلمني على ...' : 'e.g. your prize code ... or contact me at ...'} />
              <div><button className="button button-primary" onClick={send} disabled={busy || !text.trim()}>{ar ? 'ابعت' : 'Send'}</button> <button className="quiet-button" onClick={() => setTo(null)}>{ar ? 'إلغاء' : 'Cancel'}</button></div>
            </div>
          )}
          {result && <p>{result}</p>}
          <div className="admin-msg">
            <b>{ar ? 'تأكد من كود فايز' : 'Check a winner\'s code'}</b>
            <input value={chk} onChange={(e) => setChk(e.target.value)} placeholder="ABCDE-FGHIJ" dir="ltr" autoComplete="off" />
            <div><button className="button" onClick={checkCode} disabled={chk.replace(/[^A-Za-z0-9]/g, '').length < 10}>{ar ? 'اعرف الاسم' : 'Find name'}</button> {chkRes}</div>
          </div>
          <h2>{ar ? 'آراء الطلبة' : 'Student opinions'} <button className="quiet-button" onClick={() => void loadOpins()}>{ar ? 'تحديث' : 'Refresh'}</button></h2>
          {opins.length === 0 && <p>{ar ? 'مفيش آراء.' : 'No opinions.'}</p>}
          {opins.map((o) => (
            <div key={o.id} className="admin-msg">
              <b>{o.nick}</b> <small>{o.status === 'pending' ? (ar ? 'منتظر موافقتك' : 'waiting for you') : (ar ? 'معروض' : 'shown')}</small>
              <p>{o.text}</p>
              <div>
                {o.status === 'pending' && <button className="button" onClick={() => void decideOpin(o.id, 'approve')}>{ar ? 'وافق' : 'Approve'}</button>}
                <button className="quiet-button" onClick={() => void decideOpin(o.id, o.status === 'pending' ? 'reject' : 'remove')}>{o.status === 'pending' ? (ar ? 'ارفض' : 'Reject') : (ar ? 'شيل' : 'Remove')}</button>
              </div>
            </div>
          ))}
          <h2>{ar ? 'صور اللاعبين' : 'Player photos'} <button className="quiet-button" onClick={() => void loadPhotos()}>{ar ? 'تحديث' : 'Refresh'}</button></h2>
          {photos.length === 0 && <p>{ar ? 'مفيش صور.' : 'No photos.'}</p>}
          <div className="admin-photos">
            {photos.map((p) => (
              <div key={p.pub} className="admin-photo">
                <img src={p.image} width={96} height={96} alt="" />
                <b>{p.nick}</b>
                <small>{p.status === 'pending' ? (ar ? 'منتظرة موافقتك' : 'waiting for you') : (ar ? 'موافق عليها' : 'approved')}</small>
                <div>
                  {p.status === 'pending' && <button className="button" onClick={() => void decide(p.pub, 'approve')}>{ar ? 'وافق' : 'Approve'}</button>}
                  <button className="quiet-button" onClick={() => void decide(p.pub, p.status === 'pending' ? 'reject' : 'remove')}>{p.status === 'pending' ? (ar ? 'ارفض' : 'Reject') : (ar ? 'شيل' : 'Remove')}</button>
                </div>
              </div>
            ))}
          </div>
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
