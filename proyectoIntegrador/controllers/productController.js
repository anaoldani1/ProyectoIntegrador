////PARTE DE DETALLE--> 10

//Importa los datos de productos, usuarios y comentarios 
const informacion = require("../db/informacion")

//creo un objeto literal que contiene tres métodos: index, filtrarId, y add.
const productController= {
    index: function(req,res) {
        //envia la informacion de productos a product.ejs para poder renderizarlo, es un array de objetos literales
        return res.render("product", {
            //le pasa todos los productos
            info: informacion.productos
        }) 
    },

    filtrarId: function (req,res) {
        //Busca un producto específico basado en el id que recibe en la URL (req.params.id)
        let idBuscado= req.params.id; //Agarra el id que viene en la URL.
        let ObjAnswer= informacion.filtrarId(idBuscado) //Usa  función que está en informacion.js filtrarId. que busca en la lista cual tiene ese id y lo duvelve
        
        return res.render("product",
        {
            detalle: ObjAnswer, //le manda el producto q encontramos
            comentarios: informacion.comentarios //los comentarios q vienem de ahi
        })
    },

    add: function(req, res){
        return res.render("product-add", {// la envio a productadd.ejs para que pueda renderizarse
            productos: informacion.productos,
            usuario: informacion.usuarios
        })
    }


}

module.exports = productController;