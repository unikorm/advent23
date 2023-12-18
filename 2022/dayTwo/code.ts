
import * as fs from 'fs';

const filePath: string = '2022/dayTwo/test.txt';

const processFile = (file: string): void => {
    const fileContent = fs.readFileSync(file, 'utf-8');
    const lines = fileContent.split('\n');

    for (const line of lines) {
        
    }
}

processFile(filePath);