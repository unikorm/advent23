
import * as fs from 'fs';

const regexLetterDigit: RegExp = /one|two|three|four|five|six|seven|eight|nine/g
const replacement: Record<string, string> = {
    "one": "1ne",
    "two": "2wo",
    "three": "3hree",
    "four": "4our",
    "five": "5ive",
    "six": "6ix",
    "seven": "7even",
    "eight": "8ight",
    "nine": "9ine"
};
// input: cnoneight8rdbdjvjbseight     output: cn1n8ight8rdbdjvjbs8ight
const changeNumbers = (str: string): string => {
    const changed: string = 
};

const regexDigits: RegExp = /\d+/g;


const extractNumbers = (str: string): number => {
    const intigers = str.match(regexDigits)?.map((num: string) => {
        return num;
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
        // here will be changeNumbers function to modify line to letter numbers start with their real digit numbers
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