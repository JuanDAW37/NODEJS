// Objeto global que proporciona información y control sobre el proceso actual
// Argumentos de entrada
console.log(process.argv);

// Current working directory
console.log(process.cwd()); // /ruta/al/directorio

//Variables de entorno
console.log(process.env); // objeto que contiene las variables de entorno

//Controlar el proceso y su salida
process.exit(1);

// Controlar eventos del proceso
process.on('exit', () => {
    // Algo como limpiar recursos o consola
})

