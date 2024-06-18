//Ésto solo en los módulos nativos
// que no tienen promesas nativas
//const {promisify} = require('node:util');
//const {readFilePromise} = promisify(fs.readFile);

const fs = require('node:fs/promises')//Importo el módulo de filesystem de node

//Lectura asíncrona del archivo, usando promesas
console.log('Leyendo el primer archivo...');
fs.readFile('./archivo.txt', 'utf-8')
.then(text => {
    console.log('Primer archivo',text);
});//Leemos el archivo y devuelve el buffer de memoria del mismo, usando UTF-8, la descodificamos

console.log('Haciendo cosas mientras lee el archivo...');// Esto se debe hacer asíncrono para que mientras lee el archivo podamos hacer estas cosas

// Para ello usamos readFile, no readFileSync. Con readFile también podemos usar promesas, de forma asíncrona
console.log('Leyendo el segundo archivo...');
fs.readFile('./archivo2.txt', 'utf-8')
.then(text => {
    console.log('Segundo archivo',text);
});//Leemos el archivo y devuelve el buffer de memoria del mismo, usando UTF-8, la descodificamos