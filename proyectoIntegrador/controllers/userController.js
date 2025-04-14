const informacion = require('../db/informacion') // requiere la informadion de db (el objeto literal informacion)

const userController = { // creamos un objeto literal para luego exportar
    login: function(req, res){  
        return res.render('login', // datos enviados a login.ejs para renderizarlos
            {usuario: informacion.usuarios, 
            productos: informacion.productos,
        })
    },
    register: function (req, res) {
        return res.render('register', // datos enviados a registes.ejs para renderizarlos
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