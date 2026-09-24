const mensaje = document.getElementById('mensaje');
mensaje.textContent = "Titulo Actualizado con exito";
mensaje.style.color = "darkred";

const link = document.getElementById('link');
link.setAttribute('href', 'https://www.google.com');
link.classList.add('boton')