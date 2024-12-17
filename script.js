// Obtener los elementos del DOM
const presentacion = document.querySelector('.presentacion');
const contenido = document.querySelector('.contenido');
const btnIniciar = document.querySelector('#btn-iniciar');

// Agregar evento al botón de iniciar
btnIniciar.addEventListener('click', () => {
  presentacion.style.display = 'none';
  contenido.style.display = 'block';
});

// Obtener los botones de cada habilidad
const habilidades = document.querySelectorAll('.habilidad');

habilidades.forEach((habilidad, index) => {
  const btn = habilidad.querySelector('button');
  const informacion = habilidad.querySelector('.informacion');

  btn.addEventListener('click', () => {
    informacion.style.display = informacion.style.display === 'block' ? 'none' : 'block';
  });
});