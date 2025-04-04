const informacion = require('../db/informacion') //requiero la informacion sobre productos

let productAddController = {
    index: function(req, res){
        return res.render('product-add', // la envio a productadd.ejs para que pueda renderizarse
            {productos: informacion.productos,
                usuario: informacion.usuarios
        })
    },
}

module.exports = productAddController; //exporto el controlador para en poder configurar los sufijos en el ruteador