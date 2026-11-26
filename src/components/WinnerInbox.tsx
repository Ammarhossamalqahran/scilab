import { useEffect, useState } from 'react';
import { usePreferences } from '../app/PreferencesContext';
import { playerId } from '../lib/leaderboardApi';

// A private message from the site owner (for example a prize code) for this player. Shown in a popup
// and erased on the server when dismissed.
export function WinnerInbox() {
  const { locale } = usePreferences();
  const ar = locale === 'ar';
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    let live = true;
    const check = async () => {
      try {
        const r = await fetch(`/api/inbox?player=${playerId()}`);
        if (!r.ok) return;
        const d = await r.json() as { message?: string | null };
        if (live && typeof d.message === 'string' && d.message) setMsg(d.message);
      } catch { /* offline or no API: nothing to show */ }
    };
    void check();
    const onVis = () => { if (document.visibilityState === 'visible') void check(); };
    document.addEventListener('visibilitychange', onVis);
    return () => { live = false; document.removeEventListener('visibilitychange', onVis); };
  }, []);

  if (!msg) return null;
  async function dismiss() {
    setMsg(null);
    try { await fetch('/api/inbox/ack', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ player: playerId() }) }); } catch { /* shown again next time */ }
  }
  return (
    <div className="welcome-backdrop" role="dialog" aria-modal="true" aria-labelledby="winner-title">
      <div className="welcome-card">
        <div className="welcome-hero" aria-hidden="true"><span className="welcome-ring welcome-ring--a" /><span className="welcome-ring welcome-ring--b" /><span className="welcome-ring welcome-ring--c" /><span className="winner-crown">♛</span></div>
        <div className="welcome-body">
          <h2 id="winner-title">{ar ? 'رسالة خاصة ليك' : 'A private message for you'}</h2>
          <p className="winner-text">{msg}</p>
          <button type="button" className="button button-primary welcome-go" onClick={dismiss}>{ar ? 'تمام' : 'OK'}</button>
          <small className="winner-note">{ar ? 'الرسالة هتتمسح بعد ما تقفلها، فاحفظها.' : 'This message is erased when you close it, so save it first.'}</small>
        </div>
      </div>
    </div>
  );
}
