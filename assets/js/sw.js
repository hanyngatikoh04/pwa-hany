
// install service worker
self.addEventListener('install', function(event){
    console.log('[SW] Installing service worker...', event);
});

// aktivasi service worker
self.addEventListener('activate', function(event){
    console.log('[SW] activating service worker...', event);
    return self.Clients.claim();
});
