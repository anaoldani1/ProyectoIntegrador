var express = require('express');
var router = express.Router();
let userController = require('../controllers/userController')

///para el formulario de register///
router.get("/register", function(req, res) {
  res.render("register");
});
////termina register 

//para usar datos de usuario en distintas pags//
router.get('/', userController.nombreDeUsuario);
///

module.exports = router;
