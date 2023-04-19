// Installe le service worker
self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('v1').then(function(cache) {
        return cache.addAll([
          '/',
          'image\téléchargement__1_-removebg-preview.png',
          'image\téléchargement__1_-removebg-preview.png',
          'image\téléchargement__1_-removebg-preview.png',
          'image\téléchargement__1_-removebg-preview.png'
          // Ajoutez ici les autres ressources que vous souhaitez mettre en cache
        ]);
      })
    );
  });
  
  // Gère les requêtes réseau et les réponses en cache
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/chemin/vers/votre-fichier-de-service-worker.js')
        .then(function(registration) {
          // Service worker enregistré avec succès
          console.log('ServiceWorker enregistré avec succès avec la portée : ', registration.scope);
        }, function(err) {
          // Erreur d'enregistrement du service worker
          console.log('Erreur lors de l\'enregistrement du ServiceWorker : ', err);
        });
    });
  }
  