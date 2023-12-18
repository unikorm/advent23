"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var calibrationValues = null;
// const ValuesArr: string[] = calibrationValues.split(" ");
// console.log(calibrationValuesArr);
var extractNumbers = function (str) {
    var intigers = str.match(/\d+/g); // regex to find numbers in string
    return parseInt(intigers ? intigers.join('') : ''); //  return numbers
    // let result = '';
    // for (const char of str) {
    //     if (/\d/.test(char)) {
    //         result += char;
    //     }
    // }
    // return parseInt(result);
};
var filePath = 'input.txt';
var ValuesArr = [];
function processFile(filePath) {
    var fileContent = fs.readFileSync(filePath, 'utf-8');
    var lines = fileContent.split('\n');
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var line = lines_1[_i];
        var numbers = extractNumbers(line);
        // console.log(`Numbers from line "${line}":`, numbers);
        ValuesArr.push(numbers);
    }
}
processFile(filePath);
// console.log(ValuesArr);
// const cisla: number[] = [];
// for (let i = 0; i < ValuesArr.length; i++) {
//     const numbe: number = extractNumbers(ValuesArr[i]);
//     if (numbe > 0) {
//         cisla.push(numbe)
//     }
// }
var againSt = ValuesArr.map(function (num) { return num.toString(); });
for (var j = 0; j < againSt.length; j++) {
    if (againSt[j].length === 1) {
        againSt[j] += againSt[j];
    }
    if (againSt[j].length > 2) {
        var charFirst = againSt[j][0];
        var lastChar = againSt[j][againSt[j].length - 1];
        againSt[j] = ''.concat(charFirst, lastChar);
    }
}
var finalInt = againSt.map(function (num) { return parseInt(num); });
// const test: number[] = [11, 22, 33, 44];
var sum = 0;
for (var k = 0; k < finalInt.length; k++) {
    sum = sum + finalInt[k];
}
console.log(ValuesArr, finalInt, sum);
