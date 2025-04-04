var express = require('express');
var router = express.Router();
const headerController= require('../controllers/headerLogueadoController')


router.get('/',headerController.index)

module.exports = router;