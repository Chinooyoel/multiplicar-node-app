const fs = require("fs");
const colors = require("colors");

let crearArchivo = ( base, limite = 10 ) => {
    return new Promise( (resolve, reject ) => {

        if( !Number(base) || !Number(limite) ){
            reject("La base o el limite no es un numero". red);
            return;
        }

        let resultado = "";

        for( let i = 1; i <= limite; i++){
            resultado += `${ base } * ${ i } = ${ base * i}\n`;
        }
            
        fs.writeFile(`tablas/tabla-del-${base}-al-${limite}.txt`, resultado, (err) => {
            if (err) 
            reject(err);
    
            resolve("The file has been saved!".green);
    
        });
    
    
    })


}

let listar = ( base, limite = 10 ) => {

    console.log("==============================".yellow)
    console.log(`Table del ${base} al ${limite}`.yellow)
    console.log("==============================".yellow)

    for( let i = 0; i <= limite; i++ ){
        console.log(` ${ i } * ${ base } = ${ i * base }`);
    }
}

module.exports = {
    crearArchivo,
    listar
}