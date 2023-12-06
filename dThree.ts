
import * as fs from 'fs';

const filePath = 'inputDayThree.txt';

// from input from each line retrieve numbers who are adjacent to any symbol but not dot(.)
// next task is bit more complicated, i need retrieve even number what are adjacent diagonally....

const regLine: RegExp = /[^.]\d+[^.]/g;

const processFile = (filePath: string): void => {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const lines = fileContent.split('\n');

    const matchedAll = [];
    for (const line of lines) {
        const matched: RegExpMatchArray | null  = line.match(regLine);
        matchedAll?.push(matched);
    };

    console.log(matchedAll);
};

processFile(filePath);