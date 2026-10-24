/* NITDA Document Portal — offline shell.
 * Cache-first for versioned assets, network-first for navigations.
 * BUMP CACHE ON EVERY RELEASE — asset requests are cache-first, so a stale entry survives a redeploy.
 */
const CACHE = 'nitda-portal-v3.0.1';

/* Everything the portal needs to render correctly with no network at all: the document,
   the runtime, the brand marks, the icon sprite injectSprite() fetches, every design-system
   stylesheet and the monospace face the references and digests are set in. Omitting any of
   these renders a cold-installed offline visit unstyled or icon-less. */
const SHELL = [
  './',
  './index.html',
  './support.js',
  './favicon.svg',
  './manifest.webmanifest',
  './assets/nitda-lockup.png',
  './assets/nitda-lockup-white.png',
  './assets/nitda-symbol.png',
  './assets/sprite.svg',
  './_ds/nitda-design-system-019ddcd9-a7c2-72b6-9389-5f8171e90f2b/colors_and_type.css',
  './_ds/nitda-design-system-019ddcd9-a7c2-72b6-9389-5f8171e90f2b/styles.css',
  './_ds/nitda-design-system-019ddcd9-a7c2-72b6-9389-5f8171e90f2b/dgo-design-system/tokens/tokens.primitive.css',
  './_ds/nitda-design-system-019ddcd9-a7c2-72b6-9389-5f8171e90f2b/dgo-design-system/tokens/tokens.semantic.css',
  './_ds/nitda-design-system-019ddcd9-a7c2-72b6-9389-5f8171e90f2b/dgo-design-system/tokens/tokens.theme-light.css',
  './_ds/nitda-design-system-019ddcd9-a7c2-72b6-9389-5f8171e90f2b/dgo-design-system/tokens/tokens.theme-dark.css',
  './_ds/nitda-design-system-019ddcd9-a7c2-72b6-9389-5f8171e90f2b/dgo-design-system/tokens/tokens.theme-hc.css',
  './_ds/nitda-design-system-019ddcd9-a7c2-72b6-9389-5f8171e90f2b/dgo-design-system/tokens/tokens.component.css',
  './_ds/nitda-design-system-019ddcd9-a7c2-72b6-9389-5f8171e90f2b/dgo-design-system/styles/reset.css',
  './_ds/nitda-design-system-019ddcd9-a7c2-72b6-9389-5f8171e90f2b/dgo-design-system/styles/base.css',
  './_ds/nitda-design-system-019ddcd9-a7c2-72b6-9389-5f8171e90f2b/fonts/CascadiaMono-Regular.woff2'
];

/* config.local.js is deliberately NOT pre-cached: endpoint configuration must be re-read
   from the network so a signature rotation takes effect without a cache bust. */

const OFFLINE = () => new Response('', { status: 504, statusText: 'Offline' });

self.addEventListener('install', e => {
  /* Individually, so one 404 in the manifest cannot fail the whole install. */
  e.waitUntil(caches.open(CACHE)
    .then(c => Promise.all(SHELL.map(u => c.add(new Request(u, { cache: 'reload' })).catch(() => null))))
    .then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;

  let url;
  try { url = new URL(req.url); } catch (err) { return; }
  if (url.origin !== self.location.origin) return;
  if (url.pathname.endsWith('config.local.js')) {
    e.respondWith(fetch(req).catch(OFFLINE));
    return;
  }

  if (req.mode === 'navigate') {
    e.respondWith(fetch(req)
      .catch(() => caches.match('./index.html').then(hit => hit || OFFLINE())));
    return;
  }

  /* Cache-first, then network, then an honest 504 — never resolve respondWith to undefined. */
  e.respondWith(caches.match(req).then(hit => {
    if (hit) return hit;
    return fetch(req).then(res => {
      if (res && res.status === 200 && res.type === 'basic') {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
      }
      return res;
    }).catch(() => caches.match(req).then(late => late || OFFLINE()));
  }));
});
