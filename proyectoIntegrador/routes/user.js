// requerimos express
const express = require('express'); //Importa (o "requiere") el módulo express para poder usarlo en este archivo.
const router = express.Router(); ///Crea un "router" que te permite definir rutas de forma modular y organizada.
const userController= require('../controllers/userController') //requiere el controlador 

//Usuario entra a /user/login, ejecuta el metodo login del userController. Muestra el formulario de inicio de sesión.
router.get('/login', userController.login); 

//Usuario entra a /user/register, ejecuta el metodo register del userController. Muestra el formulario de registro para crear una nueva cuenta.
router.get('/register', userController.register); 

//Usuario entra a /user/profile, ejecuta el metodo profile del userController. Muestra la página del perfil del usuario (con su info).
router.get('/profile', userController.profile); 


///2 parte register
router.post('/register', userController.processRegister);

<<<<<<< HEAD

///2 parte login
router.post("/login", userController.processLogin);
=======
//2 parte de login 
router.post('/login', userController.processLogin);

//logout
router.get('/logout', userController.logout)

>>>>>>> dc44458178db1a517565b5a8ce5d0b82f549e168

module.exports = router; 