module.exports = function toReadable (number) {
    if ( number === 0) {
    return 'zero';
    }
    
    var zeroToNineteenString = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var tensString = ['', 'ten', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];
    var hundredString = ['', 'one hundred ', 'two hundred ', 'three hundred ', 'four hundred ', 'five hundred ', 'six hundred ', 'seven hundred ', 'eight hundred ', 'nine hundred '];
    
    if (number % 100 < 20) {
    return (hundredString[Math.floor(number / 100)] + zeroToNineteenString[number % 100]).trim();
    } else {
    return (hundredString[Math.floor(number / 100)] + tensString[(Math.floor(number / 10)) % 10] + zeroToNineteenString[number % 10]).trim();
    }
    
    }
