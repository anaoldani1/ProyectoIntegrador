const usuario = require('../db/users')

const profileController = {
    index: function(req, res){
        return res.render('profile', 
            {datos: usuario,
        })
    },
}

module.exports = profileController;