const readline = require('readline-sync');

const dolares = readline.questionFloat("¿Cuántos dólares deseas convertir a euros? ");
const euros = dolares * 0.85;

console.log(`${dolares} USD equivalen a ${euros.toFixed(2)} EUR.`);


