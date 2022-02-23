module.exports = function toReadable (number) {
  
    let numObj = {
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
        '20': 'twenty',
        '30': 'thirty',
        '40': 'forty',
        '50': 'fifty',
        '60': 'sixty',
        '70': 'seventy',
        '80': 'eighty',
        '90': 'ninety',
        '0': '',
    }


    if(number === 0) {
        return 'zero' 
    };
    if(number <= 19) {
        return (numObj[number + '']); 
    };
    if(number > 19 && number <= 99) {
        return (numObj[number - (number % 10)+''] +' '+numObj[number % 10 + ''] || '').trim();
    };
    if(number % 100 == 0) {
        return (numObj[Math.floor(number / 100) + ''] + ' hundred');
    };
    if( number > 100) {
        return (numObj[Math.floor(number / 100) + ''] + ' hundred ' + toReadable(number % 100));
    };
}
