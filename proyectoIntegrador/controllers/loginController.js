const usuario = require('../db/users')

const loginController = {
    index: function(req, res){
        return res.render('login', 
            {datos: usuario,
        })
    },
};

module.exports = loginController;