const CACHE_NAME = 'weboptim-cache-v1';

// Asset types to cache
const CACHEABLE_EXTENSIONS = ['.js', '.css', '.woff', '.woff2', '.ttf', '.otf', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.ico'];

function shouldCache(url) {
  return CACHEABLE_EXTENSIONS.some(ext => url.toLowerCase().includes(ext));
}

// Install - cache critical assets
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Activate - clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

// Fetch - cache-first for static assets
self.addEventListener('fetch', (event) => {
  const { request } = event;
  
  // Only cache GET requests for cacheable assets
  if (request.method !== 'GET' || !shouldCache(request.url)) {
    return;
  }

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        // Return cached version, update cache in background
        event.waitUntil(
          fetch(request).then((response) => {
            if (response.ok) {
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(request, response);
              });
            }
          }).catch(() => {})
        );
        return cachedResponse;
      }

      // Not in cache - fetch and cache
      return fetch(request).then((response) => {
        if (response.ok) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });
        }
        return response;
      });
    })
  );
});
