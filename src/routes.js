const express = require('express');
const router = express.Router();

const CarroController = require('./controllers/CarroController');

router.get('/carros', CarroController.findAll);
router.get('/carro/:codigo', CarroController.findById);

module.exports = router;