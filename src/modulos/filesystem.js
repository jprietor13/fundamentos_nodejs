//exportat modulos
//no hace falta de decir de donde viene pues ya viene instalado
//dentro del core
const fs = require('fs');

//leyendo archivos
function leer(ruta, callback) {
    fs.readFile(ruta, (err, data) => { //funion filesystem para leer archivos
       callback(data.toString())
    });
}

//escribiendo
function escribir(ruta, contenido, callback){
    fs.writeFile(ruta, contenido, (err) => {
        if(err){
            console.error("Error al editar", err)
        } else {
            console.log("Editado con exito")
        }
    });
}

//borrar archivo
function borrar(ruta, callback) {
    fs.unlink(ruta, callback)
}

leer(__dirname + '/archivo.txt', console.log);
escribir(__dirname + '/archivo1.txt', "Soy un archivo nuevo", console.log)
borrar(__dirname + '/archivo1.txt', console.log);