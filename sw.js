/* Service worker de Guía DF: "primero red, si no hay red usa lo guardado".
   Así siempre se ve la versión nueva cuando hay internet, y la guía abre igual sin señal.
   Si cambia la lista de ARCHIVOS, subir VERSION. */
const VERSION = "df-v1";
const ARCHIVOS = ["./", "index.html", "datos.js", "manifest.webmanifest", "icons/icon.svg", "icons/icon-192.png", "icons/icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(ARCHIVOS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    fetch(req).then(res => {
      const copia = res.clone();
      caches.open(VERSION).then(c => c.put(req, copia));
      return res;
    }).catch(() => caches.match(req, { ignoreSearch: true }))
  );
});
