import { useEffect, useState } from 'react';

const KEY = 'scilab-splash-seen';

export function Splash() {
  const [phase, setPhase] = useState<'show' | 'fade' | 'gone'>(() => {
    try { return sessionStorage.getItem(KEY) ? 'gone' : 'show'; } catch { return 'show'; }
  });

  useEffect(() => {
    if (phase === 'gone') return;
    try { sessionStorage.setItem(KEY, '1'); } catch { /* ignore */ }
    const a = window.setTimeout(() => setPhase('fade'), 1500);
    const b = window.setTimeout(() => setPhase('gone'), 2000);
    return () => { window.clearTimeout(a); window.clearTimeout(b); };
  }, [phase === 'gone']);

  if (phase === 'gone') return null;
  return (
    <div className={phase === 'fade' ? 'splash splash--fade' : 'splash'} role="status" aria-label="Loading SciLab">
      <div className="splash-orbit">
        <svg className="splash-ring" viewBox="0 0 200 200" aria-hidden="true">
          <circle cx="100" cy="100" r="92" fill="none" stroke="#d9d6c8" strokeWidth="3" />
          <path d="M100 8a92 92 0 0 1 92 92" fill="none" stroke="#4f7f55" strokeWidth="5" strokeLinecap="round" />
        </svg>
        <img className="splash-face" src="/scilab-character.jpg" alt="" width="150" height="150" />
      </div>
    </div>
  );
}
