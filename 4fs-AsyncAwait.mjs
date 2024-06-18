//Ésto solo en los módulos nativos
// que no tienen promesas nativas
//const {promisify} = require('node:util');
//const {readFilePromise} = promisify(fs.readFile);

import {readFile} from 'node:fs/promises';//Importo el módulo de filesystem de node

//Lectura asíncrona del archivo, usando callbacks de forma secuencial
console.log('Leyendo el primer archivo...');
const text = await readFile('./archivo.txt', 'utf-8');//Leemos el archivo y devuelve el buffer de memoria del mismo, usando UTF-8, la descodificamos
console.log('Primer archivo',text);

console.log('Haciendo cosas mientras lee el archivo...');// Esto se debe hacer asíncrono para que mientras lee el archivo podamos hacer estas cosas

// Para ello usamos readFile, no readFileSync. Con readFile usamos callbacks, de forma asíncrona y secuencial
console.log('Leyendo el segundo archivo...');
const text2 = await readFile('./archivo2.txt', 'utf-8')//Leemos el archivo y devuelve el buffer de memoria del mismo, usando UTF-8, la descodificamos
console.log('Segundo archivo',text2);
