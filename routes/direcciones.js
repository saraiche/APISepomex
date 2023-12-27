const {Router} = require('express');
const {
    direccionesGet, 
    obtenerTodasLasColonias
    } = require('../controllers/direcciones');
const router = Router();
router.get('/', direccionesGet);
router.get('/colonias', obtenerTodasLasColonias);
module.exports = router;