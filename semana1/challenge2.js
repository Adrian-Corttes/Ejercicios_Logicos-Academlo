const reverseInt = (number) => {
    //Implementación
    const reverseNum = number.toString().split('').reverse().join('');

    if(!Number.isInteger(number)){
        throw new Error('Tipo de dato o longitud no admitidos');
    }

    return Number(reverseNum)
}

console.log(reverseInt(13940));

module.exports = {
    reverseInt
}

