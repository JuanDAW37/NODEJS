const os = require('node:os');//Librería de NodeJS para operaciones con el Sistema
console.log('Sistema operativo: ',os.platform());
console.log('Versión del Sistema Operativo:', os.release())
console.log('Arquitectura:', os.arch());
console.log("CPU's:", os.cpus());
console.log('Memoria Libre', os.freemem() / 1024 / 1024);
console.log('Memoria Total', os.totalmem() / 1024 / 1024);
console.log('Directorio actual:', os.homedir());
console.log('Información del usuario:', os.userInfo());
console.log('Tiempo que lleva el ordenador encendido', os.uptime() / 60 / 60);