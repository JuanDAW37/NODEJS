//Ésto solo en los módulos nativos
// que no tienen promesas nativas
//const {promisify} = require('node:util');
//const {readFilePromise} = promisify(fs.readFile);

import {readFile} from 'node:fs/promises';//Importo el módulo de filesystem de node

Promise.all(
    [
    //Lectura asíncrona del archivo, usando promesas de forma paralela    
    readFile('./archivo.txt', 'utf-8'),    
    readFile('./archivo2.txt', 'utf-8'),
    ]   
).then(([text, text2]) => {
    console.log('Contenido del primer archivo:', text);
    console.log('Contenido del segundo archivo:', text2);
});