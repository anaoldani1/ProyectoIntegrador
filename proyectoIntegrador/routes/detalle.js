const express = require('express');
const router = express.Router();
const detalleController = require('../controllers/detalleController');

router.get("/", detalleController.detalle)

router.get('/detalle/id/:id', detalleController.filtrarId);

module.exports = router;