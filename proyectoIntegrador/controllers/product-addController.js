const products = require('../db/products')

let productAddController = {
    index: function(req, res){
        return res.render('product-add', 
            {datos: products,
        })
    },
}

module.exports = productAddController;