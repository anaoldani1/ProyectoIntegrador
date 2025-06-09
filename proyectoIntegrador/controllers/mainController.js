
//puente entre las vistas y los modelos
//los metodos de cada controlador reciben los pedidos y procesan informacion


//importa de db toda la informacion de los productos
// importar db y Op
let db = require("../database/models");
let op = db.Sequelize.Op;
   //req y res son metodos que contienen objetos literales
   ///Creo un objeto literal que tiene dos métodos: index y searchResults.
const mainController = {
   //indexx muestra el inicio
   index: function (req, res) { 
       //envia informacion de productos a index.ejs para renderizarla, lista de objetos literales con strings

      /// cada obj literal representa una relacion, le damos el alias definido en el modelo, si no aclaramos las relaciones no van a existir
       db.Product.findAll( {
           include: [{ association: "usuario" }]
         })


       .then(function (resultados) {
           return res.render("index",{products:resultados})
       })

   },
   //muestra los resultados de busqeda
   searchResults: function (req, res) {
       ///Maneja la ruta de resultados de búsqueda (/search). Renderiza la vista search-results.ejs, y también le manda los productos para que los pueda mostrar.


       let searchTerm = req.query.search


       db.Product.findAll({
           where: [{nombreProducto: {[op.like] : "%" + searchTerm + "%"}}],
           include: [{association: "usuario"}]
       })
       .then(function (resultados) {
           let mensaje= undefined2
           if (resultados.length===0) {
               mensaje="   No hay resultados para su criterio de búsqueda"
               return res.render("search-results",{productos:resultados, mensaje: mensaje})
           }else{
               return res.render("search-results",{productos:resultados, mensaje: mensaje})
           }
       })
   },


};


///Exporto el controlador para poder usarlo en el archivo de rutas (routes/mainRoutes.js).
module.exports = mainController;



