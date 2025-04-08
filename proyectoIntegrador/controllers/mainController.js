const informacion = require('../db/informacion');

const mainController = {
    index: function (req, res) {
        return res.render("index", { 
            productos: informacion.productos,
        });
    },
    searchResults: function (req, res) {
        return res.render("search-results", { 
            productos: informacion.productos,
        });
    },

};

module.exports = mainController;
