var formData = new FormData();
formData.append("bio", "None"); 
var fakeImage = new Blob(["imagen_modificada"], { type: "image/jpeg" });
formData.append("profile_pic", fakeImage, "hacker.jpg");

// Recuerda poner la ruta correcta de la petición original aquí
fetch('/ruta_del_perfil', {
  method: 'POST',
  body: formData
});