const usuario = require('../db/users');

const indexController = {
    index: function (req, res) {
        var estaLogueado = true; // Cámbialo a true si el usuario está logueado
        var usuario = null; // Asegurar que usuario siempre exista

        return res.render("index", { estaLogueado: estaLogueado, usuario: usuario });
    }
};


module.exports = indexController;
