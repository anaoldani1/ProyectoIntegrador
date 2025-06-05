//Importa los datos de productos, usuarios y comentarios 
const db = require("../database/models");

//creo un objeto literal que contiene todos los metodos 
const productController = {

    //metodo que muestra todos los productos 
    index: function (req, res) {
        db.Productos.findAll({ //busco en la base de datos TODOS los productos incluyendo la info del usuario que los publico 
            include: [
                { association: "usuario" } // Incluye el modelo relacionado: el usuario creador
            ]
        })
            .then(function (resultados) {
                return res.render("product", { product: resultados }); //renderizo las visyas 
            })
            .catch(function (error) {
                return res.send(error);
            });
    },

    //muestra un producto especifico por id 
    filtrarId: function (req, res) {
        let idBuscado = req.params.id;  // toma el ID del producto desde la URL (/productos/detalle/5)


        db.Product.findByPk(idBuscado, {  // Buscamos el producto por su ID en la base de datos
            include: [
                { association: "usuario" },// Incluimos al usuario que publicó el producto
                {
                    // Incluimos los comentarios asociados a ese producto
                    // Y por cada comentario, también incluimos al usuario que lo escribió
                    association: "comentarios",
                    include: [{ association: "usuarios" }]
                }
            ],
            // Ordenamos los comentarios de más nuevos a más viejos usando createdAt
        })
            // Si se encuentra el producto y todo sale bien:
            .then(function (resultado) {
                // Renderizamos la vista "product-detail.ejs"
                // Enviamos el producto y los datos de sesión para saber si el usuario está logueado


                return res.render("product", {
                    product: resultado,
                
                });
            })
            .catch(function (error) {
                return res.send(error);
            });
    },

    //muestro form para agregar nuevo producto 
    add: function (req, res) {
        if (req.session.user == undefined) {
            return res.redirect("/user/login");
        } else {
            return res.render("product-add");
        }
    },

    //form para crear un nuevo producto 
    processAdd: function (req, res) {
        db.Product.create({
            // Crea un nuevo producto en la db con los datos del formulario
            imagen: req.body.imagen,
            nombreProducto: req.body.nombre,
            descripcion: req.body.descripcion,
            usuarioId: req.session.user.id // id del usaurio logueado q es el creador del producto 
        })
            .then(function () {
                // Si se creó correctamente, redirige al perfil del usuario
                return res.redirect("/user/profile");
            })
            .catch(function (error) {
                return res.send("Error al agregar producto" + error);
            });
    },

    //procesa la creación de un comentario sobre un producto
    agregarComentario: function (req, res) {
        //verifico si el usuario no esta logueado (no hay en session)
        if (!req.session.user) {
            return res.redirect("/user/login"); //si no esta log lo redirigo a login
        }

        //si esta logueado creo la tabla en base de datos 
        db.Comment.create({
            comentario: req.body.comentario,  // Contenido del comentario enviado desde el formulario
            productosId: req.params.id, //Id del prod del comment
            usuariosId: req.session.user.id, //id del usuario que hace el comment 
            createdAt: req.session.createdAt
        })
            .then(function () {
                return res.redirect(`/product/id/${req.params.id}`);
            })
            .catch(function (error) {
                return res.send("Error al agregar comentario: " + error);
            });
    }
};

module.exports = productController