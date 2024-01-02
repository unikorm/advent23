
import * as fs from 'fs';

const filePath: string = '2022/daySeven/test.txt';

const processFile = (file: string): void => {
    const fileContent = fs.readFileSync(file, 'utf-8');
    const line = fileContent.split('\n');

};

processFile(filePath);