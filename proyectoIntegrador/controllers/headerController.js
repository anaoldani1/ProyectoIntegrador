const usuario = require('../db/users')

const headerController = {
    index: function(req, res){
        return res.render('headerLogueado', 
            {datos: usuario,
        })
    },
}

module.exports = headerController;