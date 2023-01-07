'use strict';

const EventEmitter = require('events');

// creamos un emisor(haxordich) de eventos
const emisor = new EventEmitter();

emisor.on('llamada de telefono', function(info) {
    if (info === 'madre') return;  // para que no haga el console.log
    console.log('ring ring');
});

emisor.once('llamada de telefono', function(info) {  // once es solo que ocurra la primera vez, cuando llama emisor.emit, pero .on cada vez lo ejecuta 
    console.log('brr brr');
});

emisor.emit('llamada de telefono', 'madre' );   // emit es para emitir(արտանետել) un evento
emisor.emit('llamada de telefono', 'madre' );
emisor.emit('llamada de telefono', 'madre' );
//emisor.emit('llamada de telefono', { remitente: 'madre' });  // arriba  info.remitente


// cuando termina el proceso, ej. este funcion
process.on('exit', () => {  
    console.log('saliendo del programa');
});