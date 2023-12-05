
import * as fs from 'fs';

const filePath = 'inputDayTwo.txt';

// must retrive max number of each color cube on each line
// multiplaied max numbers of red, green and blue on each line
// sum of all of multiplication

// example:  Game 12: 9 green, 2 blue; 4 green, 1 blue, 7 red; 2 green, 1 blue, 5 red -> 9 green, 2 blue, 7 red

// i mean, if i can i want it make like on paper in half of hour...

const rgxRed: RegExp = /(\d+)\sred/g;
const rgxGreen: RegExp = /(\d+)\sgreen/g;
const rgxBlue: RegExp = /(\d+)\sblue/g;
const heighestNum: RegExp = /\d+/g;


const processFile = (filePath: string): void => {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const lines = fileContent.split('\n');

    const multiplied: number[] = [];
    let final: number = 0;

    for (const line of lines) {
        const matchesRed = line.match(rgxRed);
        const matchesGreen = line.match(rgxGreen);
        const matchesBlue = line.match(rgxBlue);
        // console.log(matchesBlue);

        let maxNumberRed: number = 0;
        let maxNumberGreen: number = 0;
        let maxNumberBlue: number = 0;
        
        matchesRed?.forEach(match => {
            const [number, color] = match.split(' ');
            const numericValue = parseInt(number, 10);
            if (numericValue > maxNumberRed) {
                maxNumberRed = numericValue;
            };
        });
        // console.log(maxNumberRed);
        matchesGreen?.forEach(match => {
            const [number, color] = match.split(' ');
            const numericValue = parseInt(number, 10);
            if (numericValue > maxNumberGreen) {
                maxNumberGreen = numericValue;
            };
        });
        // console.log(maxNumberGreen);
        matchesBlue?.forEach(match => {
            const [number, color] = match.split(' ');
            const numericValue = parseInt(number, 10);
            if (numericValue > maxNumberBlue) {
                maxNumberBlue = numericValue;
            };
        });
        // console.log(maxNumberBlue);

        multiplied.push(maxNumberRed * maxNumberGreen * maxNumberBlue);
    };
    console.log(multiplied);

    multiplied.forEach(num => final += num);
    console.log(final);
};

processFile(filePath);