
let suma = 0;
console.time('bucle')//muestra el tiempo que tarda en ejecutarse algo
for(let i = 0; i < 10000000; i++){
   suma += 1
}
console.timeEnd('bucle');
console.time('Asincrono');
asincrona()
.then(() => {
    console.timeEnd('Asincrono');
})

function asincrona(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Termina el proceso asincrono");
            resolve();
        })
    })
}