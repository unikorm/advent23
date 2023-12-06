"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var filePath = 'inputDayThree.txt';
// from input from each line retrieve numbers who are adjacent to any symbol but not dot(.)
// next task is bit more complicated, i need retrieve even number what are adjacent diagonally....
var regLine = /[^.]\d+[^.]/g;
var processFile = function (filePath) {
    var fileContent = fs.readFileSync(filePath, 'utf-8');
    var lines = fileContent.split('\n');
    var matchedAll = [];
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var line = lines_1[_i];
        var matched = line.match(regLine);
        matchedAll === null || matchedAll === void 0 ? void 0 : matchedAll.push(matched);
    }
    ;
    console.log(matchedAll);
};
processFile(filePath);
