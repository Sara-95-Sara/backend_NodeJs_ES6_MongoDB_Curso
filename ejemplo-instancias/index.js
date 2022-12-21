'use strict';

// crear una instancia de un objeto con una funcion.

function Fruta(nombre) {
   this.nombre = nombre;
   this.edad = 20;
}

const limon = new Fruta('limon');

limon.color = 'amarillo';

console.log(limon);