import { useEffect, useRef, useState } from 'react';

// "Monitored test" mode. A web page CANNOT block screenshots or screen recording and cannot see them.
// What it can do while a test is running: notice that the page was left (tab switch, app switch, lost focus),
// count it, hide the questions while the page is not in front, and block copy, cut, right-click, text
// selection, dragging and printing from the page. It also notes a PrintScreen key press (desktop keyboards only).
export function useTestGuard(active: boolean) {
  const [away, setAway] = useState(false);
  const [leaves, setLeaves] = useState(0);
  const [keys, setKeys] = useState(0);
  const awayRef = useRef(false);

  useEffect(() => {
    if (!active) { awayRef.current = false; setAway(false); return; }
    document.body.classList.add('test-guard-on');
    const leave = () => { if (!awayRef.current) { awayRef.current = true; setAway(true); setLeaves((n) => n + 1); } };
    const back = () => { if (!document.hidden && document.hasFocus()) { awayRef.current = false; setAway(false); } };
    const onVis = () => { if (document.hidden) leave(); else back(); };
    const stop = (e: Event) => e.preventDefault();
    const onKey = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      if (k === 'printscreen') { setKeys((n) => n + 1); try { void navigator.clipboard?.writeText(''); } catch { /* not allowed */ } return; }
      if ((e.ctrlKey || e.metaKey) && ['p', 's', 'c', 'x', 'u'].includes(k)) e.preventDefault();
    };
    document.addEventListener('visibilitychange', onVis);
    window.addEventListener('blur', leave);
    window.addEventListener('focus', back);
    window.addEventListener('pagehide', leave);
    for (const ev of ['contextmenu', 'copy', 'cut', 'dragstart', 'selectstart']) document.addEventListener(ev, stop);
    window.addEventListener('keydown', onKey);
    window.addEventListener('keyup', onKey);
    return () => {
      document.body.classList.remove('test-guard-on');
      document.removeEventListener('visibilitychange', onVis);
      window.removeEventListener('blur', leave);
      window.removeEventListener('focus', back);
      window.removeEventListener('pagehide', leave);
      for (const ev of ['contextmenu', 'copy', 'cut', 'dragstart', 'selectstart']) document.removeEventListener(ev, stop);
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('keyup', onKey);
    };
  }, [active]);

  const reset = () => { setLeaves(0); setKeys(0); awayRef.current = false; setAway(false); };
  return { away, leaves, keys, reset };
}
