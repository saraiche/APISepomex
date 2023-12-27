const{response} = require('express');

const direccionesGet = (req, res = response) => {
    res.json({
        msg:" api GET desde controlador"
    });
}

const xmlLoader = require('../utils/xmlLoader');

// Llamar a la función de carga al inicio de la aplicación
xmlLoader.cargarDatosDesdeXML();

// En tus funciones de controlador, puedes utilizar las funciones de xmlLoader para acceder a los datos.
function obtenerTodasLasColonias(req, res) {
  const todasLasColonias = xmlLoader.obtenerTodasLasColonias();
  res.json(todasLasColonias);
}

module.exports = {
    direccionesGet,
    obtenerTodasLasColonias
};