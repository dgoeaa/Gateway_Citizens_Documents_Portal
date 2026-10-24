/* Public offline shell only. Never intercept API or administration requests. */
const CACHE = 'nitda-final-shell-1';
const SHELL = [
  './', './index.html', './submit.html', './track.html', './support.html', './privacy.html',
  './404.html', './portal.css', './portal-journey.css', './favicon.svg', './manifest.webmanifest',
  './config.local.js', './ds/ds.css', './ds/colors_and_type.css',
  './ds/tokens/tokens.primitive.css', './ds/tokens/tokens.semantic.css',
  './ds/tokens/tokens.theme-light.css', './ds/tokens/tokens.theme-dark.css',
  './ds/tokens/tokens.theme-hc.css', './ds/tokens/tokens.component.css', './ds/tokens/tokens.density.css',
  './ds/styles/reset.css', './ds/styles/base.css', './ds/styles/layout.css',
  './ds/styles/components.css', './ds/styles/components/command-palette.css',
  './ds/fonts/CascadiaMono-Regular.woff2', './ds/logo/nitda-symbol.png',
  './ds/logo/nitda-lockup.png', './ds/logo/nitda-lockup-white.png',
  './js/icons.js', './js/data.js', './js/core.js', './js/identity.js', './js/home.js',
  './js/submit.js', './js/track.js', './js/support.js', './js/portal-journey.js'
];
const PUBLIC_URLS = new Set(SHELL.map(path => new URL(path, self.registration.scope).href));
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(key => key.startsWith('nitda-final-shell-') && key !== CACHE).map(key => caches.delete(key))
  )).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  url.search = '';
  if (request.method !== 'GET' || !PUBLIC_URLS.has(url.href)) return;
  event.respondWith(fetch(request).then(response => {
    if (response.ok) {
      const copy = response.clone();
      event.waitUntil(caches.open(CACHE).then(cache => cache.put(url.href, copy)));
    }
    return response;
  }).catch(() => caches.match(url.href).then(response => response || Response.error())));
});
