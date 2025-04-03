// const productos = require("../db/products");
 
//  const productController = {
//      detalle: function (req, res) {
//          const producto = productos[0];
//          res.render("detalle", { producto });
//      }
//  };
 
//  module.exports = productController;

const productos = require('../db/products'); // Importamos la lista de productos

const productController = {
    detalle: function (req, res) {
        var idBuscado = req.params.id; // Capturamos el ID de la URL
        var productoEncontrado = null; // Variable para almacenar el producto encontrado

        for (var i = 0; i < productos.length; i++) {
            if (productos[i].id == idBuscado) { // Comparamos el ID con los productos
                productoEncontrado = productos[i];
                break; // Salimos del bucle al encontrar el producto
            }
        }

        if (productoEncontrado === null) {
            return res.render('detalle', { detalle: null }); // Si no se encuentra el producto
        } else {
            return res.render('detalle', { detalle: productoEncontrado }); // Enviar producto a la vista
        }
    }
};

module.exports = productController;

