'use strict';

/*
// primera ejecution
//  inicio
//  fin
//  texto1
console.log('inicio');

// funcion que escribe un texto en la consola tras 2 segundos.
function escribeTras2Segundos(texto) {
    setTimeout(() => {
       console.log(texto);
    }, 2000);
}

escribeTras2Segundos('texto1');

console.log('fin');
*/



/*
// segunda ejecucion, si quiero que fin ira ultimo, doy callback
// inicio
// texto1
// fin

console.log('inicio');

function escribeTras2Segundos(texto, callback) {
    setTimeout(() => {
       console.log(texto);
       callback();
    }, 2000);
}

escribeTras2Segundos('texto1', () => {
    console.log('fin');
});
*/


/*
// tercera ejecution
// inicio
// texto1
// texto2
// fin

console.log('inicio');

function escribeTras2Segundos(texto, callback) {
    setTimeout(() => {
       console.log(texto);
       callback();
    }, 2000);
}

escribeTras2Segundos('texto1', () => {
    escribeTras2Segundos('texto2', () => {
        console.log('fin');
    });
});
*/


// 4 

console.log('inicio');

function escribeTras2Segundos(texto, callback) {
    setTimeout(() => {
       console.log(texto);
       callback();
    }, 2000);
}

for (let i = 0; i <= 5; i++) {
    escribeTras2Segundos('texto' + i, () => {
        console.log('fin');
    });
}


