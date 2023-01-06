'use strict';

// definimos una function constructora de objetos
function Persona(nombre) {
    this.nombre = nombre;
    this.saluda = function() {
        console.log('Hola soy', this.nombre);
    };
}

// construir un objeto 
const Luis = new Persona('Luis');
const pepe = new Persona('Pepe');

Persona.prototype.saluda = function() {
    console.log('Hola soy', this.nombre);
};

Luis.saluda();
pepe.saluda();

// herencia de persona 

function Agente(nombre) {
    // heredar el constructor de las personas
    Persona.call(this, nombre);
}

// heredar propiedades y metodos de las personas
Agente.prototype = Object.create(Persona.prototype);
Agente.prototype.constructor = Agente;


const brown = new Agente('Brown');

brown.saluda();

// Herencia multiple ----
function Superheroe() {
    this.vuela = function() {
        console.log(this.nombre, 'vuela');
    }
}

// copiamos todas las propiedades de superheroe al prototipo de los Agentes
Object.assign(Agente.prototype, new Superheroe());