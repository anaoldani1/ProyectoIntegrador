const informacion = require('../db/informacion') // requiere la informadion de db (el objeto literal informacion)

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

    processregister: function (req, res) {
            const usuario = req.body.usuario;
            const email = req.body.email;
            const password = req.body.password;
            const fechaNacimiento = req.body.fechaNacimiento;
            const documento = req.body.documento;
            const fotoPerfil = req.body.fotoPerfil;
        
            if (!email) {
              return res.send("El email no puede estar vacío");
            }
        
            db.usuarios.findOne({ where: { email: email } })
              .then(function (userFound) {
                if (userFound) {
                  return res.send("Este email ya está registrado");
                }
        
                if (!password) {
                  return res.send("La contraseña no puede estar vacía");
                }
        
                if (password.length < 3) {
                  return res.send("La contraseña debe tener al menos 3 caracteres");
                }
        
                const passHasheada = bcrypt.hashSync(password, 10);
        
                db.usuarios.create({
                  name: usuario,
                  email: email,
                  contrasenia: passHasheada,
                  fechaNac: fechaNacimiento,
                  documento: documento,
                  foto: fotoPerfil,
                  createdAt: new Date()
                })
                  .then(function () {
                    return res.redirect('/user/profile');
                  })
                  .catch(function (error) {
                    return res.send("Error al crear usuario: " + error);
                  });
        
              })
              .catch(function (error) {
                return res.send("Error al validar email: " + error);
              });

    },
    profile: function (req, res) {
        db.usuarios.findAll()
          .then(function (usuarios) {
            res.render('profile', { usuario: usuarios });
          });
      }

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
