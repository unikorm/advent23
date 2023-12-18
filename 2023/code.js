
const fs = require('fs');

const sumDigitsFirstLast = () => {
    const lines = fs.readFileSync('input.txt', 'utf-8').split('\n');
    
    const digitArrays = lines.map(line =>
        line.split('').filter(c => /\d/.test(c)).map(Number)
    );

    const result = digitArrays.map(digits => digits[0] + digits[digits.length - 1]);

    result.forEach(sum => console.log(sum));
}

sumDigitsFirstLast();
