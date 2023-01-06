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

function bucleSerie(arr, fn, callback) {
    if (arr.length == 0) {
        callback();
        return;
    }
    fn('texto' + arr.shift(), () => {
       bucleSerie(arr, fn, callback);
    });
} 

bucleSerie([10,20,30,40,50], escribeTras2Segundos, () => {
    console.log('fin');
});


