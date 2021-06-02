const assetBiography = "hany-biografi-assets";
const assets = [
  '/',
  'index.html',
  'assets/vendor/aos/aos.css',  
  'assets/img/favicon.png',
  'assets/img/apple-touch-icon.png',
  'assets/vendor/bootstrap/css/bootstrap.min.css',
  'assets/vendor/bootstrap-icons/bootstrap-icons.css',
  'assets/vendor/boxicons/css/boxicons.min.css',
  'assets/vendor/glightbox/css/glightbox.min.css',
  'assets/vendor/swiper/swiper-bundle.min.css',
  'assets/css/style.css'
];

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



