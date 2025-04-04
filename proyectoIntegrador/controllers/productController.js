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
            detalle: ObjAnswer
        })
    }
}

module.exports= productController