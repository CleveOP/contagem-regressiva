const CACHE_NAME = 'casamento-countdown-v1';
const urlsToCache = [
  '/',
  'index.html',
  'style.css',
  'script.js',
  'img/casamento.png',
  'https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap'
];

// Instala o Service Worker e armazena os arquivos em cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache aberto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Intercepta as requisições e serve os arquivos do cache se disponíveis
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});