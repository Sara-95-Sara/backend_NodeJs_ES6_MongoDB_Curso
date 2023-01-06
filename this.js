'use strict';

// crear una instancia de un objeto con una funcion.

function Fruta(nombre) {
    this.nombre = nombre;
    this.saluda = function(hora, nivel) {
        console.log('hola soy', this.nombre, 'son las', hora, 'soy', nivel);
    };
 }
 
 const limon = new Fruta('limon');

 //console.log(limon);
 

// donde esten los parentesis de ejecucion,
// mira lo anterior al punto de la izquierda

const coche = { nombre: 'Ford Fiesta'};

limon.saluda.call(coche, '11am', 'educado');
limon.saluda.apply(coche, ['11am', 'educado']);


//limon.saluda();

//setTimeout(limon.saluda, 2000);    hola soy undefined
//setTimeout(limon.saluda.bind(limon), 2000);   //  hola soy limon

 /* da error
const unaFunction = limon.saluda;
unaFunction(); 
*/