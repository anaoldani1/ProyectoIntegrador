//Importa los datos de productos, usuarios y comentarios 
const db = require("../database/models");

//creo un objeto literal que contiene tres métodos: index, filtrarId, y add.
const productController= {
    index: function(req,res) {

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
        });

        return res.render("product");
    },

    //muestra un producto especifico
    filtrarId: function (req,res) {
        let idBuscado = req.params.id;
        db.Product.findByPk(idBuscado, {
            include: [{ association: "usuario" }]
        })
        .then(function (resultado) {
            return res.render("product", {product: resultado});
        });
    },
    
    add: function(req, res){
        if (req.session.user == undefined){
            return res.redirect("/user/login");
        } else {
            return res.render("product-add");
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
            return res.redirect("/user/profile");
        })
        .catch(function (error) {
            return res.send("Error al agregar producto" + error);
        });
    }, 

    agregarComentario: function (req, res) {
        //verifico si el usuario no esta logueado (no hay en session)
        if (!req.session.user) {
            return res.redirect("/user/login"); //si no esta log lo redirigo a login
        }
    
        //si esta logueado creo la tabla en base de datos 
        db.Comment.create({
            comentario: req.body.comentario, // Contenido del comentario enviado desde el formulario
            productosId: req.params.id, //Id del prod del comment
            usuariosId: req.session.user.id, //id del usuario que hace el comment 
            createdAt: new Date() //pongo la fecha q se hace el comment 
        })
        .then(function () {
            return res.redirect(`/productos/detalle/${req.params.id}`);
        })
        .catch(function (error) {
            return res.send("Error al agregar comentario: " + error);
        });
    }
}

module.exports = productController;
