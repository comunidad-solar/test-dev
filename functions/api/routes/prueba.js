const { Router } = require('express');
const pruebaDev = require('../controllers/prueba');

const router = Router();


router.get('/', pruebaDev); //ruta 1
//ruta 2
//ruta 3

module.exports = router;
