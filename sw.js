const CACHE_NAME='pulso-ugt-v1';
const ASSETS=['./','./index.html','./manifest.json','./utilities.css','./pulso.css','./install.js','./icon-192.png','./icon-512.png','./icon-maskable-512.png','./favicon.png','./assets/ugt.png','./assets/sanir.jpg','./assets/pulso.svg'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('pulso-ugt-')&&key!==CACHE_NAME).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',event=>{if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;event.respondWith(caches.open(CACHE_NAME).then(cache=>cache.match(event.request)).then(response=>response||fetch(event.request)));});
