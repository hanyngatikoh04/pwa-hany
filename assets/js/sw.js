
// proses instalasi service worker
self.addEventListener('install', function(event){
    console.log('[SW] Installing service worker...', event);
});

// aktivasi terhadap service worker
self.addEventListener('activate', function(event){
    console.log('[SW] activating service worker...', event);
    return self.Clients.claim();
});