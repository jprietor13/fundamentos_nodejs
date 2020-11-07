console.log("log");
console.info("info");
console.warn("warning");
console.error("error");

//console.table() //muestra datos en forma de tablas
let tabla = [
    {
        a: 1,
        b: 2,
    },
    {
        a: 3,
        b: 4
    }
];

console.table(tabla);

// agrupar varias logs en una especie de jerarquia
console.log("0");
console.group("1");
console.log("1.1");
console.log("1.2");
console.log("1.3");
console.groupEnd("1");
console.log("2");


//console.count //secuencia de veces que se imprime console
//consoleReset //reseta console.count