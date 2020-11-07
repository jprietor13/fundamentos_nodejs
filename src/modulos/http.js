const http = require('http');

//funcion para crear, recibe 2 parametros(request y response)
http.createServer(router).listen(3000);//ecucha en el puerto 3000

function router(req, res){
    console.log('nueva peticion!');
    console.log(req.url);//peticion

    switch(req.url){
        case '/hola':
            res.write('Hola, que tal');
            res.end();
            break;
        default:
            res.write('Error 404: No lo que quieres')
            res.end();
            break;
    }
}
//     //creando cabezera
//     res.writeHead(200, {'Content-type': 'text/plain'});

//     //respondiendo la peticion al usuario
//     res.write("Hola, ya se usar http de node js")

//     res.end()//termina peticion
// }
// console.log("Escuchando http en el puerto 3000")

//si se entra a localhost:3000 por el navegador imprime "nueva peticion"