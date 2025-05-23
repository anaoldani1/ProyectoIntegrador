const informacion = require('../db/informacion') // requiere la informadion de db (el objeto literal informacion)
const db = require('../database/models');
const bcrypt = require('bcryptjs'); 

const userController = { // creamos un objeto literal para luego exportar

    //req y res son metodos que contienen objetos literales
    login: function(req, res){  
        if (req.session.user){ // si ya esta logueado no puede entrar a loguearse de nuevo
          return res.redirect("/user/profile")
        }
        return res.render('login', // datos enviados a login.ejs para renderizarlos
            {usuario: informacion.usuarios, 
            productos: informacion.productos,
        })
    },

    processLogin: function (req, res) {
      const email = req.body.email
      const password = req.body.contrasenia

      db.User.findOne({ where: { email: email } })
      .then(function (user) {
        if (!user) {
          return res.send("Error, no existe una cuenta con este email.")
        }

        if (!bcrypt.compareSync(password, user.contrasenia)){
          return res.send("Error, contrasenia incorrecta")
        }

        req.session.user = user

        if (req.body.checkbox) {
          res.cookie("recordame", user.email, { maxAge: 1000 * 60 * 5});
        }

        return res.redirect("/user/profile");

      })
      .catch(function (err) {
        return res.send("Error");
      });

    
    },

    ///CONTROLER PARA REGISTER 
    register: function (req, res) {
      if (req.session && req.session.user) { // verifico si el usuario esta logueado 
        return res.redirect("/user/profile"); // si esta logueado lo redirecciono a su perfil 
      }
    
      return res.render("register"); // si no esta logueado renderizo la vista del registro 
    },

    processRegister: function (req, res) {
      ///traigo los datos enviados del formulario de register.ejs
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
    
      // Luego verificamos si ya existe un usuario con  el email
      db.User.findOne({ where: { email: email } })
        .then(function (userFound) {
          if (userFound) {  // si ya esta registrado lo doy mensaje 
            return res.send("Este email ya está registrado");
          }
    
          const passHasheada = bcrypt.hashSync(password, 10);  //encripto la contra 
    
          // creo nuevo usuario en la base de datos 
          db.User.create({
            email: email,
            contrasenia: passHasheada,
            fechaNac: fechaNacimiento,
            documento: documento,
            foto: fotoPerfil,
          })
          .then(function () {
            return res.redirect('/user/login');  // si se crea redirijo a login 
          })
          .catch(function (error) {
            return res.send("Error al crear usuario: " + error);
          });
        })
        .catch(function (error) {
          return res.send("Error al validar email: " + error);
        });
    },
    
    profile: function(req,res){
        res.render("profile")
    },

    logout: function(req, res){
        req.session.destroy()
        res.clearCookie("")
        return res.redirect("/users/login")
    }
}

module.exports = userController;
