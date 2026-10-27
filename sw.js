// Minimaler Service Worker (fuer 'App installieren'); keine Zwischenspeicherung von Videos.
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', e => {});
