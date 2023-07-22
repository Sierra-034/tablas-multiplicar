const argv = require("./config/yargs");
const { crearArchivo } = require("./helpers/multiplicar");

console.clear();
console.log(argv);
const { base, listar } = argv;
const onSuccess = (nombreArchivo) => console.log(nombreArchivo, 'creado');
crearArchivo(base, listar)
    .then(onSuccess)
    .catch(console.error);
