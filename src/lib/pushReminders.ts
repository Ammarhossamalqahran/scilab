// Web push reminder helpers. Works where the browser supports push; on iPhone only inside the
// installed home-screen app (iOS 16.4+).
export const isIos = () => /iphone|ipad|ipod/i.test(navigator.userAgent);
export const isStandalone = () => window.matchMedia('(display-mode: standalone)').matches || (navigator as Navigator & { standalone?: boolean }).standalone === true;
export const pushSupported = () => 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window;

export type PushState = 'unsupported' | 'needs-install' | 'off' | 'on' | 'denied';

export async function currentState(): Promise<PushState> {
  if (isIos() && !isStandalone()) return 'needs-install';
  if (!pushSupported()) return 'unsupported';
  if (Notification.permission === 'denied') return 'denied';
  try {
    const reg = await navigator.serviceWorker.getRegistration('/sw.js');
    const sub = await reg?.pushManager.getSubscription();
    return sub && Notification.permission === 'granted' ? 'on' : 'off';
  } catch { return 'off'; }
}

const keyBytes = (b64: string) => {
  const pad = '='.repeat((4 - (b64.length % 4)) % 4);
  const raw = atob((b64 + pad).replace(/-/g, '+').replace(/_/g, '/'));
  return Uint8Array.from(raw, (c) => c.charCodeAt(0));
};

export async function rememberLanguage(lang: 'ar' | 'en') {
  try { if ('caches' in window) await (await caches.open('scilab-prefs')).put('/lang', new Response(lang)); } catch { /* optional */ }
}

// Must be called from a tap (iOS requires a user gesture for the permission prompt).
export async function enableReminders(lang: 'ar' | 'en'): Promise<PushState> {
  if (!pushSupported()) return 'unsupported';
  const perm = await Notification.requestPermission();
  if (perm !== 'granted') return perm === 'denied' ? 'denied' : 'off';
  const reg = await navigator.serviceWorker.register('/sw.js').then(() => navigator.serviceWorker.ready);
  const { key } = await (await fetch('/api/push/vapid-key')).json() as { key: string };
  const sub = (await reg.pushManager.getSubscription()) ?? await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: keyBytes(key) });
  const res = await fetch('/api/push/subscribe', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ endpoint: sub.endpoint }) });
  if (!res.ok) throw new Error('subscribe_failed');
  await rememberLanguage(lang);
  return 'on';
}

export async function disableReminders(): Promise<PushState> {
  const reg = await navigator.serviceWorker.getRegistration('/sw.js');
  const sub = await reg?.pushManager.getSubscription();
  if (sub) {
    await fetch('/api/push/unsubscribe', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ endpoint: sub.endpoint }) }).catch(() => undefined);
    await sub.unsubscribe();
  }
  return 'off';
}
