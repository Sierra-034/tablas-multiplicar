require('colors');
const argv = require("./config/yargs");
const { crearArchivo } = require("./helpers/multiplicar");

console.clear();
const { base, listar } = argv;
const onSuccess = (nombreArchivo) => console.log(nombreArchivo.italic, 'creado');
crearArchivo(base, listar)
    .then(onSuccess)
    .catch(console.error);
