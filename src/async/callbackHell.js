function hola(nombre, callback){
    setTimeout(() => {
        console.log("Hola, " + nombre);
        callback(nombre);
    }, 1000);
}

function hablar(callbackHablar){
    setTimeout(() => {
        console.log("bla bla bla bla...");
        callbackHablar();
    }, 1000);
}

function adios(nombre, callback){
    setTimeout(() => {
        console.log("Adios, " + nombre);
        callback(nombre);
    }, 1000);
}

//usando recursividad llamando a la misma funcion
//pero con info ligeramente distinta
function conversacion(nombre, veces, callback){
    if(veces > 0){
        hablar(function(){
            conversacion(nombre, --veces, callback);
        })
    } else {
        adios(nombre, callback)
    }
}

console.log("Iniciando");
hola('Juan', function(nombre){
    conversacion(nombre, 3, function(){
        console.log("Termina proceso")
    })
})

/* hola("Juan", function(nombre){
    hablar(function(){
        hablar(function(){
            adios(nombre, function(){
                console.log("Terminando proceso")
            });
        });
    });
}); */