"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var regexLetterDigit = /one|two|three|four|five|six|seven|eight|nine/g;
// input: cnoneight8rdbdjvjbseight     output: cn1n8ight8rdbdjvjbs8ight
// const changeNumbers = (str: string): string => {
//     const changed: string = 
// };
var regexDigits = /\d+/g;
// const wordToNumber: Record<string, number> = {
//     one: 1,
//     two: 2,
//     three: 3,
//     four: 4,
//     five: 5,
//     six: 6,
//     seven: 7,
//     eight: 8,
//     nine: 9
//   };
var extractNumbers = function (str) {
    var _a;
    var intigers = (_a = str.match(regexDigits)) === null || _a === void 0 ? void 0 : _a.map(function (num) {
        return num;
    });
    return parseInt(intigers ? intigers.join('') : '');
};
var filePath = 'input.txt';
var ValuesArr = [];
function processFile(filePath) {
    var fileContent = fs.readFileSync(filePath, 'utf-8');
    var lines = fileContent.split('\n');
    // console.log(lines);
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var line = lines_1[_i];
        // here will be changeNumbers function to modify line to letter numbers start with their real digit numbers
        var numbers = extractNumbers(line);
        ValuesArr.push(numbers);
    }
}
processFile(filePath);
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
var sum = 0;
for (var k = 0; k < finalInt.length; k++) {
    sum = sum + finalInt[k];
}
console.log(ValuesArr, againSt, finalInt, sum);
