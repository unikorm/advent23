
import * as fs from 'fs';

const filePath: string = '2022/dayOne/input.txt';

let finalNumber: number = 0;
let partNumber: number = 0;

const processFile = (file: string): void => {
    const fileContent = fs.readFileSync(file, 'utf-8');
    const lines = fileContent.split('\n');

    // console.log(lines);

    for (const line of lines) {
        if (!line) {
            finalNumber = finalNumber < partNumber ? partNumber : finalNumber;
            partNumber = 0;
        } else {
            partNumber += parseInt(line);
            console.log(partNumber);
        }
    }

    finalNumber = finalNumber < partNumber ? partNumber : finalNumber;
    console.log(finalNumber);
};

processFile(filePath);

