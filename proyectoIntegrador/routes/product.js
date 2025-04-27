// //// para el punto 10 de detalle////
const express = require("express");  //Importa (o "requiere") el módulo express para poder usarlo en este archivo.
const router = express.Router(); ///Crea un "router" que te permite definir rutas de forma modular y organizada.
const productController = require("../controllers/productController"); //requiere el controlador


//Cuando el usuario entra a /product/id/algún-numero, ejecuta la función filtrarId del productController, que busca y muestra el detalle de un producto específico.
router.get("/id/:id", productController.filtrarId);
//Cuando el usuario entra a /product/add, ejecuta la función add que muestra el formulario para agregar un nuevo producto.
router.get('/add', productController.add);

module.exports = router;

