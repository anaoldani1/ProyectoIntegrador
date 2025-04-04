const informacion = require('../db/informacion') // traigo el objeto literal con los datos de usuario

const profileController = {
    index: function(req, res){
        return res.render('profile', // envio los datos a profile.ejs para renderizarlos
            {usuario: informacion.usuario, 
        })
    },
}

module.exports = profileController; //exporto el controlador para en poder configurar los sufijos en el ruteador