const readline = require('readline-sync');

const num1 = readline.questionFloat("Ingresa el primer número: ");
const num2 = readline.questionFloat("Ingresa el segundo número: ");
const operacion = readline.question("Elige una operación (+, -, *, /): ");

let resultado;

if (operacion === "+") {
    resultado = num1 + num2;
} else if (operacion === "-") {
    resultado = num1 - num2;
} else if (operacion === "*") {
    resultado = num1 * num2;
} else if (operacion === "/") {
    resultado = num2 !== 0 ? num1 / num2 : "Error: división por cero";
} else {
    resultado = "Operación no válida";
}

console.log("Resultado:", resultado);


