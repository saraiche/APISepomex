const {Router} = require('express');
const {
    direccionesGet, 
    obtenerTodasLasColonias,
    obtenerColoniasPorCodigoPostal,
    obtenerNombresColoniasPorCodigoPostal,
    obtenerEstados, 
    obtenerCodigoPostalPorColonia
    } = require('../controllers/direcciones');
const router = Router();
router.get('/', direccionesGet);
router.get('/colonias', obtenerTodasLasColonias);
router.get('/colonia/:cp', obtenerColoniasPorCodigoPostal);
router.get('/nombres/:cp', obtenerNombresColoniasPorCodigoPostal);
router.get('/estados', obtenerEstados);
router.get('/codigoPostal/:colonia', obtenerCodigoPostalPorColonia);

module.exports = router;