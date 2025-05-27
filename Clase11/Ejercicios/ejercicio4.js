const readline = require('readline-sync');

const contraseña = readline.question("Introduce tu contraseña: ", {
    hideEchoBack: true
});

if (contraseña === "secreto123") {
    console.log("Acceso concedido");
} else {
    console.log("Acceso denegado");
}



