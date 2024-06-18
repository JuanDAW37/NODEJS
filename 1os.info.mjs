import { platform, release, arch, cpus, freemem, totalmem, homedir, userInfo, uptime } from 'node:os';//Librería de NodeJS para operaciones con el Sistema
console.log('Sistema operativo: ',platform());
console.log('Versión del Sistema Operativo:', release())
console.log('Arquitectura:', arch());
console.log("CPU's:", cpus());
console.log('Memoria Libre', freemem() / 1024 / 1024);
console.log('Memoria Total', totalmem() / 1024 / 1024);
console.log('Directorio actual:', homedir());
console.log('Información del usuario:', userInfo());
console.log('Tiempo que lleva el ordenador encendido', uptime() / 60 / 60);