self.addEventListener('install', (e) => {
  console.log('[Service Worker] Installed');
});

self.addEventListener('fetch', (e) => {
  // يضمن جلب البيانات المباشرة دائماً
  e.respondWith(fetch(e.request));
});