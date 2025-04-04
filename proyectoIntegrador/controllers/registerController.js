const informacion = require('../db/informacion');

const registerController = {
    index: function (req, res) {
        return res.render('register', 
            {datos: informacion.usuarios,
        })
    }
};

module.exports = registerController;