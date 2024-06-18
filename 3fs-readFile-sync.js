const fs = require('node:fs')//Importo el módulo de filesystem de node

//Lectura síncrona del archivo
console.log('Leyendo el primer archivo...');
const text = fs.readFileSync('./archivo.txt', 'utf-8');//Leemos el archivo y devuelve el buffer de memoria del mismo, usando UTF-8, la descodificamos
console.log('Primer texto',text)//Imprimimos el contenido del archivo

// Para ello usamos readFile, no readFileSync. 
console.log('Leyendo el segundo archivo...');
const text2= fs.readFileSync('./archivo2.txt', 'utf-8');//Leemos el archivo y devuelve el buffer de memoria del mismo, usando UTF-8, la descodificamos
console.log('Segundo texto',text2)//Imprimimos el contenido del archivo
