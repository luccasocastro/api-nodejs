const express = require('express');
const router = express.Router();

const CarroController = require('./controllers/CarroController');

router.get('/carros', CarroController.findAll);
router.get('/carro/:codigo', CarroController.findById);
router.post('/carro', CarroController.insert);
router.put('/carro/:codigo', CarroController.update);
router.delete('/carro/:codigo', CarroController.delete);

module.exports = router;