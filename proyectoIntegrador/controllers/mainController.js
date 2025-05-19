//puente entre las vistas y los modelos, los metodos de cada controlador reciben los pedidos y procesan informacion

const informacion = require('../db/informacion');

const mainController = { // creamos un objeto literal para luego exportar

    //req y res son metodos que contienen objetos literales
    index: function (req, res) {  
        //envia informacion de productos a index.ejs para renderizarla, lista de objetos literales con strings          
        return res.render("index", { 
            productos: informacion.productos,
        });
    },
    searchResults: function (req, res) {
        /// //envia informacion de productos a search-results.ejs para renderizarla, lista de objetos literales con strings
        return res.render("search-results", { 
            productos: informacion.productos,
        });
    },

};

module.exports = mainController;    
