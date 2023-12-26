const {Router} = require('express');
const {direccionesGet} = require('../controllers/direcciones');
const router = Router();
router.get('/', direccionesGet);
module.exports = router;