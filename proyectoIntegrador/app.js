var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session'); // requerimos session

//usamos require para requerir otros archivos y despues podes usarlos con app.use()
//IMPORTA LOS ROUTERS..
var mainRouter = require('./routes/main'); //Importa el archivo main.js que está dentro de la carpeta routes. //
var productRouter = require("./routes/product"); //Importa el archivo product.js dentro de routes/, que contiene todas las rutas relacionadas a productos//
var userRouter = require("./routes/user");  //Importa el archivo user.js dentro de routes/, que tiene las rutas relacionadas a usuarios 

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: "mensaje secreto",
  resave: false,
  saveUninitialized: true
}));


app.use(function (req, res, next) {
  if (req.session.user != undefined) {
    res.locals.user = req.session.user;
  }

  // osea si existe una cookie del checkbox pero no hay nadie loguado usamos el mail guardado en la cookie para loguarlo
  if (req.cookies.recordame && req.session.user == undefined) {
    req.session.user = { email: req.cookies.recordame };
  }

  return next();
});
////Estas líneas en app.js sirven para dividir la aplicación en distintos routers///
//cuando un usuario entre a estas rutas, usá el router correspondiente
app.use('/', mainRouter); //Todas las rutas que empiezan con /se manejan con mainRouter.//
app.use("/product", productRouter); //Todas las rutas que empiezan con /product se manejan con productRouter.//
app.use('/user', userRouter);  //Todas las rutas que empiezan con /user (por ejemplo, /user/login, /user/register) se manejan con userRouter.//


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app; // exportar la instancia de la aplicación de Express, 
