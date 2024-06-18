const path = require('node:path')

//Barra separadara de carpetas según S.O.
console.log(path.sep);

// Unir rutas con path.join
const filePath = path.join('./content', 'subfolfer', 'file.txt');
console.log(filePath);

//Nombre del fichero
const fileName = path.basename(filePath);
console.log(fileName);

//Sólo el nombre del fichero
const fileNameOnly = path.basename(filePath, '.txt');
console.log(fileNameOnly);

//Sólo la extensión
const fileExtension = path.extname(filePath);
console.log(fileExtension);