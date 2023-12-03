
import * as fs from 'fs';

const regex = /\d+|one|two|three|four|five|six|seven|eight|nine/g;
const wordToNumber: Record<string, number> = {
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

const extractNumbers = (str: string): number => {
    // const intigers = str.match(regex)?.map((num: string) => {
    //     if (isNaN(Number(num))) {
    //         return wordToNumber[num];
    //     } else {
    //         return num;
    //     }
    // })
    let match;
    const intigers: number[] = [];

    while ((match = regex.exec(str)) !== null) {
        const num: number = isNaN(Number(match[0])) ? wordToNumber[match[0]] : match[0];
        // intigers.push(num);
        if (!isNaN(num)) {
            intigers.push(num);
        }
        const position: number = match.index + match[0].length;
        regex.lastIndex = position;
    }
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