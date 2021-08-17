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
    let result = '';
    let arr = [];
    let str = '';

    for (let i = 0; i < expr.length; i++) {
        str = str + expr[i];
        if ((i + 1) % 10 === 0) {
            arr.push(str);
            str = '';
        }
    }

    result = arr.map(e => {
        let morse = '';
        let str = '';
        let difStr = '';
        let dec = '';
        e = Number(e);

        while (e) {
            str = (e % 10) + str;
            e = Math.floor(e / 10)
        }

        for (let i = 0; i < str.length; i++) {
            difStr = difStr + str[i];
            if (difStr.length % 2 === 0) {
                if (Number(difStr) === 10) {
                    morse = morse + '.'
                } else if (Number(difStr) === 11) {
                    morse = morse + '-';
                }
                difStr = '';
            }
        }
        
        dec = MORSE_TABLE[morse];
        return dec;
    })

    result = result.map(e => {
        if (e == undefined) {
            e = ' ';
        }
        return e;
    })
    return result.join('');
}

module.exports = {
    decode
}
