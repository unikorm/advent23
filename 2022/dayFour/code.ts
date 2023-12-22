
import * as fs from 'fs';

const filePath: string = '2022/dayFour/input.txt';

const processFile = (file: string): void => {
    const fileContent = fs.readFileSync(file, 'utf-8');
    const lines = fileContent.split('\n');

    let totalFullContaining: number = 0;

    for (const line of lines) {
        const parts: string[] = line.split(',');
        // console.log(parts);
        const partOne: number[] = parts[0].split('-').map(Number);
        const partTwo: number[] = parts[1].split('-').map(Number);

        const lineOne: number[] = [];
        const lineTwo: number[] = [];

        const [startOne, endOne] = partOne;
        for (let i = startOne; i <= endOne; i++) {
            lineOne.push(i);
        };

        const [startTwo, endTwo] = partTwo;
        for (let j = startTwo; j <= endTwo; j++) {
            lineTwo.push(j);
        };

        if (lineOne.length >= lineTwo.length) {
            const contain: boolean = lineTwo.some(value => lineOne.includes(value));
            // console.log(contain);
            if (contain) {
                totalFullContaining += 1;
            };
        } else if (lineOne.length < lineTwo.length) {
            const contain: boolean = lineOne.some(value => lineTwo.includes(value));
            // console.log(contain);
            if (contain) {
                totalFullContaining += 1;
            };
        };


        // console.log(lineTwo);
        
    };

    console.log(totalFullContaining);

};

processFile(filePath);