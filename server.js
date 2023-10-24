"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var words = fs.readFileSync('words.txt', 'utf-8');
console.log(words);
