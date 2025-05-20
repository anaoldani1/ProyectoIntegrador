const informacion = require('../db/informacion') // requiere la informadion de db (el objeto literal informacion)
let db = require("../database/models");

const userController = { // creamos un objeto literal para luego exportar

    //req y res son metodos que contienen objetos literales
    login: function(req, res){  
        return res.render('login', // datos enviados a login.ejs para renderizarlos
            {usuario: informacion.usuarios, 
            productos: informacion.productos,
        })
    },
    register: function (req, res) {
        return res.render('register', // datos de usuario enviados a registes.ejs para renderizarlos
            {datos: informacion.usuarios,
        })
    },
    profile: function(req, res){
        db.Comment.findAll({
            include:[{association: "usuarios"}, {association: "productos"}]
        })
        .then(function(resultados){
            return res.render("profile", {datos: resultados});
        })
        .catch(function(error){
            return res.send(error);
        })
    },

};

module.exports = userController;
