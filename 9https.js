const http = require('node:http');
const {availablePort} = require('./10-freeport.js')

const servidor = http.createServer((request, response)=>{
    console.log('request received');
    response.end('Hola mundo');
})

/*servidor.listen(0, () => {
    console.log('Servidor corriendo en el puerto', servidor.address().port);
})*/

availablePort(3000).then(port => {
    servidor.listen(port, () => {
        console.log('Servidor corriendo en el puerto http://localhost:', port);
    })   
})
    
