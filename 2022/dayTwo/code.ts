
import * as fs from 'fs';

const filePath: string = '2022/dayTwo/input.txt';

const processFile = (file: string): void => {
    const fileContent = fs.readFileSync(file, 'utf-8');
    const lines = fileContent.split('\n');

    const rockOpponent: string = 'A';
    const paperOpponent: string = 'B';
    const scissorsOpponent: string = 'C';

    const rockYou: string = 'X';  // 1
    const paperYou: string = 'Y';  // 2
    const scissorsYou: string = 'Z';  // 3

    // + outcome => 0 for loss;  3 for draw;  6 for win

    let totalScore: number = 0;

    for (const line of lines) {
        switch(line) {
            case 'A X':
                totalScore += 4;
                break;
            case 'A Y':
                totalScore += 8;
                break;
            case 'A Z':
                totalScore += 3;
                break;

            case 'B X':
                totalScore += 1;
                break;
            case 'B Y':
                totalScore += 5;
                break;
            case 'B Z':
                totalScore += 9;
                break;

            case 'C X':
                totalScore += 7;
                break;
            case 'C Y':
                totalScore += 2;
                break;
            case 'C Z':
                totalScore += 6;
                break;
        }  
    }

    console.log(totalScore);
}

// processFile(filePath);


// part Two

const processFilePartTwo = (file: string): void => {
    const fileContent = fs.readFileSync(file, 'utf-8');
    const lines = fileContent.split('\n');

    const rockOpponent: string = 'A';
    const paperOpponent: string = 'B';
    const scissorsOpponent: string = 'C';

    const loseYou: string = 'X';
    const drawYou: string = 'Y';
    const winYou: string = 'Z';
    // 1 -> rock
    // 2 -> paper
    // 3 -> scissors
    // + outcome => 0 for loss;  3 for draw;  6 for win

    let totalScore: number = 0;

    for (const line of lines) {
        switch (line) {
            case 'A X':
                totalScore += 3;
                break;
            case 'A Y':
                totalScore += 4;
                break;
            case 'A Z':
                totalScore += 8;
                break;

            case 'B X':
                totalScore += 1;
                break;
            case 'B Y':
                totalScore += 5;
                break;
            case 'B Z':
                totalScore += 9;
                break;

            case 'C X':
                totalScore += 2;
                break;
            case 'C Y':
                totalScore += 6;
                break;
            case 'C Z':
                totalScore += 7;
                break;
        }
    }

    console.log(totalScore);
};

processFilePartTwo(filePath);