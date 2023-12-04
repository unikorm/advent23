
import * as fs from 'fs';

const filePath = 'inputDayTwo.txt';

const regexRed: RegExp = /\b(?:13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29)\sred\b/;
const regexGreen: RegExp = /\b(?:14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29)\sgreen\b/;
const regexBlue: RegExp = /\b(?:15|16|17|18|19|20|21|22|23|24|25|26|27|28|29)\sblue\b/;
const regexId: RegExp = /Game (\d+):/;

const ValuesArr: string[] = [];

function processFile(filePath: string) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const lines = fileContent.split('\n');

    for (const line of lines) {
        if (regexRed.test(line) || regexGreen.test(line) || regexBlue.test(line)) console.log("too big")
        else {
            const match = line.match(regexId)
            ValuesArr.push(match[0]);
        }
    }
}

processFile(filePath);
console.log(ValuesArr);
