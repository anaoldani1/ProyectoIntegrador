const usuario = require('../db/users');

let userController = {
    nombreDeUsuario: function(req,res){
        return res.render('header', {
            datos: usuario
        })
    },


}

module.exports = userController;