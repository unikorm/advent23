
import * as fs from 'fs';

const filePath: string = '2022/dayFive/input.txt';

const stackOne: string[] = ['r', 'n', 'p', 'g'];
const stackTwo: string[] = ['t', 'j', 'b', 'l', 'c', 's', 'v', 'h'];
const stackThree: string[] = ['t', 'd', 'b', 'm', 'n', 'l'];
const stackFour: string[] = ['r', 'v', 'p', 's', 'b'];
const stackFive: string[] = ['g', 'c', 'q', 's', 'w', 'm', 'v', 'h'];
const stackSix: string[] = ['w', 'q', 's', 'c', 'd', 'b', 'j']
const stackSeven: string[] = ['f', 'q', 'l'];
const stackEight: string[] = ['w', 'm', 'h', 't', 'd', 'l', 'f', 'v'];
const stackNine: string[] = ['l', 'p', 'b', 'v', 'm', 'j', 'f'];

const matches: { [key: string]: string[] } = {
    '1': stackOne,
    '2': stackTwo,
    '3': stackThree,
    '4': stackFour,
    '5': stackFive,
    '6': stackSix,
    '7': stackSeven,
    '8': stackEight,
    '9': stackNine
};

const processFile = (file: string): void => {
    const fileContent = fs.readFileSync(file, 'utf-8');
    const lines = fileContent.split('\n');
    const startIndex: number = lines.findIndex(line => line.startsWith('move'));

    if (startIndex !== -1) {
        const moves = lines.slice(startIndex);

        for (const move of moves) {
            // console.log(move);
            const numbers: RegExpMatchArray = move.match(/\d+/g)!;
            const [howMuch, from, to] = numbers;
            const count: number = parseInt(howMuch);

            // console.log(howMuch, typeof howMuch, from, to);
            const reload = matches[from].splice(-count);
            matches[to].push(...reload);

        }

    } else {
        console.log('no lines with move at the start wtFUCK...');
    };
    // console.log(stackOne, stackTwo, stackThree);
    const lastLetters: string[] = [];
    const matchesArr: string[][] = Object.values(matches);
    for (const stack of matchesArr) {
        const last: string[] = stack.splice(-1);
        lastLetters.push(...last);
    };

    console.log(lastLetters);

};

processFile(filePath);