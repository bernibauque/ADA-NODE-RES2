const readline = require('readline-sync');

let opcion;

do {
    console.log("\n1. Ver mensaje de bienvenida");
    console.log("2. Mostrar un texto personalizado");
    console.log("3. Salir");

    opcion = readline.question("Elige una opcion: ");

    if (opcion === "1") {
        console.log("¡Bienvenida a nuestra aplicacion!");
    } else if (opcion === "2") {
        const texto = readline.question("Escribí un texto y lo mostraremos: ");
        console.log("Tu texto fue:", texto);
    } else if (opcion !== "3") {
        console.log("Opcion no válida.");
    }
} while (opcion !== "3");

console.log("¡Gracias por usar el programa!");



