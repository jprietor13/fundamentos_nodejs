function serompe(){
    return 3 + z;
}

function seRompeAsincrona (callback) {
    setTimeout(() => {
        try {
            return 3 + z;
        } catch(err){
            console.error("Error en funcion asincrona")
            callback(err);
        }
    },1000)
}
try{
    //serompe();
    seRompeAsincrona(function(){
        console.log("Hay error")
    })
} catch(err){
    console.error("Error");
    console.error(err.message)
}
