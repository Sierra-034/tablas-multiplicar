require('colors');
const argv = require("./config/yargs");
const { crearArchivo } = require("./helpers/multiplicar");

console.clear();
const { base, listar, hasta } = argv;
const onSuccess = (nombreArchivo) => console.log(nombreArchivo.italic, 'creado');
crearArchivo(base, listar, hasta)
    .then(onSuccess)
    .catch(console.error);
