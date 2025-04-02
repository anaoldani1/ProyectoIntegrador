//// para el punto 10 de detalle////
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/detalle", productController.detalle);

module.exports = router;

