const informacion = require('../db/informacion')

const userController = {
    login: function(req, res){
        return res.render('login', 
            {usuario: informacion.usuario,
                usuario: informacion.usuarios, 
                productos: informacion.productos,
        })
    },
    register: function (req, res) {
        return res.render('register', 
            {datos: informacion.usuarios,
        })
    },
    profile: function(req, res){
        return res.render('profile', // envio los datos a profile.ejs para renderizarlos
            {usuario: informacion.usuarios, 
            productos:  informacion.productos
        })
    },


};

module.exports = userController;