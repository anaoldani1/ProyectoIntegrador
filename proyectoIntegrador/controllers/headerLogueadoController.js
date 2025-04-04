const usuario = require('../db/users')

const headerLogueadoController = {
    index: function(req, res){
        return res.render('headerLogueado', 
            {datos: usuario,
        })
    },
}

module.exports = headerLogueadoController;