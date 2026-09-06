/* =====================================================================
   SW.JS — Service Worker do God Defense
   =====================================================================
   Faz o jogo funcionar como PWA (instalável) e permite abrir mesmo
   offline, depois da primeira visita, guardando uma cópia local dos
   arquivos principais do jogo.

   Se você adicionar fotos na pasta "fotos", elas NÃO precisam estar
   nessa lista: o navegador já busca elas normalmente quando online, e
   com o tempo o cache delas também é preenchido automaticamente pelo
   fetch handler abaixo.

   IMPORTANTE: sempre que você atualizar o jogo (o HTML, o fotos.js, etc)
   e publicar no GitHub Pages, troque o número da versão abaixo
   (CACHE_NAME) para algo novo, por exemplo 'god-defense-v4'. Isso força
   o celular/navegador a baixar a versão nova em vez de continuar usando
   a versão antiga guardada no cache. ===================================================================== */
const CACHE_NAME = 'god-defense-v4';
const APP_SHELL = [
  './',
  './index.html',
  './fotos.js',
  './manifest.json',
  './icon-16.png',
  './icon-32.png',
  './icon-180.png',
  './icon-192.png',
  './icon-512.png',
  './icon-512-maskable.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) => Promise.all(
      names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n))
    )).then(() => self.clients.claim())
  );
});

// Estratégia: tenta a rede primeiro (pra sempre pegar fotos/atualizações
// novas quando online); se falhar (offline), usa o que tiver no cache.
// Toda resposta boa da rede é guardada no cache pra uso offline depois.
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request).then((cached) => cached || caches.match('./index.html')))
  );
});
