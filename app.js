const { crearArchivo } = require("./helpers/multiplicar");

console.clear();
const [,, arg3 = 'base=5'] = process.argv;
const [, base] = arg3.split('=');

const onSuccess = (nombreArchivo) => console.log(nombreArchivo, 'creado');
crearArchivo(base)
    .then(onSuccess)
    .catch(console.error);
