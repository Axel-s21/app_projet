// Obtenir les données GPS de votre PWA
var latitude = position.coords.latitude;
var longitude = position.coords.longitude;

// Convertir les données GPS en une chaîne de caractères formatée
var data = "LAT:" + latitude + ";LON:" + longitude + ";";

// Ouvrir la connexion série avec l'Arduino
var serial = new SerialPort('/dev/ttyUSB0', { baudRate: 9600 });

// Envoyer les données GPS à l'Arduino
serial.write(data, function(err) {
  if (err) {
    console.error('Erreur d\'envoi des données GPS à l\'Arduino:', err);
  } else {
    console.log('Données GPS envoyées à l\'Arduino:', data);
  }
});

// Fermer la connexion série avec l'Arduino lorsque vous avez terminé
serial.close();
