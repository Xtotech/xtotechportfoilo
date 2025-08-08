const CACHE_NAME = 'pwa-task-list-cache-v1';

const urlsToCache = [
    '/',
    '/index.html',
    '/styles/styles.css',
    '/styles/styles.scss',
    '/app1.js',
    'pwa/manifest.json',
    'pwa/service-worker.js',
    '/app1.js',
];

self.addEventListener('install', (event) => {
    event.waitUntil (
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    return response;
                }

                return fetch(event.request);
            })
    );
});
