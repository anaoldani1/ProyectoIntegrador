var express = require('express'); //Importa (o "requiere") el módulo express para poder usarlo en este archivo.
var router = express.Router(); ///Crea un "router" que te permite definir rutas de forma modular y organizada.
const mainController= require('../controllers/mainController') //requiere el controlador 

///router es la variable qie guarda la ejecucion del metodo router y get es el metodo http, configurar sufijos

//Cuando el usuario entre a la página principal (/), se llame a la función index que está en el mainController.
router.get('/', mainController.index);  

//Cuando el usuario vaya a /searchresults, se llame a la función searchResults del mainController.
router.get('/searchresults', mainController.searchResults); 

module.exports = router;
