// SciLab service worker: lets the site open offline after a first visit.
// App shell is cached on install; pages, scripts, fonts and photos are cached as they are used.
// The 500 specimen photos (about 58 MB) are NOT preloaded, only the ones a student opens.
const CACHE = 'scilab-v9';
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
  if (req.cache === 'no-store' || url.searchParams.has('__v')) return; // update checks must hit the network
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
// Ask which message to show, but never wait long: a push that is not turned into a visible notification
// quickly makes Android show its own generic "the site sent you a message" text instead of ours.
async function askKind(sub) {
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), 2500);
  try {
    const q = sub ? '?endpoint=' + encodeURIComponent(sub.endpoint) : '';
    const res = await fetch('/api/push/kind' + q, { cache: 'no-store', signal: ctl.signal });
    const d = await res.json();
    return { kind: d.kind, counts: d.counts || null, lang: d.lang === 'ar' || d.lang === 'en' ? d.lang : null };
  } catch (e) { return { kind: 'unknown', lang: null }; } finally { clearTimeout(timer); }
}
function show(title, body, tag, lang, url) {
  return self.registration.showNotification(title, {
    body, icon: '/icon-192.png', badge: '/badge-96.png', tag, renotify: true,
    vibrate: [200, 100, 200], timestamp: Date.now(), lang, dir: lang === 'ar' ? 'rtl' : 'ltr', data: { url },
  });
}
self.addEventListener('push', (event) => {
  event.waitUntil((async () => {
    // Language: the one saved on the server for this device, else the app's own saved choice, else Arabic (the app default).
    let lang = 'ar';
    try {
      const hit = await (await caches.open('scilab-prefs')).match('/lang');
      if (hit) lang = (await hit.text()) === 'ar' ? 'ar' : 'en';
    } catch (e) { /* default language */ }
    let kind = 'unknown'; let counts = null;
    try { const r = await askKind(await self.registration.pushManager.getSubscription()); kind = r.kind; counts = r.counts; if (r.lang) lang = r.lang; } catch (e) { /* unknown */ }
    try {
      if (kind === 'admin') {
        // Owner alert: counts only, never names or text.
        const c = counts || {};
        const ar = lang === 'ar';
        const parts = [];
        if (c.record) parts.push(ar ? 'رقم قياسي جديد: ' + c.record : 'New record: ' + c.record);
        if (c.user) parts.push(ar ? 'مستخدم جديد: ' + c.user : 'New user: ' + c.user);
        if (c.review) parts.push(ar ? 'محتاج موافقتك: ' + c.review : 'Needs approval: ' + c.review);
        await show(ar ? 'SciLab · المالك' : 'SciLab · owner', parts.join(ar ? '، ' : ', ') || 'SciLab', 'scilab-admin', lang, '/admin');
      } else if (kind === 'winner') {
        // Private message: the notification never shows its text, only that one is waiting.
        await show('SciLab', lang === 'ar' ? 'عندك رسالة خاصة من SciLab. افتح الموقع عشان تشوفها.' : 'You have a private message from SciLab. Open the site to read it.', 'scilab-winner', lang, '/');
      } else if (kind === 'unknown') {
        await show('SciLab', lang === 'ar' ? 'فيه جديد في SciLab. افتح الموقع.' : 'There is something new in SciLab. Open the site.', 'scilab-news', lang, '/challenge');
      } else {
        const lines = (kind === 'monthly' ? MONTH_END : TEASE)[lang];
        await show(kind === 'monthly' ? (lang === 'ar' ? 'SciLab · آخر يوم في الشهر' : 'SciLab · last day of the month') : (lang === 'ar' ? 'SciLab · تحدي اليوم' : 'SciLab · daily challenge'), lines[Math.floor(Math.random() * lines.length)], kind === 'monthly' ? 'scilab-month-end' : 'scilab-daily', lang, '/challenge');
      }
    } catch (e) {
      // Last resort: plain text without options, so a notification is always shown.
      await self.registration.showNotification('SciLab', { body: 'SciLab' });
    }
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
