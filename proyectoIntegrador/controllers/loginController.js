const informacion = require('../db/informacion')

const loginController = {
    index: function(req, res){
        return res.render('login', 
            {usuario: informacion.usuario,
        })
    },
};

module.exports = loginController;