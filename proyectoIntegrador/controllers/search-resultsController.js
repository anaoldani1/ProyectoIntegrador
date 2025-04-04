const producto = require('../db/informacion')

const searchResultsController = {
    index: function (req, res) {
        var estaLogueado = true; // Cámbialo a true si el usuario está logueado
        var usuario = null; // Asegurar que usuario siempre exista

        return res.render("search-results", { 
            estaLogueado: estaLogueado, 
            usuario: usuario 
        });

        
    }
};


module.exports = searchResultsController;
