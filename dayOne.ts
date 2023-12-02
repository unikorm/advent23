
import * as fs from 'fs';

const extractNumbers = (str: string): number => {
    const intigers = str.match(/\d+/g);  // regex to find numbers in string
    return parseInt(intigers ? intigers.join('') : '');  //  return numbers
}


const filePath = 'input.txt';
const ValuesArr: number[] = []
function processFile(filePath: string) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const lines = fileContent.split('\n');

    for (const line of lines) {
        const numbers = extractNumbers(line);
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
// const test: number[] = [11, 22, 33, 44];
let sum: number = 0;
for (let k = 0; k < finalInt.length; k++) {
    sum = sum + finalInt[k];
}

console.log(ValuesArr, finalInt, sum);
