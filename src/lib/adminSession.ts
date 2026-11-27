import { isIos, isStandalone, pushSupported } from './pushReminders';

// Owner session. The token is issued by the Worker after it verified a Google ID token for the owner's
// email. It is only a handle: every admin request is checked again on the server, so editing this value
// in the browser cannot grant anything. It is used only to decide whether to show the "Admin" link.
const KEY = 'scilab-admin-session';
export const getAdminSession = (): string => { try { return window.localStorage.getItem(KEY) ?? ''; } catch { return ''; } };
export const setAdminSession = (v: string) => { try { window.localStorage.setItem(KEY, v); window.dispatchEvent(new Event('scilab-admin-session')); } catch { /* ignored */ } };
export const clearAdminSession = () => { try { window.localStorage.removeItem(KEY); window.dispatchEvent(new Event('scilab-admin-session')); } catch { /* ignored */ } };

const keyBytes = (b64: string) => {
  const raw = atob((b64 + '='.repeat((4 - (b64.length % 4)) % 4)).replace(/-/g, '+').replace(/_/g, '/'));
  return Uint8Array.from(raw, (c) => c.charCodeAt(0));
};
export type AlertState = 'unsupported' | 'needs-install' | 'denied' | 'off' | 'on';
export async function alertState(): Promise<AlertState> {
  if (isIos() && !isStandalone()) return 'needs-install';
  if (!pushSupported()) return 'unsupported';
  if (Notification.permission === 'denied') return 'denied';
  try {
    const reg = await navigator.serviceWorker.getRegistration('/sw.js');
    return (await reg?.pushManager.getSubscription()) && Notification.permission === 'granted' ? 'on' : 'off';
  } catch { return 'off'; }
}
async function register(key: string, action: 'subscribe' | 'unsubscribe', endpoint: string) {
  const res = await fetch('/api/admin/push', { method: 'POST', headers: { 'x-admin-key': key, 'content-type': 'application/json' }, body: JSON.stringify({ action, endpoint }) });
  if (!res.ok) throw new Error('register_failed');
}
// Must run from a tap. Registers THIS device for owner alerts; the server accepts it only with a valid admin credential.
export async function enableAdminAlerts(key: string): Promise<AlertState> {
  if (!pushSupported()) return 'unsupported';
  const perm = await Notification.requestPermission();
  if (perm !== 'granted') return perm === 'denied' ? 'denied' : 'off';
  const reg = await navigator.serviceWorker.register('/sw.js').then(() => navigator.serviceWorker.ready);
  const { key: vapid } = await (await fetch('/api/push/vapid-key')).json() as { key: string };
  const sub = (await reg.pushManager.getSubscription()) ?? await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: keyBytes(vapid) });
  await register(key, 'subscribe', sub.endpoint);
  return 'on';
}
export async function disableAdminAlerts(key: string): Promise<AlertState> {
  const reg = await navigator.serviceWorker.getRegistration('/sw.js');
  const sub = await reg?.pushManager.getSubscription();
  if (sub) await register(key, 'unsubscribe', sub.endpoint).catch(() => undefined);
  return alertState();
}
