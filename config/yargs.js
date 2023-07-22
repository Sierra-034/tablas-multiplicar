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
    .check((argv, option) => {
        if (isNaN(argv.b)) throw 'La base tiene que ser numérica';
        return true;
    });

module.exports = argv
