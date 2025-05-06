var fs = require('fs')

fs.readFile('archivo.txt', 'utf-8', function (err, data) {
    if (!err) {
        console.log(data);
    } else {
        throw err
    }
})

// 7. throw: se utiliza para lanzar una excepción,
// que es una forma de manejar errores o situaciones
// excepcionales. Cuando se usa throw, puedes detener
// la ejecución normal del código y transferir el
// control a un bloque de código que maneje el error,
// normalmente un bloque try...catch.. 
