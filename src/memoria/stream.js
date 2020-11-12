const fs = require('fs');
const stream = require('stream');
const util = require('util');
let data = '';
let readableStream = fs.createReadStream(__dirname + '/input.txt');

//stream de lectura
readableStream.setEncoding('utf8');
// readableStream.on('data', function(chunk){
//     console.log(chunk)
// });

// readableStream.on('end', function(){
//     console.log(data);
// })

//stream de escritura
// process.stdout.write('Hola')//escribimos salid standar del sistema
// process.stdout.write('Que tal')

//buffer de transformacion: lee, transforma y escribe
const Transform = stream.Transform;//variable de transformacion
function Mayus(){
    Transform.call(this);
}
util.inherits(Mayus, Transform);
Mayus.prototype._transform = function(chunk, codif, callback){
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    callback();
}

let mayus = new Mayus();
readableStream
    .pipe(mayus)
    .pipe(process.stdout);

