const { crearArchivo } = require("./helpers/multiplicar");

console.clear();
const base = 3
const onSuccess = (nombreArchivo) => console.log(nombreArchivo, 'creado');
crearArchivo(base)
    .then(onSuccess)
    .catch(console.error);
