// Gondolas Schedule — service worker
// Required for Chrome's "Install app" button to appear.
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
