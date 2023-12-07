
import * as fs from 'fs';

const filePath = 'inputDayFour.txt';


// here we have on the left are winning number i must find in my numbers on the right
// first retrive winning and my numbers
// then compare how much my numbers are winning 
// and then first match has 1 point, and then double it on each next, i didn't understand that part a lot but gpt help me with mathematical expression on it
// and sum of all points will be result 


const processFile = (filePath: string): void => {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const lines = fileContent.split('\n');

    let final: number = 0;

    for (const line of lines) {
        
    }
}

processFile(filePath)