/**parar setInmtervet */
let i = 0
let intervalo = setInterval(() => {
console.log("Hola");
if(i === 3){
clearInterval(intervalo)
}
i++
}, 1000);

setImmediate(() => {
    console.log("Hola")
})

console.log(process) //objeto process
console.log(__dirname) //carpeta en donde estamos
console.log(__filename)//ruta hasta nombre del archivo
