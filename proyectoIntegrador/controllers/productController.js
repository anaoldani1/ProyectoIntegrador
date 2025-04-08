////PARTE DE DETALLE--> 10
const informacion = require("../db/informacion")
const productController= {
    index: function(req,res) {
        return res.render("product", {
            info: informacion.productos
        }) 
    },

    filtrarId: function (req,res) {
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