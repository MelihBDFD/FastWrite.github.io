// Service Worker for Hızlı Yazı Uygulaması
// Version 1.1.0 - Enhanced PWA Features

const CACHE_NAME = 'hizli-yazi-v1.1';
const DYNAMIC_CACHE = 'hizli-yazi-dynamic-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/manifest.json',
  '/sitemap.xml',
  '/robots.txt',
  '/README.md',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
];

// Runtime caching for different types of resources
const RUNTIME_CACHE_STRATEGIES = {
  images: 'cache-first',
  fonts: 'cache-first',
  api: 'network-first',
  documents: 'network-first'
};

// Install event - cache static assets
self.addEventListener('install', event => {
  console.log('[SW] Installing Service Worker v1.1');

  event.waitUntil(
    Promise.all([
      caches.open(CACHE_NAME)
        .then(cache => {
          console.log('[SW] Caching static assets');
          return cache.addAll(STATIC_ASSETS);
        }),
      caches.open(DYNAMIC_CACHE)
        .then(cache => {
          console.log('[SW] Created dynamic cache');
          return Promise.resolve();
        })
    ])
    .then(() => {
      console.log('[SW] Skip waiting');
      return self.skipWaiting();
    })
    .catch(err => console.log('[SW] Error caching:', err))
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('[SW] Activating Service Worker v1.1');

  event.waitUntil(
    Promise.all([
      caches.keys()
        .then(cacheNames => {
          return Promise.all(
            cacheNames.map(cacheName => {
              if (cacheName !== CACHE_NAME && cacheName !== DYNAMIC_CACHE) {
                console.log('[SW] Deleting old cache:', cacheName);
                return caches.delete(cacheName);
              }
            })
          );
        }),
      self.clients.claim()
    ])
  );
});

// Enhanced fetch event with different caching strategies
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Handle different types of requests
  if (isStaticAsset(request)) {
    event.respondWith(cacheFirstStrategy(request));
  } else if (isImageRequest(request)) {
    event.respondWith(cacheFirstStrategy(request, DYNAMIC_CACHE));
  } else if (isFontRequest(request)) {
    event.respondWith(cacheFirstStrategy(request, DYNAMIC_CACHE));
  } else if (isAPIRequest(request)) {
    event.respondWith(networkFirstStrategy(request));
  } else {
    event.respondWith(networkFirstStrategy(request));
  }
});

// Cache-first strategy (good for static assets)
function cacheFirstStrategy(request, cacheName = CACHE_NAME) {
  return caches.match(request)
    .then(cachedResponse => {
      if (cachedResponse) {
        console.log('[SW] Serving from cache:', request.url);
        return cachedResponse;
      }

      return fetch(request)
        .then(networkResponse => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(cacheName)
              .then(cache => cache.put(request, responseToCache));
          }
          return networkResponse;
        })
        .catch(err => {
          console.log('[SW] Network fetch failed:', err);
          if (request.destination === 'document') {
            return caches.match('/index.html');
          }
          return new Response('Offline', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: new Headers({ 'Content-Type': 'text/plain' })
          });
        });
    });
}

// Network-first strategy (good for dynamic content)
function networkFirstStrategy(request, cacheName = DYNAMIC_CACHE) {
  return fetch(request)
    .then(networkResponse => {
      if (networkResponse && networkResponse.status === 200) {
        const responseToCache = networkResponse.clone();
        caches.open(cacheName)
          .then(cache => cache.put(request, responseToCache));
      }
      return networkResponse;
    })
    .catch(err => {
      console.log('[SW] Network failed, trying cache:', request.url);
      return caches.match(request)
        .then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }

          // Return offline page for HTML requests
          if (request.destination === 'document') {
            return caches.match('/index.html');
          }

          return new Response('Offline', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: new Headers({ 'Content-Type': 'text/plain' })
          });
        });
    });
}

// Helper functions to identify request types
function isStaticAsset(request) {
  return STATIC_ASSETS.some(asset => request.url.includes(asset));
}

function isImageRequest(request) {
  return request.destination === 'image' ||
         request.url.match(/\.(jpg|jpeg|png|gif|webp|svg|ico)$/i);
}

function isFontRequest(request) {
  return request.destination === 'font' ||
         request.url.match(/\.(woff|woff2|ttf|eot)$/i);
}

function isAPIRequest(request) {
  return request.url.includes('/api/') ||
         request.url.match(/\.(json|xml|txt)$/i);
}

// Enhanced background sync for form submissions and analytics
self.addEventListener('sync', event => {
  console.log('[SW] Background sync triggered:', event.tag);

  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  } else if (event.tag === 'analytics-sync') {
    event.waitUntil(syncAnalyticsData());
  } else if (event.tag === 'typing-results-sync') {
    event.waitUntil(syncTypingResults());
  }
});

// Background sync for offline actions
async function doBackgroundSync() {
  try {
    // Get all clients
    const clients = await self.clients.matchAll();

    // Send pending actions to clients
    clients.forEach(client => {
      client.postMessage({
        type: 'BACKGROUND_SYNC_COMPLETE',
        timestamp: Date.now()
      });
    });

    console.log('[SW] Background sync completed');
  } catch (error) {
    console.error('[SW] Background sync failed:', error);
  }
}

// Sync analytics data when back online
async function syncAnalyticsData() {
  try {
    // Get cached analytics data
    const cache = await caches.open(DYNAMIC_CACHE);
    const analyticsRequests = await cache.keys();
    const pendingAnalytics = analyticsRequests.filter(req =>
      req.url.includes('/analytics') || req.url.includes('ga-send')
    );

    // Send pending analytics
    for (const request of pendingAnalytics) {
      try {
        await fetch(request);
        await cache.delete(request);
        console.log('[SW] Synced analytics:', request.url);
      } catch (error) {
        console.error('[SW] Failed to sync analytics:', request.url, error);
      }
    }
  } catch (error) {
    console.error('[SW] Analytics sync failed:', error);
  }
}

// Sync typing results
async function syncTypingResults() {
  try {
    const cache = await caches.open(DYNAMIC_CACHE);
    const resultRequests = await cache.keys();
    const pendingResults = resultRequests.filter(req =>
      req.url.includes('/results') || req.url.includes('typing-data')
    );

    for (const request of pendingResults) {
      try {
        await fetch(request);
        await cache.delete(request);
        console.log('[SW] Synced typing result:', request.url);
      } catch (error) {
        console.error('[SW] Failed to sync result:', request.url, error);
      }
    }
  } catch (error) {
    console.error('[SW] Results sync failed:', error);
  }
}

// Enhanced push notification support
self.addEventListener('push', event => {
  console.log('[SW] Push received:', event);

  let notificationData = {
    title: 'Hızlı Yazı',
    body: 'Yeni güncelleme mevcut!',
    icon: '/icons/icon-192.png',
    badge: '/icons/icon-192.png',
    tag: 'general',
    requireInteraction: false,
    actions: [
      {
        action: 'open',
        title: 'Aç',
        icon: '/icons/icon-192.png'
      },
      {
        action: 'dismiss',
        title: 'Kapat'
      }
    ]
  };

  if (event.data) {
    try {
      const data = event.data.json();
      notificationData = { ...notificationData, ...data };
    } catch (error) {
      console.error('[SW] Error parsing push data:', error);
    }
  }

  event.waitUntil(
    self.registration.showNotification(notificationData.title, notificationData)
  );
});

// Enhanced notification click handling
self.addEventListener('notificationclick', event => {
  console.log('[SW] Notification clicked:', event.action);

  event.notification.close();

  if (event.action === 'dismiss') {
    return;
  }

  const urlToOpen = event.notification.data?.url || '/';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then(clientList => {
        // Check if app is already open
        for (const client of clientList) {
          if (client.url.includes(self.location.origin) && 'focus' in client) {
            return client.focus();
          }
        }

        // Open new window if app is not open
        if (clients.openWindow) {
          return clients.openWindow(urlToOpen);
        }
      })
      .catch(err => console.error('[SW] Error opening notification URL:', err))
  );
});

// Message handling for communication with main thread
self.addEventListener('message', event => {
  console.log('[SW] Message received:', event.data);

  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  } else if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({
      version: '1.1.0',
      cacheName: CACHE_NAME
    });
  } else if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(clearAllCaches());
  } else if (event.data && event.data.type === 'UPDATE_ANALYTICS') {
    event.waitUntil(updateAnalytics(event.data.payload));
  }
});

// Clear all caches
async function clearAllCaches() {
  const cacheNames = await caches.keys();
  await Promise.all(
    cacheNames.map(cacheName => caches.delete(cacheName))
  );
  console.log('[SW] All caches cleared');
}

// Update analytics data
async function updateAnalytics(payload) {
  try {
    const cache = await caches.open(DYNAMIC_CACHE);
    const request = new Request('/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    await cache.put(request, new Response(JSON.stringify(payload)));
    console.log('[SW] Analytics data cached for sync');
  } catch (error) {
    console.error('[SW] Error caching analytics:', error);
  }
}

// Periodic background sync (if supported)
self.addEventListener('periodicsync', event => {
  console.log('[SW] Periodic sync triggered:', event.tag);

  if (event.tag === 'content-sync') {
    event.waitUntil(syncContent());
  }
});

// Sync content updates
async function syncContent() {
  try {
    // Check for new content or updates
    const response = await fetch('/manifest.json');
    if (response.ok) {
      const manifest = await response.json();
      console.log('[SW] Content synced:', manifest.version);
    }
  } catch (error) {
    console.error('[SW] Content sync failed:', error);
  }
}

// Handle connection changes
self.addEventListener('online', () => {
  console.log('[SW] Back online - triggering sync');
  self.registration.sync.register('background-sync');
  self.registration.sync.register('analytics-sync');
});

// Error handling
self.addEventListener('error', event => {
  console.error('[SW] Service Worker error:', event.error);
});

self.addEventListener('unhandledrejection', event => {
  console.error('[SW] Unhandled promise rejection:', event.reason);
});
