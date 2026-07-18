const CACHE_NAME = 'cabinet-infirmier-v2.0';
const PRECACHE_ASSETS = [
  '/',
  '/assets/photo-entree.webp',
  '/assets/photo-entree-optimized.jpg',
  '/assets/favicon.png',
  '/assets/lottie/Medic.json',
  '/assets/lottie/mynurse.json',
  '/assets/lottie/map%20search.json'
];

const isSuccessful = (response) => response && response.ok;

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(
        names.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name))
      ))
      .then(() => self.clients.claim())
  );
});

const cacheFirst = async (request) => {
  const cached = await caches.match(request);
  if (cached) return cached;

  const response = await fetch(request);
  if (isSuccessful(response)) {
    const cache = await caches.open(CACHE_NAME);
    await cache.put(request, response.clone());
  }
  return response;
};

const networkFirst = async (request) => {
  try {
    const response = await fetch(request);
    if (isSuccessful(response)) {
      const cache = await caches.open(CACHE_NAME);
      await cache.put(request, response.clone());
    }
    return response;
  } catch {
    return caches.match(request);
  }
};

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  const isImage = event.request.destination === 'image';
  const isLottie = url.pathname.startsWith('/assets/lottie/');

  event.respondWith(
    isImage || isLottie ? cacheFirst(event.request) : networkFirst(event.request)
  );
});
