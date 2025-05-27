const readline = require('readline-sync');

const secreto = Math.floor(Math.random() * 10) + 1;
let intento;

do {
    intento = readline.questionInt("Adivina el número (1-10): ");
    if (intento < secreto) {
        console.log("Demasiado bajo");
    } else if (intento > secreto) {
        console.log("Demasiado alto");
    }
} while (intento !== secreto);

console.log("¡Correcto! El número era:", secreto);


