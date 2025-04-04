const products = require('../db/users');

const registerController = {
    index: function (req, res) {
        return res.render('register', 
            {datos: usuario,
        })
    }
};


module.exports = registerController;