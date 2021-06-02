const assetBiography = "hany-biografi-assets";
const assets = [];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(assetBiography).then(cache => {
      cache.addAll(assets);
    })
  );
});


self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});



