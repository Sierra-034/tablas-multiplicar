const fs = require('fs');
const colors = require('colors');

async function crearArchivo(base = 5, listar = false, hasta = 10) {
    try {
        let salida = '';
        let consola = '';
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
        }
    
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
