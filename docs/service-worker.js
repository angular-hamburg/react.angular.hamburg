
/* eslint-disable */

// based on https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/basic/service-worker.js

const GH_PAGES_ENV = location.href.startsWith('https://angular-hamburg.github.io/angular.hamburg/')

const DEV_ENV = location.href.startsWith('http://localhost:3000/')

const logError = (message, error) => {
  if (DEV_ENV) console.error(message, error)
}

let prefetchResources = []

try {
  // If we are using Github Pages instead of 'https://angular.hamburg',
  // the SW config is located under a different relative path 
  const relativePath = GH_PAGES_ENV ? '/angular.hamburg' : ''
  importScripts(relativePath + '/service-worker-config.js')

  // If we are using Github Pages, the resources to be prefetched have
  // to be prefixed with the relative path, too
  prefetchResources = navigator.serviceWorkerConfig.prefetch
    .map(res => GH_PAGES_ENV ? relativePath + res : res)

} catch (e) {
  logError('Failed to import:', e)
}

const VERSION = '0.6.0'
const PREFETCH_CACHE = `ng-hh-prefetch-cache-v${VERSION}`
const RUNTIME_CACHE = `ng-hh-runtime-cache-v${VERSION}`

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(PREFETCH_CACHE)
      .then(cache => cache.addAll(prefetchResources))
      .then(() => self.skipWaiting())
      .catch(e => logError('Failed to prefetch:', e))
  )
})

self.addEventListener('activate', event => {
  const currentCaches = [PREFETCH_CACHE, RUNTIME_CACHE]
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName))
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete)
      }))
    })
    .then(() => self.clients.claim())
    .catch(e => logError('Failed to delete:', e))
  )
})

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
        })
        .catch(e => logError('Failed to catch:', e))
      })
    })
  )
})
