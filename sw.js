/* Pedro · O Contador — service worker
   Guarda apenas os arquivos do aplicativo. As despesas NUNCA passam por aqui.
   Ao publicar uma nova versão, aumente o número em VERSION. */
const VERSION='v2.1.0';
const CACHE='pedro-contador-'+VERSION;
const SHELL=['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./icons/icon-maskable-512.png','./icons/apple-touch-icon.png','./icons/icon.svg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n.startsWith('pedro-contador-')&&n!==CACHE).map(n=>caches.delete(n)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);if(u.origin!==location.origin)return;
 if(r.mode==='navigate'){e.respondWith(fetch(r).then(res=>{if(res.ok){const c=res.clone();caches.open(CACHE).then(x=>x.put('./index.html',c))}return res}).catch(()=>caches.match('./index.html')));return}
 e.respondWith(caches.match(r).then(c=>c||fetch(r).then(res=>{if(res.ok){const c2=res.clone();caches.open(CACHE).then(x=>x.put(r,c2))}return res})))});
