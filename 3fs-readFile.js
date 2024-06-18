const fs = require('node:fs')//Importo el módulo de filesystem de node

//Lectura asíncrona del archivo con callbacks
console.log('Leyendo el primer archivo...');
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
    console.log('Primer texto',text)//Imprimimos el contenido del archivo
});//Leemos el archivo y devuelve el buffer de memoria del mismo, usando UTF-8, la descodificamos

console.log('Haciendo cosas mientras lee el archivo...');// Esto se debe hacer asíncrono para que mientras lee el archivo podamos hacer estas cosas

// Para ello usamos readFile, no readFileSync. Con readFile usamos callbacks
console.log('Leyendo el segundo archivo...');
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
    console.log('Segundo texto',text)//Imprimimos el contenido del archivo
});//Leemos el archivo y devuelve el buffer de memoria del mismo, usando UTF-8, la descodificamos