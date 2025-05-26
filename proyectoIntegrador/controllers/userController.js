const db = require('../database/models');
const bcrypt = require('bcryptjs'); 

const userController = { // creamos un objeto literal para luego exportar

    //req y res son metodos que contienen objetos literales
    login: function(req, res){  
        if (req.session.user != undefined){ // si ya esta logueado no puede entrar a loguearse de nuevo
          return res.redirect("/user/profile")
        }
        return res.render('login');
    },

    processLogin: function (req, res) {
      
      let userInfo={
        email : req.body.email,
        password : req.body.contrasenia,
        recordarme:req.body.checkbox
      }
      
      db.User.findOne({ where: { email: userInfo.email } })
     
      .then(function (resultado) {
        
        if (!resultado) {
          return res.send("Error, no existe una cuenta con este email.")
        }
   
        if (!bcrypt.compareSync(userInfo.password, resultado.contrasenia)){
          return res.send("Error, contrasenia incorrecta")
        }

        req.session.user = resultado

      if (userInfo.recordarme != undefined) {
        res.cookie("recordame", resultado, { maxAge: 1000 * 60 * 5}); ///resultado.email
      }
      return res.redirect("/user/profile");
    })
    .catch(function (err) {
      return res.send("Error" + err);
    });

    },

    ///CONTROLER PARA REGISTER 
    register: function (req, res) {
      if (req.session.user != undefined) { // verifico si el usuario esta logueado 
        return res.redirect("/user/profile"); // si esta logueado lo redirecciono a su perfil 
      }
    
      return res.render("register"); // si no esta logueado renderizo la vista del registro 
    },

    processRegister: function (req, res) {
      ///traigo los datos enviados del formulario de register.ejs
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
    
    profile: function(req, res) {
      if (req.params.id===undefined){
          if(req.session.user == undefined){
            return res.redirect("/user/login")
          }else{
            db.User.findByPk(req.session.user.id, {
              include: [
                { association: "productos" }]  ///lo incluyo para poder usar la relacion que tiemne con la tabla
            })
            .then(function(resultados){
                res.render("profile", {
                  productos: resultados.productos, //uso su relacion con la tabla
                  user: resultados
                })
            })
            .catch(function (error) {
                return res.send("Error al buscar mis productos " + error);
            });
      }
      }else{
        let idBuscado = req.params.id
        db.User.findByPk(idBuscado, {
          include: [
            { association: "productos" }]
        })
        .then (function (resultado) {
          return res.render("profile", {
            productos: resultado.productos,
            user:resultado
          })
        })
        
      }
        
    },
    

    logout: function(req, res){
        req.session.destroy(function(error){
            if(error){
                return res.send("error al cerrar sesion")
            }
            res.clearCookie("recordame")
            return res.redirect("/")
        })
    }
}

module.exports = userController;
