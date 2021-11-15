
const argv = require('./config/yargs');
const {crearArchivo} = require('./helpers/multiplicar');

console.clear();

//FORMA ANTIGUA
// console.log(process.argv); // se guardan los param
// const [ , , arg3="base=5"] = process.argv; //se desestructura el q necesitamos por pos
// const [,base = 5 ] = arg3.split('='); //se separa el valor del nombre

//CON YARGS
// console.log(argv)


crearArchivo(argv.b , argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch( err => console.log(err))

