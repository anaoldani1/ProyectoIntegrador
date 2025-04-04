const usuario = require('../db/informacion')

const loginController = {
    index: function(req, res){
        return res.render('login', 
            {datos: usuario,
        })
    },
};

module.exports = loginController;