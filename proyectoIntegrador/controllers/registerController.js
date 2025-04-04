const usuario = require('../db/informacion');

const registerController = {
    index: function (req, res) {
        return res.render('register', 
            {datos: usuario,
        })
    }
};


module.exports = registerController;