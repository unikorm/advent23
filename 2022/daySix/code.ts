
import * as fs from 'fs';

const filePath: string = '2022/daySix/test.txt';

const processFile = (file: string): void => {
    const fileContent = fs.readFileSync(file, 'utf-8');
    const line = fileContent.split('\n');
    console.log(line);
    

};

processFile(filePath);

