const informacion = require('../db/informacion')

const headerLogueadoController = {
    index: function(req, res){
        return res.render('headerLogueado', 
            {usuario: informacion.usuarios,
                
        })
    },
}

module.exports = headerLogueadoController;