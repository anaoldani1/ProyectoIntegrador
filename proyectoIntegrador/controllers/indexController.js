const informacion = require('../db/informacion');

const indexController = {
    index: function (req, res) {
       var estaLogueado = true; // Cámbialo a true si el usuario está logueado
       var usuario = null; // Asegurar que usuario siempre exista

        return res.render("index", { 
            estaLogueado: estaLogueado, 
            usuario: informacion.usuarios, 
            productos: informacion.productos,
        });
    }
};


module.exports = indexController;
