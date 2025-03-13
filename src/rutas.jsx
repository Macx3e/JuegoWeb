import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Juego from './Juego';

const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Bienvenido al Juego Web</h1>} />
        <Route path="/juego" element={<Juego />} />
      </Routes>
    </Router>
  );
};

export default Rutas;
