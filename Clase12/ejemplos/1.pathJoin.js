const path = require('path')

// Ejemplo de unir segmentos de ruta simple
const ejemplo1 = path.join('///user', '/berni', '/./local', 'bin')
console.log("Ejemplo 1 Ruta combinada: ", ejemplo1);

// Ejemplo de con dirname
const ejemplo2 = path.join(__dirname, 'berni.txt')
console.log(ejemplo2);
