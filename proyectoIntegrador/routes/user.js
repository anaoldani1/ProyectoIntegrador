// requerimos express
const express = require('express'); //Importa (o "requiere") el módulo express para poder usarlo en este archivo.
const router = express.Router(); ///Crea un "router" que te permite definir rutas de forma modular y organizada.
const userController= require('../controllers/userController') //requiere el controlador 

router.get('/login', userController.login); //Cuando el usuario entra a /user/login, ejecuta el metodo login del userController. Muestra el formulario de inicio de sesión.

router.get('/register', userController.register); //Cuando el usuario entra a /user/register, ejecuta el metodo register del userController. Muestra el formulario de registro para crear una nueva cuenta.

router.get('/profile', userController.profile); //Cuando el usuario entra a /user/profile, ejecuta el metodo profile del userController. Muestra la página del perfil del usuario (con su info).

module.exports = router; 