const informacion = require('../db/informacion')

const loginController = {
    index: function(req, res){
        return res.render('login', 
            {usuario: informacion.usuario,
                usuario: informacion.usuarios, 
                productos: informacion.productos,
        })
    },
};

module.exports = loginController;