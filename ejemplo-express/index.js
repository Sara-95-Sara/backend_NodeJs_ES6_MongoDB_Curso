'use strict';

//cargar libreria Express
const express = require('express');

// crear la aplicacion
const app = express();

app.use((req, res, next) => {
    console.log('nueva peticion');
    next();
});

//añadir un manejador de rutas (middleware)
app.get('/', (req, res, next) => {
   console.log('recibo una peticion de tipo', req.method, 'a', req.path);
   res.send('hola');
});

app.get('/pedidos', (req, res, next) => {
   res.send('Pagina de pedidos');
});

// arrancar la aplicacion 
app.listen(8080, () => {
   console.log('Servidor arrancado en http://localhost:8080');
});

