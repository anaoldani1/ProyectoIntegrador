var express = require('express');
var router = express.Router();

///para el formulario de register///
router.get("/register", function(req, res) {
  res.render("register");
});
////termina register 


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
