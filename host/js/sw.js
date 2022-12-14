const cacheName='v0.0.2';
const cacheAssets=[
    '/',
    '/app.js?jsfile=serviceworker',
    '/app.js?jsfile=app',
    '/favicon.ico',
    '/icon/favicon-16x16.png',
    '/icon/favicon-32x32.png',
    '/icon/apple-touch-icon.png',
    '/icon/android-chrome-192x192.png',
    '/icon/android-chrome-512x512.png',
    '/robots.txt',
    '/manifest.json',
];
self.addEventListener('install', e => {
    console.log('installed');
    e.waitUntil(
        caches.open(cacheName).then(cache=>{
            console.log('sw: caching Files');
            cache.addAll(cacheAssets);
        }).then(()=>self.skipWaiting())
    );
});
self.addEventListener('activate', e => {
    console.log('activated');
    e.waitUntil(
        caches.keys().then(cacheNames=>{
            return Promise.all(
                cacheNames.map(cache=>{
                    if(cache!==cacheName){
                        console.log('sw: clearing old cache');
                        return caches.delete(cache);
                    }
                })
            )
        })
    )
});
self.addEventListener('fetch', e => {
    console.log('sw: fetching');
    e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));
});
