// PatoolaFam Service Worker 🌼
// Permite que o app funcione mesmo sem internet (cache offline simples)

const CACHE_NAME = "patoolafam-cache-v1";
const URLS_TO_CACHE = [
  "/", // página inicial
  "/index.html",
  "/manifest.json",
  "/icons/icon-192.png",
  "/icons/icon-512.png"
  // Se quiser, pode adicionar mais arquivos (ex: /css/style.css, /js/main.js)
];

// 🪄 Instala o service worker e guarda os arquivos no cache
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Cache inicial criado 🎉");
      return cache.addAll(URLS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// ♻️ Atualiza o cache quando houver nova versão
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log("Removendo cache antigo:", key);
            return caches.delete(key);
          }
        })
      );
    }
