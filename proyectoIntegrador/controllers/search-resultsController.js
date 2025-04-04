const informacion = require('../db/informacion')

const searchResultsController = {
    index: function (req, res) {
        var estaLogueado = true; // Cámbialo a true si el usuario está logueado
        var usuario = null; // Asegurar que usuario siempre exista

        return res.render("search-results", { 
            estaLogueado: estaLogueado, 
            producto0: informacion.productos[0],
            producto1: informacion.productos[1],
            producto2: informacion.productos[2]

        });


    },
    results: function (req,res) {

    }

};


module.exports = searchResultsController;
