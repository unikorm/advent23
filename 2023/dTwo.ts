
import * as fs from 'fs';

const filePath = 'inputDayTwo.txt';

const regexRed: RegExp = /\b(?:13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29)\sred\b/;
const regexGreen: RegExp = /\b(?:14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29)\sgreen\b/;
const regexBlue: RegExp = /\b(?:15|16|17|18|19|20|21|22|23|24|25|26|27|28|29)\sblue\b/;
const regexId: RegExp = /Game (\d+):/;
const regexNum: RegExp = /\d+/;

const ValuesArr: string[] = [];
let integers: number[] = [];
let final: number = 0;

const processFile = (filePath: string): void => {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const lines = fileContent.split('\n');

    for (const line of lines) {
        if (regexRed.test(line) || regexGreen.test(line) || regexBlue.test(line)) console.log("too big")
        else {
            const match = line.match(regexId)!
            ValuesArr.push(match[1]);
        };
    };

    for (let j = 0; j < ValuesArr.length; j++) {
        integers.push(parseInt(ValuesArr[j]))
    }
    // integers = ValuesArr.map(str => parseInt(str, 10))

    integers.forEach(num => final += num);
    // for (let i: number = 0; i < integers.length; i++) {
    //     final += integers[i]; 
    // };
};

processFile(filePath);
console.log(integers, final);