//puente entre las vistas y los modelos
//los metodos de cada controlador reciben los pedidos y procesan informacion

//importa de db toda la informacion de los productos
const informacion = require('../db/informacion');

const mainController = { // creamos un objeto literal para luego exportar

    //req y res son metodos que contienen objetos literales
///Creo un objeto literal que tiene dos métodos: index y searchResults.
const mainController = {
    index: function (req, res) {  
        //envia informacion de productos a index.ejs para renderizarla, lista de objetos literales con strings       
        return res.render("index", { 
            productos: informacion.productos, ///accedes a productos y mandas eso 
        });
    },
    searchResults: function (req, res) {
        ///Maneja la ruta de resultados de búsqueda (/search). Renderiza la vista search-results.ejs, y también le manda los productos para que los pueda mostrar.
        return res.render("search-results", { 
            productos: informacion.productos, 
        });
    },

};

module.exports = mainController;    
///Exporto el controlador para poder usarlo en el archivo de rutas (routes/mainRoutes.js).
module.exports = mainController;
