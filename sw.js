const CACHE_NAME = 'cso-tobelo-v1';
const urlsToCache = [
  'index.html',
  'manifest.json',
  'Logo_CSO.png',
  'Logo_Handal_Oke.png',
  'Logo_Kemenkeu.png',
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

// Install Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Cache and Update Logic
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});