"use strict";
// v.1.1
/** @type {ServiceWorkerGlobalScope} */
const SW = self;
const DIR = "/Deltarealm-b64-keys/", FL = "index.html";
const V = "v.1.2.0", main = new RegExp(DIR + "?(?:" +
  FL.replace(/\./g, "\\.") + ")?(?:#[^?]*)?($|\\?[^=]*)");
SW.oninstall = ev => {
  ev.waitUntil((async () => {
    const o = await caches.open(V);
    await o.add(DIR + FL);
  })());
};

const updateCached = () => {
  caches.open(V).then(o => {
    fetch(DIR + FL).then(r => {
      r.ok && o.put(DIR + FL, r);
    }).catch(console.debug);
  });
};

const nofetchOptions = ["?offline", "?online", "?nofetch"];
/** @param {FetchEvent} ev */
SW.onfetch = ev => {
  const reg = main.exec(ev.request.url);
  if (reg !== null && nofetchOptions.includes(reg[1])) {
    updateCached();
    ev.respondWith((async () => {
      return await caches.match(DIR + FL);
    })());
  }
};

SW.onactivate = event => {
// from MNDs: https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker
// _API/Using_Service_Workers#service_worker_navigation_preload
//   event.waitUntil(SW.registration?.navigationPreload.enable());
  caches.keys().then(ks => ks.map(e => e !== V && caches.delete(e)));
};

console.log("the service-worker.js is there");
