const CACHE_NAME = "ilha-control-v1";

self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch("/p/ilha-tv-app.html").catch(() => caches.match("/p/ilha-tv-app.html"))
    );
  }
});
