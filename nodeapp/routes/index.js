var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  // variables locals, pero solo para este objeto
  res.locals.bienvenida = 'Welcome';
  res.locals.name = '<script>alert("Inyeccion de codigo")</script>';

  const ahora = new Date();
  res.locals.segundoActual = ahora.getSeconds();
  res.locals.par = ahora.getSeconds() % 2 === 0; // vuelve true o false

  res.locals.users = [
    { name: 'Jones', age: 30 },
    { name: 'Smith', age: 35 }
  ];

  res.render('index', { 
    number: 22
  });
});

module.exports = router;
