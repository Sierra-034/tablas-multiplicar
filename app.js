const { crearArchivo } = require("./helpers/multiplicar");
const argv = require('yargs').argv;

console.clear();
console.log(process.argv);
console.log(argv);
console.log('base: yargs', argv.base);

// const onSuccess = (nombreArchivo) => console.log(nombreArchivo, 'creado');
// crearArchivo(base)
//     .then(onSuccess)
//     .catch(console.error);
