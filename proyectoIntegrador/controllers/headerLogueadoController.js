const usuario = require('../db/informacion')

const headerLogueadoController = {
    index: function(req, res){
        return res.render('headerLogueado', 
            {datos: usuario,
        })
    },
}

module.exports = headerLogueadoController;