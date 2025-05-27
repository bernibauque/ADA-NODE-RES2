const readline = require('readline-sync');

const nombre = readline.question("¿Cuál es tu nombre? ");
const edad = readline.questionInt("¿Cuál es tu edad? ");

console.log(`¡Hola, ${nombre}! Tienes ${edad} años.`);




