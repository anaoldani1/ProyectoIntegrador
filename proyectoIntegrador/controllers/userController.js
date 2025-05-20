const informacion = require('../db/informacion') // requiere la informadion de db (el objeto literal informacion)
const db = require('../database/models');
const User = db.User;
const Product = db.Product;

let userController = {

    // Renderiza login.ejs con datos de usuarios y productos
    login: function (req, res) {
        User.findAll()
            .then(function (usuarios) {
                Product.findAll()
                    .then(function (productos) {
                        return res.render('login', {
                            usuario: usuarios,
                            productos: productos
                        });
                    })
                    .catch(function (error) {
                        return res.send(error);
                    });
            })
            .catch(function (error) {
                return res.send(error);
            });
    },

    // Renderiza register.ejs con datos de usuarios
    register: function (req, res) {
        User.findAll()
            .then(function (usuarios) {
                return res.render('register', {
                    datos: usuarios
                });
            })
            .catch(function (error) {
                return res.send(error);
            });
    },

    // Crea un nuevo usuario en la base de datos
    create: function (req, res) {
        User.create({
            email: req.body.email,
            contrasenia: req.body.contrasenia,
            fechaNac: req.body.fechaNac,
            documento: req.body.documento,
            foto: req.body.foto // esto debe ser un string, o configurar multer si es archivo
        })
            .then(function () {
                return res.redirect('/user/login');
            })
            .catch(function (error) {
                return res.send(error);
            });
    },

    // Renderiza profile.ejs con usuarios y productos
    profile: function (req, res) {
        User.findAll()
            .then(function (usuarios) {
                Product.findAll()
                    .then(function (productos) {
                        return res.render('profile', {
                            usuario: usuarios,
                            productos: productos
                        });
                    })
                    .catch(function (error) {
                        return res.send(error);
                    });
            })
            .catch(function (error) {
                return res.send(error);
            });
    }

};

module.exports = userController;