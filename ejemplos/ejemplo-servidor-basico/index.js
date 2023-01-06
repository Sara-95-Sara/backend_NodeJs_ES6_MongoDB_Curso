// cargar libreria http
const http = require('http');
const Chance = require('chance');

const chance = new Chance();

// definir un servidor 
/*
// con texto
const server = http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-type': 'text/html'});
    response.end(`Hola  ${chance.name()} soy un servidor <b>HTTP</b>`);
});
*/

// con json
const server = http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-type': 'text/json'});
    response.end(JSON.stringify({ name: 'Javier'}));
});

// arrancar el servidor
server.listen(1337, '127.0.0.1');

console.log('Servidor arrancado en http://127.0.0.1:1337');