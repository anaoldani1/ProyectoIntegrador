const productos = require("../db/products");

const productController = {
    detalle: function (req, res) {
        const producto = productos[0];
        res.render("detalle", { producto });
    }
};

module.exports = productController;
