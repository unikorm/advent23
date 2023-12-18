
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

// processFile(filePath);  // first part


// part two

let maxValues: number[] = [];
let partValue: number = 0;
let total: number = 0;

const processFilePartTwo = (file: string): void => {
    const fileContent = fs.readFileSync(file, 'utf-8');
    const lines = fileContent.split('\n');

    for (const line of lines) {
        if (!line) {
            maxValues.push(partValue)
            partValue = 0;
        } else {
            partValue += parseInt(line);
        }
    };
    maxValues.push(partValue);
    console.log(maxValues);

    const sortedNumbers: number[] = maxValues.sort((a,b) => b - a);
    const heighestVals: number[] = sortedNumbers.slice(0, 3);

    for (const value of heighestVals) {
        total += value;
    }

    console.log(total);
};

processFilePartTwo(filePath);

