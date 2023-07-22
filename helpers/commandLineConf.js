const yargs = require('yargs');
const { argv } = yargs
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
    })
    .check((argv, option) => {
        if (isNaN(argv.b)) throw 'La base tiene que ser numérica';
        return true;
    });

module.exports = {
    argv,
}
