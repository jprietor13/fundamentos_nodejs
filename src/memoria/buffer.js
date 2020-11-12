//let buffer = Buffer.alloc(10)//guardar un byte de informacion
//let buffer = Buffer.from([1, 2, 3, 4]);
let buffer = Buffer.from('Hola')//regresa <Buffer 48 6f 6c 61> 

//console.log(buffer); //<Buffer 00>

// - posicion a posicion

//abecedario
let abc = Buffer.alloc(26);
for(let i = 0; i < 26; i++){
    abc[i] = i + 97;
}
console.log(abc.toString());//convierte el decimal al caracter ASCII