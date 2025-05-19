var express = require('express');
var router = express.Router();
const mainController= require('../controllers/mainController')

///router es la variable qie guarda la ejecucion del metodo router y get es el metodo http, configurar sufijos


router.get('/', mainController.index);

router.get('/searchresults', mainController.searchResults);


module.exports = router;
