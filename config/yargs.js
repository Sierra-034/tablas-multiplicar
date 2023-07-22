const yargs = require('yargs');
const { argv } = yargs
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        description: 'Es la base de la tabla de multiplicar',
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola',
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        description: 'Hasta qué número se debe generar la tabla',
    })
    .check((argv, option) => {
        if (isNaN(argv.b)) throw 'La base tiene que ser numérica';
        if (isNaN(argv.h)) throw 'El argumento h debe ser numérico';
        return true;
    });

module.exports = argv
