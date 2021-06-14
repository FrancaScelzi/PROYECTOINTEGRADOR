var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session'); //Instalamos session.


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRouter = require('./routes/products');
const registerRouter = require('./routes/register')
const loginRouter = require('./routes/login')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'Hola',
  resave: false,
  saveUninitialized: true
}));

// Antes de las rutas. Dejar disponible datos de sessión para todas las vistas
app.use(function (req, res, next) {
  if (req.session.user) {
    res.locals.user = {
      name: req.session.user.name,
      lastname: req.session.user.lastname,
      id: req.session.user.id,
      log: true,
    }
  } else {
    res.locals.user = {
      log: false,

    }
    console.log(res.locals.user);
  }
  return next(); // Clave para que el proceso siga adelante.  
})

// Gestionar la cookie.
app.use(function (req, res, next) {
  //Solo quiero hacerlo si tengo una coockie
  if (req.cookies.user_id != undefined && req.session.user == undefined) {
    let idDeLaCookie = req.cookies.user_id;

    db.User.findByPk(idDeLaCookie)
      .then(user => {
        console.log('en cookie middleware trasladando');
        req.session.user = user; //Estamos poniendo en session a toda la instancia del modelo. Debería ser solo user.dataValues.
        console.log('en cookie middleware');
        console.log(req.session.user);
        res.locals.user = user; // Se corrije si usamos user.dataValues
        return next();
      })
      .catch(e => {
        console.log(e)
      })
  } else {
    // Si no tengo cookie quiero que el programa continue
    return next();
  }

})


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', productRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;