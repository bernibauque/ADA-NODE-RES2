// Importacion de fs
var fs = require('fs')

// Configuramos una variables de nombre datos, que contenga los datos
// a persistir en el archivo 
datos = "Ejemplo de datos que podemos escribir en un archivo"

// Utilizacion del modulo FS
// 
fs.writeFile('archivo.txt', datos, function (err) {
    if (!err) {
        console.log('Los datos han sido escritos a archivo.txt');
    } else {
        throw err
    }
})