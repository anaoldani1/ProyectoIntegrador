//Importa los datos de productos, usuarios y comentarios 
const db = require("../database/models");

//creo un objeto literal que contiene tres métodos: index, filtrarId, y add.
const productController= {
    index: function(req,res) {// creamos un objeto literal para luego exportar

        db.Productos.findAll({
            include: [
                {association: "usuario"}
            ]
        })
            .then(function(resultados){
                return res.render("product", {product: resultados});
                
            })
            .catch(function(error){
                return res.send(error);
            })
        //envia la informacion de productos a product.ejs para poder renderizarlo, es un array de objetos literales
            //req y res son metodos que contienen objetos literales
        return res.render("product", {
            //le pasa todos los productos..
            info: informacion.productos
        }) 

        
    },
    //muestra un producto especifico
    filtrarId: function (req,res) {
       
        let idBuscado = req.params.id
        db.Product.findByPk(idBuscado,{
            include: [{ association: "usuario" }]
        })

        .then(function (resultado) {
            return res.render("product",{product:resultado})
        })

        
    },
    
    add: function(req, res){
        if (req.session.user == undefined){ // si no esta logueado, no puede subir un producto entonces se va a login
            return res.redirect("/user/login") 
        }else{
            return res.render("product-add")
        }
        
    },

    processAdd: function(req,res){
        db.Product.create({
            imagen: req.body.imagen,
            nombreProducto: req.body.nombre,
            descripcion: req.body.descripcion,
            usuarioId: req.session.user.id
        })
        .then(function(){
            return res.redirect("/user/profile")

        })
        .catch(function (error) {
            return res.send("Error al agregar producto" + error);
          });
    }
}

module.exports = productController;