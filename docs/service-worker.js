
/* eslint-disable */

// based on https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/basic/service-worker.js

try {
  const relativePath = location.href.startsWith('http://localhost:3000/') ? '' : '/angular.hamburg'
  importScripts(relativePath + '/service-worker-config.js')
} catch (e) {
  console.log('Failed to import:', e)
}

const VERSION = '0.4.4'
const PREFETCH_CACHE = `ng-hh-prefetch-cache-v${VERSION}`
const RUNTIME_CACHE = `ng-hh-runtime-cache-v${VERSION}`

// prefetch static resources

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(PREFETCH_CACHE)
      .then(cache => cache.addAll(navigator.serviceWorkerConfig ? 
        navigator.serviceWorkerConfig.prefetch : '/'))
      .then(self.skipWaiting())
  )
})

// delete old caches

self.addEventListener('activate', event => {
  const currentCaches = [PREFETCH_CACHE, RUNTIME_CACHE]
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName))
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete)
      }))
    }).then(() => self.clients.claim())
  )
})

// handle fetch events, cache first

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse
      }

      return caches.open(RUNTIME_CACHE).then(cache => {
        return fetch(event.request).then(response => {
          return cache.put(event.request, response.clone()).then(() => {
            return response
          })
        }).catch(() => console.log('Failed to fetch:', event.request.url))
      })
    })
  )
})
