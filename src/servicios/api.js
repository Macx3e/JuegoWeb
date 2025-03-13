// Función para simular una obtención de datos (ejemplo: puntuaciones del juego)
export const obtenerPuntuaciones = async () => {
    return [
      { jugador: 'Maximiliano', puntos: 150 },
      { jugador: 'Sofía', puntos: 200 },
      { jugador: 'Luis', puntos: 120 }
    ];
  };
  
  // Función para simular el envío de datos (ejemplo: guardar puntuación del jugador)
  export const guardarPuntuacion = async (puntuacion) => {
    // Simula un retraso de procesamiento
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Puntuación guardada:', puntuacion);
        resolve({ exito: true });
      }, 1000);
    });
  };
  