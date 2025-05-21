const informacion = require('../db/informacion') // requiere la informadion de db (el objeto literal informacion)
const db = require('../database/models');
const bcrypt = require('bcryptjs'); 

const userController = { // creamos un objeto literal para luego exportar

    //req y res son metodos que contienen objetos literales
    login: function(req, res){  
        return res.render('login', // datos enviados a login.ejs para renderizarlos
            {usuario: informacion.usuarios, 
            productos: informacion.productos,
        })
    },
    register: function (req, res) {
      if (req.session && req.session.user) {
        return res.redirect("/user/profile");
      }
    
      return res.render("register");
    },

    processRegister: function (req, res) {
      const name = req.body.name;
      const email = req.body.email;
      const password = req.body.password;
      const fechaNacimiento = req.body.fechaNacimiento;
      const documento = req.body.documento;
      const fotoPerfil = req.body.fotoPerfil;
    
      // Validaciones antes de consultar la DB
      if (!email) {
        return res.send("El email no puede estar vacío");
      }
    
      if (!password) {
        return res.send("La contraseña no puede estar vacía");
      }
    
      if (password.length < 3) {
        return res.send("La contraseña debe tener al menos 3 caracteres");
      }
    
      // Luego verificamos si ya existe el email
      db.User.findOne({ where: { email: email } })
        .then(function (userFound) {
          if (userFound) {
            return res.send("Este email ya está registrado");
          }
    
          const passHasheada = bcrypt.hashSync(password, 10);
    
          db.User.create({
            email: email,
            contrasenia: passHasheada,
            fechaNac: fechaNacimiento,
            documento: documento,
            foto: fotoPerfil,
          })
          .then(function () {
            return res.redirect('/user/login');
          })
          .catch(function (error) {
            return res.send("Error al crear usuario: " + error);
          });
        })
        .catch(function (error) {
          return res.send("Error al validar email: " + error);
        });
    },
    
    profile: function(req, res) {
      db.Comment.findAll({ ///busco todos los comentarios de la bd 
          include: [
              { association: "usuarios" }, // que me diga el usuario que comento
              { association: "productos" } //sobre que producto comento 
          ]
      })
      .then(function(comentarios) {
          db.User.findAll() /// busca todos los usuarios registrados 
          .then(function(usuarios) {
              db.Product.findAll()  //buca todos l;os productos disponibles 
              .then(function(productos) {
                  return res.render("profile", {  ///manda toda la info a la vista de profile 
                      comentarios: comentarios,
                      usuarios: usuarios,
                      productos: productos
                  });
              });
          });
      })
      .catch(function(error) {
          return res.send("Error al cargar el perfil: " + error);
      });
    },
}

module.exports = userController;
