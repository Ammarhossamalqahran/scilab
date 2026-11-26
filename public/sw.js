// SciLab service worker: lets the site open offline after a first visit.
// App shell is cached on install; pages, scripts, fonts and photos are cached as they are used.
// The 500 specimen photos (about 58 MB) are NOT preloaded, only the ones a student opens.
const CACHE = 'scilab-v5';
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

// Daily reminder. The server sends an empty push; the teasing line is chosen here.
const MONTH_END = {
  ar: [
    "آخر الشهر يا ضعيف! الليدربورد هيتصفّر، تعالى كمّل التحدي.",
    "الدكتور مستنيك قبل ما الشهر يخلص. هتسيبه يكسب يا بطل؟",
    "كل يوم بتقول بكرة. بكرة الشهر بيتصفّر يا ضعيف.",
    "الشهر هيقفل ولسه ما غلبتش الدكتور. كمّل التحدي!",
    "ضعيف؟ ورّينا إنك مش كده. دقيقة واحدة قبل التصفير.",
  ],
  en: [
    "Last day of the month, weakling! The leaderboard resets tonight. Finish the challenge.",
    "The Doctor is waiting before the month ends. Will you let him win?",
    "You keep saying tomorrow. Tomorrow the board is wiped.",
    "One minute before the reset. Show us you are not that weak.",
  ],
};
const TEASE = {
  en: [
    "The Doctor scored 120 in 60 seconds. Think you can beat that?",
    "One minute. Fifty specimens. The Doctor is waiting.",
    "Your microscope skills are getting rusty. Prove otherwise.",
    "The Doctor says you won't make it past 100 today.",
    "60 seconds on the clock. Beat the Doctor's score.",
  ],
  ar: [
    "الدكتور جاب 120 في دقيقة. تقدر تغلبه؟",
    "دقيقة واحدة. عينات كتير. والدكتور مستنيك.",
    "إيدك على الميكروسكوب اتقلت؟ ورّينا.",
    "الدكتور بيقول إنك مش هتعدي 100 النهاردة.",
    "60 ثانية بس. اغلب نتيجة الدكتور.",
  ],
};
self.addEventListener('push', (event) => {
  event.waitUntil((async () => {
    let lang = (self.navigator && self.navigator.language || 'en').slice(0, 2) === 'ar' ? 'ar' : 'en';
    try {
      const hit = await (await caches.open('scilab-prefs')).match('/lang');
      if (hit) lang = (await hit.text()) === 'ar' ? 'ar' : 'en';
    } catch (e) { /* default language */ }
    let monthly = false;
    let winner = false;
    try {
      const sub = await self.registration.pushManager.getSubscription();
      const q = sub ? '?endpoint=' + encodeURIComponent(sub.endpoint) : '';
      const kind = (await (await fetch('/api/push/kind' + q, { cache: 'no-store' })).json()).kind;
      monthly = kind === 'monthly'; winner = kind === 'winner';
    } catch (e) { /* daily line */ }
    if (winner) {
      // Private message: the notification never shows its text, only that one is waiting.
      await self.registration.showNotification('SciLab', {
        body: lang === 'ar' ? 'عندك رسالة خاصة من SciLab. افتح الموقع عشان تشوفها.' : 'You have a private message from SciLab. Open the site to read it.',
        icon: '/icon-192.png', badge: '/icon-192.png', tag: 'scilab-winner', lang, dir: lang === 'ar' ? 'rtl' : 'ltr', data: { url: '/' },
      });
      return;
    }
    const lines = (monthly ? MONTH_END : TEASE)[lang];
    await self.registration.showNotification('SciLab', {
      body: lines[Math.floor(Math.random() * lines.length)],
      icon: '/icon-192.png',
      badge: '/icon-192.png',
      tag: monthly ? 'scilab-month-end' : 'scilab-daily',
      lang,
      dir: lang === 'ar' ? 'rtl' : 'ltr',
      data: { url: '/challenge' },
    });
  })());
});
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const target = (event.notification.data && event.notification.data.url) || '/challenge';
  event.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
    for (const c of list) { if ('focus' in c) { c.navigate(target).catch(() => undefined); return c.focus(); } }
    return self.clients.openWindow(target);
  }));
});
