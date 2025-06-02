const path = require('path')

// Ruta absoluta:
const rutaAbsoluta = '/home/user/docs/bin/file.txt'

// Ejemplo Obtener el nombre del archivo desde una ruta absoluta
const ejemplo1 = path.basename(rutaAbsoluta)
console.log('Ejemplo 1: ', ejemplo1);

// Ejemplo quitar extension
const ejemplo2 = path.basename(rutaAbsoluta, '.txt')
console.log('Ejemplo 2: ', ejemplo2);