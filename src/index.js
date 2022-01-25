const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    let result = [];

    for (let i = 0; i <= (expr.length - 10); i += 10) {

        let char = expr.slice(i, (i + 10));

        if (char === '**********') {
            result.push(' ');
            continue
        };

        let morse = '';

        for (let j = (char.length); j >=2 ; j-=2) {

            let pair = char.slice((j-2), j);

            if (pair === '10') {
                morse = '.' + morse
            } else if (pair === '11') {
                morse = '-' + morse
            } else {
                break
            }
        }

        result.push(MORSE_TABLE[morse])
    }

    return result.join('')
}

module.exports = {
    decode
}