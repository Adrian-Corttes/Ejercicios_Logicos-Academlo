const capitalizeLetters = (str) => {
    //Implementación
    if(typeof str != 'string'){
        throw new Error('El argumento debe ser una cadena de caracteres (text)');
    }

    let frase = str.split(' ');

    return frase.map(f => f[0].toUpperCase() + f.slice(1)).join(' ');
}


//?QUEDARON PENDIENTES POR PASAR LAS PRUEBAS ESTOS DOS ITEMS  ¡ESTOY TRABAJANDO EN ELLO!.
//!× Debería de invertir los dígitos del entero -13940 a -4931 (3 ms)
//!x Debería de invertir los dígitos del entero -13940 a -4931 (1 ms)   


module.exports = {
    capitalizeLetters
}
