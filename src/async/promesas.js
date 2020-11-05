function hola(nombre){
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(() => {
                console.log("Hola, " + nombre);
                resolve(nombre);
            }, 1000);
        } else {
            reject();
        }  
    }) 
}

function hablar(nombre){
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(() => {
                console.log("bla bla bla bla...");
                resolve(nombre);
            }, 1000);
        } else {
            reject();
        }
    })
}

function adios(nombre){
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(() => {
                console.log("Adios, " + nombre);
                resolve();
            }, 1000);
        } else {
            reject(new Error());
        }
    })
}

console.log("Iniciando proceso");
hola("Juan")
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log("Terminando proceso");
    }).catch((err) => {
        console.log("Ha habido un error");
    })