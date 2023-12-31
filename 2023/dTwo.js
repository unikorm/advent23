"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var filePath = 'inputDayTwo.txt';
var regexRed = /\b(?:13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29)\sred\b/;
var regexGreen = /\b(?:14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29)\sgreen\b/;
var regexBlue = /\b(?:15|16|17|18|19|20|21|22|23|24|25|26|27|28|29)\sblue\b/;
var regexId = /Game (\d+):/;
var regexNum = /\d+/;
var ValuesArr = [];
var integers = [];
var final = 0;
var processFile = function (filePath) {
    var fileContent = fs.readFileSync(filePath, 'utf-8');
    var lines = fileContent.split('\n');
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var line = lines_1[_i];
        if (regexRed.test(line) || regexGreen.test(line) || regexBlue.test(line))
            console.log("too big");
        else {
            var match = line.match(regexId);
            ValuesArr.push(match[1]);
        }
        ;
    }
    ;
    for (var j = 0; j < ValuesArr.length; j++) {
        integers.push(parseInt(ValuesArr[j]));
    }
    // integers = ValuesArr.map(str => parseInt(str, 10))
    // integers.forEach(num => final += num);
    for (var i = 0; i < integers.length; i++) {
        final += integers[i];
    }
    ;
};
processFile(filePath);
console.log(integers, final);
