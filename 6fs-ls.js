const ls = require('node:fs');
const ls2 = require('node:fs/promises');

//Leer el directorio
ls.readdir('.', (err, files) =>  { // Callback
    if(err){
        console.error(err);
    }else{
        console.log(files);
        files.forEach(element => {
            console.log(element)
        });
    }    
});

// Con promesas
ls2.readdir('.')
.then(files => {
    console.log(files);
    files.forEach(element => {
        console.log(element)
    });
})
.catch(err=>{
    console.error(err);
});
