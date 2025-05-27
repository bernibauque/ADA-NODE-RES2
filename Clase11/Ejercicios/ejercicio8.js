const readline = require('readline-sync');

const sujetos = ["El gato", "Mi abuela", "Un astronauta"];
const verbos = ["come", "pinta", "construye"];
const complementos = ["una casa", "un pastel", "la luna"];

const cantidad = readline.questionInt("¿Cuántas frases deseas generar? ");

for (let i = 0; i < cantidad; i++) {
    const sujeto = sujetos[Math.floor(Math.random() * sujetos.length)];
    const verbo = verbos[Math.floor(Math.random() * verbos.length)];
    const complemento = complementos[Math.floor(Math.random() * complementos.length)];

    console.log(`${sujeto} ${verbo} ${complemento}.`);
}


