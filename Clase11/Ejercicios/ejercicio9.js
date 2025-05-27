const readline = require('readline-sync');

const peso = readline.questionFloat("¿Cuál es tu peso en kg? ");
const altura = readline.questionFloat("¿Cuál es tu altura en metros? ");
const imc = peso / (altura * altura);

console.log(`Tu IMC es: ${imc.toFixed(2)}`);

