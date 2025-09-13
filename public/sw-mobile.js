// Mobile-First Service Worker for Hero Assets
const CACHE_NAME = 'brown-kudi-mobile-v1';
const CRITICAL_MOBILE_ASSETS = [
  '/',
  '/src/main.jsx',
  '/src/Components/Hero.jsx',
  '/src/Components/Hero.css',
  '/font/pfont.ttf',
  '/font/efont.ttf',
  'https://res.cloudinary.com/dnyv7wabr/image/upload/v1757750728/IMG1_vji0th.jpg', // Mobile hero image
];

// Install event - cache critical mobile assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('📱 Caching mobile-critical assets');
        return cache.addAll(CRITICAL_MOBILE_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('🗑️ Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache for mobile-critical assets
self.addEventListener('fetch', (event) => {
  const { request } = event;
  
  // Only handle GET requests
  if (request.method !== 'GET') return;
  
  // Check if it's a critical mobile asset
  const isCriticalAsset = CRITICAL_MOBILE_ASSETS.some(asset => 
    request.url.includes(asset.replace('/', ''))
  );
  
  if (isCriticalAsset) {
    event.respondWith(
      caches.match(request)
        .then((response) => {
          if (response) {
            console.log('⚡ Serving from cache:', request.url);
            return response;
          }
          
          // Fallback to network
          return fetch(request).then((response) => {
            // Cache the response for future use
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
            return response;
          });
        })
        .catch(() => {
          // Network error - serve offline fallback if available
          if (request.destination === 'image') {
            return new Response('', { 
              status: 200, 
              statusText: 'OK',
              headers: { 'Content-Type': 'image/svg+xml' }
            });
          }
        })
    );
  }
});
