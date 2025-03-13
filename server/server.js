const express = require('express');
const fs = require('fs');
const app = express();
const port = 3001;

// Middleware para parsear JSON
app.use(express.json());

// Ruta base para verificar que el servidor está corriendo
app.get('/', (req, res) => {
  res.send('Servidor del Juego Web está en funcionamiento');
});

// Ruta para obtener puntuaciones desde un archivo JSON simulado
app.get('/puntuaciones', (req, res) => {
  fs.readFile('./server/datos.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al leer las puntuaciones' });
    }
    const puntuaciones = JSON.parse(data);
    res.json(puntuaciones);
  });
});

// Ruta para guardar una nueva puntuación
app.post('/puntuaciones', (req, res) => {
  const nuevaPuntuacion = req.body;

  // Leer el archivo de puntuaciones existente
  fs.readFile('./server/datos.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al guardar la puntuación' });
    }

    const puntuaciones = JSON.parse(data);
    puntuaciones.push(nuevaPuntuacion);

    // Guardar el archivo con la nueva puntuación añadida
    fs.writeFile('./server/datos.json', JSON.stringify(puntuaciones, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ mensaje: 'Error al guardar la puntuación' });
      }
      res.status(201).json({ mensaje: 'Puntuación guardada correctamente' });
    });
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
