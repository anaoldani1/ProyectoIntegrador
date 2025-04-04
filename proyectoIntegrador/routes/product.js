// //// para el punto 10 de detalle////
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.index);
router.get("/id/:id", productController.filtrarId);

module.exports = router;

