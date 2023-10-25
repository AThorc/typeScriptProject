"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var readlineSync = require("readline-sync");
var functions_1 = require("./functions");
function main() {
    var userInput = readlineSync.question('Inserisci il path del file (locale o un URL):');
    console.log("Path inserito:", userInput);
    var words = fs.readFileSync(userInput, 'utf-8');
    var regexWords = /\b\w+\b/g;
    var regexLetters = /[a-zA-Z]/g;
    var regexSpaces = /\s/g;
    var wordList = words.match(regexWords);
    var letterList = words.match(regexLetters);
    var spacesList = words.match(regexSpaces);
    var repeatedWords = (0, functions_1.find10OccurWords)(Array.from(wordList));
    console.log("Numero parole: " + wordList.length);
    console.log("Numero lettere: " + letterList.length);
    console.log("Numero spazo: " + spacesList.length);
    console.log("Parole che si ripetono più di 10 volte: " + repeatedWords);
    console.log("Numero parole che si ripetono più di 10 volte: " + repeatedWords.length);
}
main();
