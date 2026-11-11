/* Service worker: network-first, cache sebagai cadangan saat offline. Naikkan nomor CACHE tiap rilis. */
const CACHE = "berdua-v1";
const ASET = ["index.html", "app.html", "firebase-config.js", "manifest.json", "assets/css/app.css", "assets/js/core.js", "assets/js/app.js",
  "assets/js/beranda.js", "assets/js/kenangan.js", "assets/js/chat.js", "assets/js/lokasi.js", "assets/js/kita.js",
  "assets/vendor/leaflet.js", "assets/vendor/leaflet.css", "assets/vendor/bootstrap-icons.min.css", "assets/vendor/fonts/bootstrap-icons.woff2", "assets/img/icon-192.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASET).catch(() => {})).then(() => self.skipWaiting())) });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== CACHE).map(x => caches.delete(x)))).then(() => self.clients.claim())) });
self.addEventListener("fetch", e => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== "GET" || u.origin !== location.origin) return; // Firebase, peta, font: langsung ke jaringan
  e.respondWith(fetch(r).then(res => { const cp = res.clone(); caches.open(CACHE).then(c => c.put(r, cp)); return res }).catch(() => caches.match(r).then(m => m || caches.match("app.html"))));
});
