const readline = require('readline-sync');

const lista = [];
let continuar = true;

while (continuar) {
    const item = readline.question("Agrega un producto a la lista: ");
    lista.push(item);

    const respuesta = readline.question("¿Deseas agregar otro producto? (s/n): ");
    continuar = respuesta.toLowerCase() === 's';
}

console.log("Tu lista de compras:");
console.log(lista);


