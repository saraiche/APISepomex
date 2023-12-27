const xmlLoader = require('../utils/xmlLoader');
const{response} = require('express');
const direccionesDAO = require('../dao/DireccionesDAO');

const direccionesGet = (req, res = response) => {
    res.json({
        msg:" api GET desde controlador"
    });
}

function obtenerTodasLasColonias(req, res) {
  const todasLasColonias = xmlLoader.obtenerTodasLasColonias();
  res.status(200).json(todasLasColonias);
}

const obtenerEstados = (req, res = response) => {
    try{
        const estados = direccionesDAO.obtenerEstados();
        res.status(200).json(estados);
    } catch(error){
        console.error(error);
        res.status(500).json({message: "No fue posible obtener los estados en este momento"});
    }
}

const obtenerColoniasPorCodigoPostal = (req, res = response) => {
    const {cp} = req.params;
    try{
        const colonias = direccionesDAO.obtenerColoniasPorCodigoPostal(cp);
        res.status(200).json(colonias);
    } catch(error){
        console.error(error);
        res.status(500).json({message: "No fue posible obtener las colonias en este momento"});
    }
}

const obtenerNombresColoniasPorCodigoPostal = (req, res = response) => {
    const {cp} = req.params;
    try{
        const colonias = direccionesDAO.obtenerNombresColoniasPorCodigoPostal(cp);
        res.status(200).json(colonias);
    } catch(error){
        console.error(error);
        res.status(500).json({message: "No fue posible obtener las colonias en este momento"});
    }
}

const obtenerCodigoPostalPorColonia = (req, res = response) => {
    const{colonia} = req.params;
    try{
        const codigoPostal = direccionesDAO.obtenerCodigoPostalPorColonia(colonia);
        res.status(200).json(codigoPostal);
    } catch(error){
        console.error(error);
        res.status(500).json({message: "No fue posible obtener el código postal en este momento"});
    }
}

module.exports = {
    direccionesGet,
    obtenerTodasLasColonias,
    obtenerColoniasPorCodigoPostal,
    obtenerNombresColoniasPorCodigoPostal,
    obtenerEstados,
    obtenerCodigoPostalPorColonia
};