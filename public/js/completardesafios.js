// Elementos del DOM
const areaJuego = document.getElementById('area-juego');
const desafioTexto = document.getElementById('desafio');
const botonDesafio = document.getElementById('boton-desafio');
const inputDesafio = document.getElementById('input-desafio');
const puntajeElemento = document.getElementById('puntaje');
const tiempoElemento = document.getElementById('tiempo');
const btnEmpezar = document.getElementById('btn-empezar');

if (btnEmpezar) {
  btnEmpezar.addEventListener('click', () => {
    window.location.href = 'juego.html'; // Redirige al archivo del juego
  });
}


// Variables del juego
let tiempo = 30;
let puntaje = 0;
let juegoActivo = true;
let intervaloTiempo;

// Función para iniciar el juego
function iniciarJuego() {
  puntaje = 0;
  tiempo = 30;
  juegoActivo = true;
  puntajeElemento.textContent = puntaje;
  tiempoElemento.textContent = tiempo;

  // Iniciar el temporizador
  intervaloTiempo = setInterval(() => {
    tiempo--;
    tiempoElemento.textContent = tiempo;

    if (tiempo <= 0) {
      terminarJuego();
    }
  }, 1000);

  generarDesafio();
}

// Función para generar un desafío aleatorio
function generarDesafio() {
  if (!juegoActivo) return;

  // Elegir un desafío aleatorio
  const tipoDesafio = Math.random() < 0.5 ? 'clic' : 'escribir';

  if (tipoDesafio === 'clic') {
    desafioTexto.textContent = 'Haz clic en el botón lo más rápido posible.';
    botonDesafio.style.display = 'inline-block';
    inputDesafio.style.display = 'none';

    botonDesafio.onclick = () => {
      puntaje += 10;
      puntajeElemento.textContent = puntaje;
      botonDesafio.style.display = 'none';
      generarDesafio(); // Generar el próximo desafío
    };
  } else {
    const letraAleatoria = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // Letra A-Z
    desafioTexto.textContent = `Escribe la letra "${letraAleatoria}" en el cuadro.`;
    inputDesafio.style.display = 'inline-block';
    botonDesafio.style.display = 'none';
    inputDesafio.value = '';

    inputDesafio.oninput = () => {
      if (inputDesafio.value.toUpperCase() === letraAleatoria) {
        puntaje += 10;
        puntajeElemento.textContent = puntaje;
        inputDesafio.style.display = 'none';
        generarDesafio(); // Generar el próximo desafío
      }
    };
  }
}

// Función para terminar el juego
function terminarJuego() {
  clearInterval(intervaloTiempo);
  juegoActivo = false;
  desafioTexto.textContent = `¡Fin del juego! Puntuación final: ${puntaje}`;
  botonDesafio.style.display = 'none';
  inputDesafio.style.display = 'none';
}

// Iniciar el juego al cargar la página
document.addEventListener('DOMContentLoaded', iniciarJuego);
