const reverseString = (str) => {
    let message = '';
    for(let i =str.length -1; i >= 0; i--){
        message = message + str[i]
    }

    if(message.length > 15 || message.length <= 1){
            throw new Error('Tipo de dato o longitud no admitidos');
        }

        return message
}

// const reverseString = (str) =>{
//     const message = str.split('').reverse().join('');

//     if(typeof message === 'number' || message.length > 15 || message.length <= 1){
//         throw new Error('Tipo de dato o longitud no admitidos');
//     }

//     return toString(message);
// }

module.exports = {
    reverseString
}
