"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var filePath = 'inputDayTwo.txt';
// must retrive max number of each color cube on each line
// multiplaied max numbers of red, green and blue on each line
// sum of all of multiplication
// example:  Game 12: 9 green, 2 blue; 4 green, 1 blue, 7 red; 2 green, 1 blue, 5 red -> 9 green, 2 blue, 7 red
// i mean, if i can i want it make like on paper in half of hour...
var rgxRed = /(\d+)\sred/g;
var rgxGreen = /(\d+)\sgreen/g;
var rgxBlue = /(\d+)\sblue/g;
var heighestNum = /\d+/g;
var processFile = function (filePath) {
    var fileContent = fs.readFileSync(filePath, 'utf-8');
    var lines = fileContent.split('\n');
    var _loop_1 = function (line) {
        var matchesRed = line.match(rgxRed);
        var matchesGreen = line.match(rgxGreen);
        var matchesBlue = line.match(rgxBlue);
        console.log(matchesBlue);
        var maxNumberRed = 0;
        var maxNumberGreen = 0;
        var maxNumberBlue = 0;
        matchesRed === null || matchesRed === void 0 ? void 0 : matchesRed.forEach(function (match) {
            var _a = match.split(' '), number = _a[0], color = _a[1];
            var numericValue = parseInt(number, 10);
            if (numericValue > maxNumberRed) {
                maxNumberRed = numericValue;
            }
            ;
        });
        // console.log(maxNumberRed);
        matchesGreen === null || matchesGreen === void 0 ? void 0 : matchesGreen.forEach(function (match) {
            var _a = match.split(' '), number = _a[0], color = _a[1];
            var numericValue = parseInt(number, 10);
            if (numericValue > maxNumberGreen) {
                maxNumberGreen = numericValue;
            }
            ;
        });
        // console.log(maxNumberGreen);
        matchesBlue === null || matchesBlue === void 0 ? void 0 : matchesBlue.forEach(function (match) {
            var _a = match.split(' '), number = _a[0], color = _a[1];
            var numericValue = parseInt(number, 10);
            if (numericValue > maxNumberBlue) {
                maxNumberBlue = numericValue;
            }
            ;
        });
        console.log(maxNumberBlue);
    };
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var line = lines_1[_i];
        _loop_1(line);
    }
    ;
};
processFile(filePath);
