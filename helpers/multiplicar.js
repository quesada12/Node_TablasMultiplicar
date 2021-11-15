
const fs = require('fs'); //FileSystem
require('colors'); //Colors


const crearArchivo = async (base=5,listar=false,hasta=10) => {

    try {

        if (listar) {
            console.log('==================='.rainbow);
            console.log(`   Tabla del: ${base}  `.bold);
            console.log('==================='.rainbow);
        }
        
        let salida = '';
        
        
        for (let index = 1; index < hasta+1; index++) {
            salida += `${base} x ${index} = ${base*index}\n`.brightYellow;
        }
        
        listar && console.log(salida);
        
        // fs.writeFile(`tabla-${base}.txt`,salida, (err) => {
        //     if (err) {
        //         throw err
        //     }
        //     console.log('Archivo creado')
        // })
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        
        return (`tabla-${base}.txt`.brightRed);
        
    } catch (error) {
        throw error;
    }
    

}

module.exports = {
    crearArchivo
}