const path = require('path')

// Ruta absoluta:
const rutaAbsoluta = '/home/user/docs/bin/file.js'

// Ejemplo: obtener el directorio contenedor de un archivo desde una ruta absoluta
const ejemplo1 = path.dirname(rutaAbsoluta)
console.log('Ejemplo 1: ', ejemplo1);
