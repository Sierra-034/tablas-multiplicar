const fs = require('fs');

function tablaMultiplicar() {
    const base = 4
    let salida = '';
    for (let i = 1; i <= 10; i++) {
        salida += `${base} x ${i} = ${base * i}\n`;
    }

    console.log(salida);
    fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
        if (err) throw err;
        console.log(`tabla-${base}.txt creado`);
    });
}

tablaMultiplicar();
