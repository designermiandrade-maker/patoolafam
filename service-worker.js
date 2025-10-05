// PatoolaFam Service Worker - simple offline support
const CACHE_VERSION = 'v1.0.0';
const STATIC_CACHE = `patoola-static-${CACHE_VERSION}`;
const STATIC_ASSETS = [
  '/',                // adjust if your start page is different
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
  // add more assets (CSS/JS/fonts) here after deploying once and seeing network requests
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => {
        if (!key.includes(CACHE_VERSION)) {
          return caches.delete(key);
        }
      }))
    )
  );
  self.clients.claim();
});

// Strategy:
// 1) HTML pages: network-first (fresh content when online; fallback to cache offline)
// 2) Other requests (CSS/JS/images): cache-first (fast & offline)
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Only handle same-origin requests
  if (url.origin !== location.origin) return;

  if (req.mode === 'navigate') {
    // Network-first for navigations
    event.respondWith(
      fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(STATIC_CACHE).then(cache => cache.put(req, copy));
        return res;
      }).catch(() => caches.match(req).then(res => res || caches.match('/')))
    );
    return;
  }

  // Cache-first for others
  event.respondWith(
    caches.match(req).then(cached => cached || fetch(req).then(res => {
      const copy = res.clone();
      caches.open(STATIC_CACHE).then(cache => cache.put(req, copy));
      return res;
    }))
  );
});
