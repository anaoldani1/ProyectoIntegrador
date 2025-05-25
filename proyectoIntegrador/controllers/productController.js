//Importa los datos de productos, usuarios y comentarios 
const db = require("../database/models");

//creo un objeto literal que contiene todos los metodos 
const productController= {

    //metodo que muestra todos los productos 
    index: function(req,res) {

        db.Productos.findAll({ //busco en la base de datos TODOS los productos incluyendo la info del usuario que ls publico 
            include: [
                {association: "usuario"} // Incluye el modelo relacionado: el usuario creador
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

    //muestra un producto especifico por id 
    filtrarId: function (req,res) {
        let idBuscado = req.params.id; //capturo el id de la url 

        //busco el prod x su id y tmb incluyo el usuario q lo creo 
        db.Product.findByPk(idBuscado, {
            include: [{ association: "usuario" }]
        })
        .then(function (resultado) {
            // Si lo encuentra, lo muestra en la vista product
            return res.render("product", {product: resultado});
        });
    },
    
    //muesttro form para agregar nuevo producto 
    add: function(req, res){
        if (req.session.user == undefined){
            return res.redirect("/user/login");
        } else {
            return res.render("product-add");
        }
    },

    //form para ceracion de un nuevo producto 
    processAdd: function(req,res){
        db.Product.create({
            // Crea un nuevo producto en la db con los datos del formulario
            imagen: req.body.imagen,
            nombreProducto: req.body.nombre,
            descripcion: req.body.descripcion,
            usuarioId: req.session.user.id // id del usaurio logueado q es el creador del producto 
        })
        .then(function(){
             // Si se creó correctamente, redirige al perfil del usuario
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
