console.log('Hola Mundo 🧡');
console.info('Hola Mundo');
console.info(globalThis);//Variable global para JavaScript
console.info(global);//Variable global para NodeJs
globalThis.console.log('Hola');
global.console.log('Hola');

//Importo el módulo sum. CommonJS require module
const { sum } = require('../sum');
console.log(sum(1,2));