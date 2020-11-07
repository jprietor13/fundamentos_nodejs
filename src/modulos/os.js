const os = require('os');

console.log(os.arch());//arquitectura del pc => x64
console.log(os.platform())// => S.O => linux
console.log(os.cpus().length)//info nucleos procesador
console.log(os.constants)//errores y señales del sistema
console.log(os.freemem())//memoria libre en bytes
console.log(os.totalmem())//memoria disponible
console.log(os.homedir());//ruta usuario
console.log(os.tmpdir());//carpeta temporal
console.log(os.hostname())//nombre maquina
console.log(os.networkInterfaces())//interfaz de red

const SIZE = 1024;
function kb(bytes) { return bytes / size}

console.log(os.freemem());