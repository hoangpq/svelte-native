!function(){"use strict";const o=["client/chunk.97076eb5.js","client/chunk.d9a0ea20.js","client/chunk.659cf27e.js","client/chunk.f8d02012.js","client/chunk.c6c4f721.js","client/chunk.ae6fac0a.js","client/chunk.b96748b2.js","client/client.1dcee58e.js"].concat(["/service-worker-index.html","CNAME","favicon.png","fonts/fira-mono/fira-mono-latin-400.woff2","fonts/overpass/overpass-latin-100.woff2","fonts/overpass/overpass-latin-300.woff2","fonts/overpass/overpass-latin-400.woff2","fonts/overpass/overpass-latin-700.woff2","fonts/roboto/roboto-latin-400.woff2","fonts/roboto/roboto-latin-400italic.woff2","fonts/roboto/roboto-latin-500.woff2","fonts/roboto/roboto-latin-500italic.woff2","global.css","icons/arrow-right.svg","icons/check.svg","icons/chevron.svg","icons/collapse.svg","icons/download.svg","icons/dropdown.svg","icons/expand.svg","icons/flip.svg","icons/fork.svg","icons/link.svg","icons/save.svg","images/svelte-android-chrome-192.png","images/svelte-android-chrome-512.png","images/svelte-apple-touch-icon.png","images/svelte-mstile-150.png","images/twitter-card.png","logo.svg","logo2.svg","logos_combined.svg","manifest.json","media/app-store.png","media/google-play.png","media/nativescript-svelte-todo.gif","media/quick-start-screenshot.png","media/tns-success.png","media/todoapp/nativescript-svelte-todo2.gif","media/todoapp/todo-add-item.png","media/todoapp/todo-basic-design-1.png","media/todoapp/todo-basic-design-2.png","media/todoapp/todo-mark-complete.png","media/todoapp/todo-styled-button.png","media/todoapp/todo-styled-list1.png","media/todoapp/todo-styled-list2.png","media/todoapp/todo-styled-tabs.png","prism.css"]),e=new Set(o);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1551963513771").then(e=>e.addAll(o)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",o=>{o.waitUntil(caches.keys().then(async o=>{for(const e of o)"cache1551963513771"!==e&&await caches.delete(e);self.clients.claim()}))}),self.addEventListener("fetch",o=>{if("GET"!==o.request.method||o.request.headers.has("range"))return;const t=new URL(o.request.url);t.protocol.startsWith("http")&&(t.hostname===self.location.hostname&&t.port!==self.location.port||(t.host===self.location.host&&e.has(t.pathname)?o.respondWith(caches.match(o.request)):"only-if-cached"!==o.request.cache&&o.respondWith(caches.open("offline1551963513771").then(async e=>{try{const t=await fetch(o.request);return e.put(o.request,t.clone()),t}catch(t){const s=await e.match(o.request);if(s)return s;throw t}}))))})}();
