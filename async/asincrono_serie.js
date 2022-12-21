'use strict';


// 4 
// en vez de callback podemos escribir cualquier palabra, suele llamar tambien   cb (callback).

console.log('inicio');

function escribeTras2Segundos(texto, callback) {
    setTimeout(() => {
       console.log(texto);
       callback();
    }, 2000);
}

function bucleSerie(n, fn, callback) {
    if (n == 0) {
        callback();
        return;
    }
    n = n - 1;
    fn('texto' + n, () => {
       bucleSerie(n, fn, callback);
    });
} 

bucleSerie(6, escribeTras2Segundos, () => {
    console.log('fin');
});


