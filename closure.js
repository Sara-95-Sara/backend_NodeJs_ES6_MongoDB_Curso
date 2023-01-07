'use strict';

// function que devuelve un objeto
function creaVehiculo(nombre) {
    const numeroRuedas = 4;
    return {
        getNombre: function() { return nombre },
        setNombre: function(nombre) { nombre = valor },
        saluda: function() {
            console.log('Soy un', nombre, 'y tengo', numeroRuedas, 'ruedas')
        }
    }
}

const coche = creaVehiculo('Oper Astra');

coche.saluda();

setTimeout(coche.saluda, 2000);