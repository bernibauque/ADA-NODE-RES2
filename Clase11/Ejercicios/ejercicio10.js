const readline = require('readline-sync');

const preguntas = [
    { pregunta: "¿Capital de Francia?", respuesta: "parís" },
    { pregunta: "¿5 + 3?", respuesta: "8" },
    { pregunta: "¿Color del cielo?", respuesta: "azul" }
];

let puntaje = 0;

for (let i = 0; i < preguntas.length; i++) {
    const respuestaUsuario = readline.question(preguntas[i].pregunta + " ").toLowerCase();
    if (respuestaUsuario === preguntas[i].respuesta.toLowerCase()) {
        console.log("¡Correcto!");
        puntaje++;
    } else {
        console.log("Incorrecto");
    }
}

console.log(`Puntaje final: ${puntaje}/${preguntas.length}`);

