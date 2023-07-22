const fs = require('fs');
const colors = require('colors');

async function crearArchivo(base = 5, listar = false) {
    try {
        let salida = '';
        for (let i = 1; i <= 10; i++)
            salida += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
    
        if (listar) {
            console.log('===================='.green);
            console.log('    Tabla del:', colors.yellow(base));
            console.log('===================='.green);
            console.log(salida);
        }

        fs.writeFileSync(`tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo,
}
