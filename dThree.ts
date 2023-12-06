
import * as fs from 'fs';

const filePath: string = 'inputDayThree.txt';

// from input from each line retrieve numbers who are adjacent to any symbol but not dot(.)
// next task is bit more complicated, i need retrieve even number what are adjacent diagonally....

const regLine: RegExp = /(?<!\.)\d+(?!\.)/g;
// /(?<=\D|^)\d+(?=\D|$)(?!\.)/g

const processFile = (filePath: string): void => {
    const fileContent: string = fs.readFileSync(filePath, 'utf-8');
    const lines: string[] = fileContent.split('\n');

    const matchedAll: any[] = [];
    for (const line of lines) {
        const matched = line.match(regLine);
        matchedAll?.push(matched);
        // let match: RegExpExecArray | null;
        // while ((match = regLine.exec(line)) !== null ) {
        //     matchedAll.push(match[1]);
        // };
    };

    console.log(matchedAll);
};

processFile(filePath);















// i find some guy doing it in Kotlin and this is transcription in TS by ChatGPT
// he doing it pretty nice in grid scheme and i just look at it and fuuuu... imposter arrived...

// function part1(input: string[]): number {
//     const r: number = input.length;
//     const c: number = input[0].length;
//     let ret: number = 0;

//     for (let i: number = 0; i < r; i++) {
//         let j: number = 0;
//         while (j < c) {
//             // Check if the current character is not a digit
//             if (!input[i][j].match(/\d/)) {
//                 j += 1;
//                 continue;
//             }

//             // Parse a multi-digit number starting from the current position (j)
//             let k: number = j;
//             let numval: number = 0;
//             while (k < c && input[i][k].match(/\d/)) {
//                 numval = 10 * numval + (parseInt(input[i][k++], 10));
//             }

//             // Check adjacent characters for certain conditions
//             let adj: boolean = false;
//             for (let a: number = Math.max(0, j - 1); a < Math.min(c, k + 1); a++) {
//                 if (i - 1 >= 0 && !input[i - 1][a].match(/\d/) && input[i - 1][a] !== '.') {
//                     adj = true;
//                 }
//                 if (!input[i][a].match(/\d/) && input[i][a] !== '.') {
//                     adj = true;
//                 }
//                 if (i + 1 < r && !input[i + 1][a].match(/\d/) && input[i + 1][a] !== '.') {
//                     adj = true;
//                 }
//             }

//             // If adjacent conditions are met, add the parsed number to the result
//             if (adj) {
//                 ret += numval;
//             }

//             // Update the column position to the position after the parsed number
//             j = k;
//         }
//     }

//     // Return the accumulated result
//     return ret;
// }
