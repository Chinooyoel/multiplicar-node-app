let opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}

let argv = require("yargs")
                .command("listar", "Lista una tabla de multiplicar", opciones)
                .command("crear", "Crea un archivo con la tabla de multiplicar especificada", opciones)
                .argv;

module.exports = {
    argv
}