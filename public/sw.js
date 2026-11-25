// SciLab service worker: lets the site open offline after a first visit.
// App shell is cached on install; pages, scripts, fonts and photos are cached as they are used.
// The 500 specimen photos (about 58 MB) are NOT preloaded, only the ones a student opens.
const CACHE = 'scilab-v2';
const SHELL = ['/', '/index.html', '/manifest.webmanifest', '/favicon.svg', '/scilab-logo.svg'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (req.mode === 'navigate') {
    // Pages: network first so updates show, cached app shell when offline.
    event.respondWith(fetch(req).then((res) => {
      if (res.ok && res.type === 'basic') { const copy = res.clone(); caches.open(CACHE).then((c) => c.put('/', copy)); }
      return res;
    }).catch(() => caches.match('/').then((r) => r || caches.match('/index.html'))));
    return;
  }
  // Assets and photos: serve from cache, refresh in the background.
  event.respondWith(caches.open(CACHE).then((cache) => cache.match(req).then((hit) => {
    const network = fetch(req).then((res) => { if (res.ok && res.type === 'basic') cache.put(req, res.clone()); return res; }).catch(() => hit);
    return hit || network;
  })));
});
