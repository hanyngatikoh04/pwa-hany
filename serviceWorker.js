//konstanta untu nama cache 
const assetBiography = "hany-biografi-assets";
// konstanta berisi array asset yang akan di cache
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

// install service worker
self.addEventListener("install", event => {
  event.waitUntil(
    //buka asset yang akan dicache
    caches.open(assetBiography).then(cache => {
      // simpan cache file
      cache.addAll(assets);
    })
  );
});


//  service worker akan mulai menerima event fetch
self.addEventListener("fetch", event => {
  event.respondWith(
    //cek response, jika ada response yang cocok tampilkan dari cache dan jika tidak fetch ulang dari network
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});



