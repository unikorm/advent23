
import * as fs from 'fs';

const filePath: string = '2022/daySix/input.txt';

const hasUniqueChar = (value: string): boolean => {
    const set = new Set(value);
    return set.size === value.length;
};

const processFile = (file: string): void => {
    const fileContent = fs.readFileSync(file, 'utf-8');
    const line = fileContent.split('');
    let value: string = '';
    let point: number = 0;

    for (let char of line) {
        value += char;
        point += 1;
        if (value.length === 14) {
            let marker = value;
            if (hasUniqueChar(marker)) {
                console.log(marker, point);
                return;
            };

        value = value.slice(1);
        };
    };
};

processFile(filePath);

