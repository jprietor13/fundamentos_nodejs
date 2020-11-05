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

console.log("Iniciando proceso")
async function main(){
    try {
        let nombre = await hola("Carlos");
        await hablar();
        await hablar();
        await hablar();
        await adios(ji);
    } catch(err){
        console.log("Ha ocurrido un error", err);
        throw Error(err);
    }
}

main()
.then(response => {
    console.log("Terminando proceso")
})
.catch(err => {
    console.log("Hay un error");
})