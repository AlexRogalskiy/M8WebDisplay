const cacheName="fecee07b666e49d9e564a4f68c146ae4";self.addEventListener("install",(e=>{e.waitUntil(caches.open(cacheName).then((e=>e.addAll([".","icon.png","app.webmanifest"]))))})),self.addEventListener("activate",(e=>e.waitUntil(caches.keys().then((e=>Promise.all(e.filter((e=>e!==cacheName)).map((e=>caches.delete(e))))))))),self.addEventListener("fetch",(e=>e.respondWith(caches.match(e.request).then((a=>a||fetch(e.request)))))),self.addEventListener("message",(e=>{"skipWaiting"===e.data.action&&self.skipWaiting()}));
