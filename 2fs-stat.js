const fs = require('node:fs')//Importo el módulo de filesystem de node
const stats = fs.statSync('./archivo.txt');
 //Imprimo la información del archivo de manera síncrona
console.log(
    stats.isFile(), //Si es un fichero
    stats.isDirectory(), //Si es un directorio
    stats.isSymbolicLink(), //Si es un enlace simbólico
    stats.size //Tamaño en bytes
);