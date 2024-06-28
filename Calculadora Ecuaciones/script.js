//MOSTRAR IMAGENES
let currentImage = null;

function mostrarImagen(id) {
  // Ocultar todas las imágenes
  document.getElementById('img-biseccion').style.display = 'none';
  document.getElementById('img-puntoFijo').style.display = 'none';
  document.getElementById('img-newtonRaphson').style.display = 'none';
  document.getElementById('img-secante').style.display = 'none';
  document.getElementById('img-raicesMultiples').style.display = 'none';
  document.getElementById('img-falsaPosicion').style.display = 'none';

  // Mostrar la imagen
  document.getElementById(id).style.display = 'block';
}


function mostrarBiseccion() {
  mostrarImagen('img-biseccion');
}


function mostrarNewtonRaphson() {
  mostrarImagen('img-newtonRaphson');
}


function mostrarPuntoFijo() {
  mostrarImagen('img-puntoFijo');
}


function mostrarSecante() {
  mostrarImagen('img-secante');
}

function mostrarRaicesMultiples() {
  mostrarImagen('img-raicesMultiples');
}

function mostrarFalsaPosicion() {
  mostrarImagen('img-falsaPosicion');
}


