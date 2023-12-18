"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var filePath = '2022/dayOne/test.txt';
var processFile = function (file) {
    var fileContent = fs.readFileSync(file, 'utf-8');
    var lines = fileContent.split('\n');
    // console.log(lines);
    var finalNumber = 0;
    var partNumber = 0;
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var line = lines_1[_i];
        if (line) {
            partNumber += parseInt(line);
        }
        else if (!line) {
            if (partNumber > finalNumber) {
                finalNumber = partNumber;
            }
            else {
                return;
            }
        }
    }
};
processFile(filePath);
