////PARTE DE DETALLE--> 10
const informacion = require("../db/informacion")
const productController= {
    index: function(req,res) {// creamos un objeto literal para luego exportar

        //envia la informacion de productos a product.ejs para poder renderizarlo, es un array de objetos literales
            //req y res son metodos que contienen objetos literales
        return res.render("product", {
            info: informacion.productos
        }) 
    },

    filtrarId: function (req,res) {
        //envia a product.ejs el resultado que da el metodo filtrarId al darle el id que busca en la ruta, y la informacion de comentarios para poder renderizarlo
        let idBuscado= req.params.id;
        let ObjAnswer= informacion.filtrarId(idBuscado)
        
        return res.render("product",
        {
            detalle: ObjAnswer,
            comentarios: informacion.comentarios
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