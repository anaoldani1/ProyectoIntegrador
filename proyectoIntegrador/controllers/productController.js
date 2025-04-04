///const productos = require("../db/products");
 
///const productController = {
//      detalle: function (req, res) {
//          const producto = productos[0];
//          res.render("detalle", { producto });
//      }
//  };
 
//  module.exports = productController;

const products = require('../db/products'); // Importamos la lista de productos

const productController = {
    index: function(req, res){
        return res.render('product', 
            {datos: products,
        })
    },
};

module.exports = productController;