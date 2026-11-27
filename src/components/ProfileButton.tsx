import { useEffect, useState } from 'react';
import { usePreferences } from '../app/PreferencesContext';
import { Avatar, AVATARS, DEFAULT_AVATAR } from '../data/avatars';
import { FramedAvatar } from './FramedAvatar';
import { FRAMES, earnedFrames, selectedFrame, selectFrame, readVisits } from '../data/frames';
import { readStats } from '../data/gameStats';
import { createCode, savedAvatar, savedCode, savedNick, saveAvatar, saveNick, updateProfile, savedPhoto, refreshPhoto, removePhoto } from '../lib/leaderboardApi';
import { PhotoPicker } from './PhotoPicker';
import { GoogleButton } from './GoogleButton';
import { googleClientId, googleLinked, unlinkGoogle } from '../lib/google';

// Profile icon in the top bar. Tapping it opens the profile: name, character, scores, personal code,
// language and theme.
export function ProfileButton() {
  const { locale, setLocale, theme, toggleTheme } = usePreferences();
  const ar = locale === 'ar';
  const [open, setOpen] = useState(false);
  const [, bump] = useState(0);
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');
  const [picking, setPicking] = useState(false);
  const [copied, setCopied] = useState(false);
  const [busy, setBusy] = useState(false);
  const [gOn, setGOn] = useState(false);      // site has a Google Client ID
  const [gLinked, setGLinked] = useState(false);

  useEffect(() => {
    const on = () => bump((n) => n + 1);
    window.addEventListener('scilab-profile-changed', on);
    return () => window.removeEventListener('scilab-profile-changed', on);
  }, []);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const nick = savedNick();
  const avatar = savedAvatar() || DEFAULT_AVATAR;
  const [frameId, setFrameId] = useState(selectedFrame());
  const [, setTick] = useState(0);
  useEffect(() => { const on = () => { setFrameId(selectedFrame()); setTick((n) => n + 1); }; window.addEventListener('scilab-frame', on); return () => window.removeEventListener('scilab-frame', on); }, []);
  // Tell the server which frame this player wears, so others see it on the leaderboard. Only a frame that is really in use is sent.
  useEffect(() => {
    try {
      if (!savedNick() || window.localStorage.getItem('scilab-frame') !== frameId || window.localStorage.getItem('scilab-frame-synced') === frameId) return;
      void updateProfile({ frame: frameId }).then((r) => { if (r.ok) window.localStorage.setItem('scilab-frame-synced', frameId); });
    } catch { /* ignored */ }
  }, [frameId]);
  const earned = earnedFrames();
  const visits = readVisits();
  const stats = readStats();
  const code = savedCode();
  const photo = savedPhoto();
  const shown = photo?.image || null;

  useEffect(() => { if (nick) void refreshPhoto(); }, [nick, open]);
  useEffect(() => {
    if (!open || !nick) return;
    void googleClientId().then((id) => { setGOn(!!id); if (id) void googleLinked().then(setGLinked); });
  }, [open, nick]);
  function show() { setName(nick); setMsg(''); setPicking(false); setCopied(false); setOpen(true); }
  async function saveName() {
    const clean = name.trim().replace(/\s+/g, ' ');
    if (clean === nick) return;
    setBusy(true); setMsg('');
    const r = await updateProfile({ nick: clean });
    setBusy(false);
    if (r.ok) { saveNick(r.nick); setMsg(ar ? 'اتحفظ.' : 'Saved.'); }
    else setMsg(r.reason === 'nick_taken' ? (ar ? 'الاسم ده مأخوذ.' : 'That name is taken.') : r.reason === 'bad_nick' ? (ar ? 'الاسم لازم 2 لـ 16 حرف أو رقم.' : 'Use 2 to 16 letters or numbers.') : r.reason === 'no_profile' ? (ar ? 'اعمل حساب الأول.' : 'Sign in first.') : (ar ? 'ماقدرناش نحفظ. جرب تاني.' : 'Could not save. Try again.'));
  }
  async function pickAvatar(id: string) {
    saveAvatar(id); setPicking(false);
    if (nick) void updateProfile({ avatar: id });
  }
  async function newCode() {
    setBusy(true); setMsg('');
    const r = await createCode(nick, avatar);
    setBusy(false);
    if (!r.ok) setMsg(ar ? 'ماقدرناش نعمل كود جديد.' : 'Could not make a new code.');
  }
  async function copy() { try { await navigator.clipboard.writeText(code); setCopied(true); } catch { /* select by hand */ } }

  return (
    <>
      <button type="button" className="profile-btn" onClick={show} aria-label={ar ? 'البروفايل' : 'Profile'} title={ar ? 'البروفايل' : 'Profile'}>
        <FramedAvatar frame={frameId} id={avatar} photo={shown} size={44} full />
      </button>
      {open && (
        <div className="welcome-backdrop" role="dialog" aria-modal="true" aria-labelledby="profile-title" onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}>
          <div className="welcome-card profile-card">
            <button type="button" className="welcome-lang" onClick={() => setOpen(false)} aria-label={ar ? 'إغلاق' : 'Close'}>×</button>
            <div className="welcome-body">
              <button type="button" className="profile-btn" style={{ justifySelf: 'center' }} onClick={() => setPicking((v) => !v)} aria-label={ar ? 'غيّر الشخصية' : 'Change character'}><FramedAvatar frame={frameId} id={avatar} photo={shown} size={96} /></button>
              <h2 id="profile-title">{nick || (ar ? 'ضيف' : 'Guest')}</h2>
              {picking && (
                <div className="avatar-grid">
                  {AVATARS.map((a) => (
                    <button type="button" key={a.id} className={`avatar-pick${avatar === a.id ? ' is-picked' : ''}`} onClick={() => void pickAvatar(a.id)}><Avatar id={a.id} size={44} /><span>{a.label[ar ? 'ar' : 'en']}</span></button>
                  ))}
                </div>
              )}
              <div className="frame-section">
                <b>{ar ? 'الإطارات' : 'Frames'}</b>
                <small>{ar ? `زيارات ورا بعض: ${visits.streak} يوم. ادخل كل يوم عشان تفتح إطارات جديدة.` : `Visit streak: ${visits.streak} day${visits.streak === 1 ? '' : 's'}. Come back every day to unlock frames.`}</small>
                <div className="frame-sizes" aria-label={ar ? 'شكل الإطار بأحجام مختلفة' : 'Frame at different sizes'}>
                  <FramedAvatar frame={frameId} id={avatar} size={56} /><FramedAvatar frame={frameId} id={avatar} size={44} full /><FramedAvatar frame={frameId} id={avatar} size={26} full />
                </div>
                <div className="frame-grid">
                  {FRAMES.map((f) => {
                    const ok = earned.has(f.id);
                    return (
                      <button type="button" key={f.id} className={`frame-pick${frameId === f.id ? ' is-picked' : ''}${ok ? '' : ' is-locked'}`} disabled={!ok} onClick={() => selectFrame(f.id)}>
                        <span style={{ opacity: ok ? 1 : 0.4 }}><FramedAvatar frame={f.id} id={avatar} size={56} /></span>
                        <span>{f.name[ar ? 'ar' : 'en']}</span>
                        <small>{ok ? (frameId === f.id ? (ar ? 'مستخدم' : 'In use') : (ar ? 'اضغط للاستخدام' : 'Tap to use')) : f.soon ? (ar ? `قريبا: ${f.how.ar}` : `Soon: ${f.how.en}`) : f.how[ar ? 'ar' : 'en']}</small>
                      </button>
                    );
                  })}
                </div>
              </div>
              {nick && photo?.status === 'pending' && <small className="winner-note">{ar ? 'صورتك ظاهرة ليك بس. هتظهر للناس بعد موافقة صاحب الموقع.' : 'Only you can see your photo for now. It shows to others after the owner approves it.'}</small>}
              {nick && photo?.status === 'approved' && <small className="winner-note">{ar ? 'صورتك اتوافق عليها وظاهرة في الترتيب.' : 'Your photo is approved and shows on the leaderboard.'}</small>}
              {nick && photo?.status === 'rejected' && <small className="winner-note">{ar ? 'الصورة ماتوافقش عليها. تقدر ترفع صورة تانية أو تختار شخصية.' : 'Your photo was not approved. Upload another or pick a character.'}</small>}
              {nick && (
                <div className="profile-row">
                  <PhotoPicker label={shown ? (ar ? 'غيّر الصورة' : 'Change photo') : (ar ? 'ارفع صورة' : 'Upload a photo')} onDone={() => setMsg('')} />
                  {photo && photo.status !== 'rejected' && <button type="button" className="quiet-button" onClick={() => void removePhoto()}>{ar ? 'امسح الصورة' : 'Remove photo'}</button>}
                </div>
              )}
              {nick ? (
                <>
                  <div className="profile-row">
                    <input value={name} maxLength={16} onChange={(e) => { setName(e.target.value); setMsg(''); }} aria-label={ar ? 'اسمك' : 'Your name'} />
                    <button type="button" className="button" onClick={saveName} disabled={busy || name.trim().length < 2 || name.trim() === nick}>{ar ? 'احفظ الاسم' : 'Save name'}</button>
                  </div>
                  <div className="profile-stat"><span>{ar ? 'أحسن نتيجة' : 'Best score'}</span><b>{stats.best}</b></div>
                  <div className="profile-stat"><span>{ar ? 'عدد التحديات' : 'Challenges played'}</span><b>{stats.games}</b></div>
                  <div className="profile-stat"><span>{ar ? 'كودك الشخصي' : 'Personal code'}</span><b dir="ltr">{code || (ar ? 'غير محفوظ على الجهاز' : 'not on this device')}</b></div>
                  <div className="profile-row">
                    {code && <button type="button" className="button" onClick={copy}>{copied ? (ar ? 'اتنسخ' : 'Copied') : (ar ? 'انسخ الكود' : 'Copy code')}</button>}
                    <button type="button" className="quiet-button" onClick={newCode} disabled={busy}>{ar ? 'كود جديد' : 'New code'}</button>
                  </div>
                  {gOn && (
                    <div className="profile-google">
                      <span>{ar ? 'حساب جوجل (اختياري)' : 'Google account (optional)'}</span>
                      {gLinked
                        ? <div className="profile-row"><b>{ar ? 'مربوط' : 'Linked'}</b><button type="button" className="quiet-button" onClick={() => void unlinkGoogle().then((ok) => ok && setGLinked(false))}>{ar ? 'فك الربط' : 'Unlink'}</button></div>
                        : <GoogleButton mode="link" />}
                      <small className="winner-note">{ar ? 'بنحفظ بصمة مشفرة لمعرّف حسابك بس، من غير إيميل أو اسم. بتفيدك تدخل من أي جهاز.' : 'We keep only a hashed account id, no email or name. It lets you sign in from any device.'}</small>
                    </div>
                  )}
                  <small className="winner-note">{ar ? 'الكود بينقل اسمك ونتايجك لجهاز تاني. كود جديد بيلغي القديم.' : 'The code moves your name and scores to another device. A new code replaces the old one.'}</small>
                </>
              ) : (
                <>
                  <p>{ar ? 'لسه ما سجلتش اسمك.' : 'You have not set a name yet.'}</p>
                  <button type="button" className="button button-primary welcome-go" onClick={() => { setOpen(false); window.dispatchEvent(new Event('scilab-open-welcome')); }}>{ar ? 'سجّل اسمك' : 'Set your name'}</button>
                </>
              )}
              {msg && <small>{msg}</small>}
              <div className="profile-row">
                <button type="button" className="quiet-button" onClick={() => setLocale(ar ? 'en' : 'ar')}>{ar ? 'English' : 'عربي'}</button>
                <button type="button" className="quiet-button" onClick={toggleTheme}>{theme === 'dark' ? (ar ? 'الوضع الفاتح' : 'Light mode') : (ar ? 'الوضع الداكن' : 'Dark mode')}</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
