const logica  = require("./logica/logica");
let argv = require("./config/yargs").argv;


switch( argv._[0]){
    case "listar" : {
        logica.listar( argv.base, argv.limite );
        break;
    }
    case "crear" : {
        logica.crearArchivo( argv.base, argv.limite ).then( ( resp ) => {
            console.log( resp );
            }).catch( ( err ) => {
            console.log( err )
            });
        break;
    }
    default: {
        console.log("No se ha encontrado el comando");
    }
}

    /*
    //Contiene los argumentos recibidos de la pantalla de comandos

    let argv = process.argv;
    let tercerComando = process.argv[2];
    let valorDelTercerComando = tercerComando.split("=")[1];
    */
