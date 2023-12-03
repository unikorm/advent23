
import * as fs from 'fs';

const regex = /(?=\d+)(?=(?:one|two|three|four|five|six|seven|eight|nine))/g;
// (?=(\d...|one|two|three|four|five|six|seven|eight...))
// (?i)(one|two|three|four|five|six|seven|eight|nine){2,}
// (?i)(one|two|three|four|five|six|seven|eight|nine){2,}|\d+
// \d+|(?:one|two|three|four|five|six|seven|eight|nine)
// \d+|\bone\b|\btwo\b|\bthree\b|\bfour\b|\bfive\b|\bsix\b|\bseven\b|\beight\b|\bnine\b

const wordToNumber = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
  };


const extractNumbers = (str: string): number => {  // i need return all the numbers in this function (both the digits and letter numbers)
    const intigers = str.match(regex)?.map((num: string) => {
        if (isNaN(Number(num))) {
            return wordToNumber[num];
        } else {
            return num;
        }
    })
    return parseInt(intigers ? intigers.join('') : '');
}

const filePath = 'input.txt';
const ValuesArr: number[] = []
function processFile(filePath: string) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const lines = fileContent.split('\n');
    // console.log(lines);

    for (const line of lines) {
        const numbers: number = extractNumbers(line);
        ValuesArr.push(numbers);
    }
}
processFile(filePath);

const againSt: string[] = ValuesArr.map(num => num.toString());
for (let j = 0; j < againSt.length; j++) {

    if (againSt[j].length === 1) {
        againSt[j] += againSt[j];
    }

    if (againSt[j].length > 2) {
        const charFirst: string = againSt[j][0];
        const lastChar: string = againSt[j][againSt[j].length - 1];
        againSt[j] = ''.concat(charFirst, lastChar);
    }
}

const finalInt: number[] = againSt.map(num => parseInt(num));
let sum: number = 0;
for (let k = 0; k < finalInt.length; k++) {
    sum = sum + finalInt[k];
}

console.log(ValuesArr, againSt, finalInt, sum);