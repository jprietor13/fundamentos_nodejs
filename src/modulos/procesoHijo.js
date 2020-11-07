const { exec, spawn } = require('child_process') //desestructuramos

//exec('node ruta') => ejecuta otro archivo
exec('ls -la', (err, stdout, stderr) => {
    if(err){
        console.error(err);
        return false;
    }
    console.log('src/' + stdout);
});

//invocar un proceso nuevo
//se le pasan 2 parametros, la accion a ejecutar
//un array de parametros
let proceso = spawn('ls', ['-la']);
console.log(proceso.pid); //idproceso
console.log(proceso.connected);//esta conectado

//eventos
proceso.stdout.on('data', function(dato){
    console.log("Esta muerto?")
    console.log(process.killed);
    console.log(dato.toString())
});

//cuando termina
proceso.on('exit', function(){
    console.log("Proceso terminado");
    console.log(proceso.killed)
})