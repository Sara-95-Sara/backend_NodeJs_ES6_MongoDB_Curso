
//1. devuelve hola Anna
/*
const nombre = 'Anna';

function saluda() {
    console.log('hola ' + nombre);
}

saluda();
*/

/*
//2.1  devuelve   hola undefined.
const nombre = 'Anna';

function saluda() {
    console.log('hola ' + nombre);
    var nombre = "Yuli";
}

saluda();
*/


/*
//2.2 lo que hace js es primera vez lo declara, segunda vez lo asigna.
// hola undefined
const nombre = 'Anna';

function saluda() {
    var nombre;
    console.log('hola ' + nombre);
    nombre = "Yuli";
}

saluda();
*/

// La funcion saluda tambien hace hoisting
//hola Anna, funciona en 2 casos
// la de ariba funciona gracias a hoisting

const nombre = 'Anna';

saluda();

function saluda() {
    console.log('hola ' + nombre);
}

saluda();
