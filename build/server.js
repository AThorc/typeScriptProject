"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var readlineSync = require("readline-sync");
function main() {
    var userInput = readlineSync.question('Inserisci il path del file (può essere locale o un URL):');
    console.log("Path inserito:", userInput);
    var words = fs.readFileSync(userInput, 'utf-8');
    var regexWords = /\b\w+\b/g;
    var regexLetters = /[a-zA-Z]/g;
    var regexSpaces = /\s/g;
    var wordList = words.match(regexWords);
    var letterList = words.match(regexLetters);
    var spacesList = words.match(regexSpaces);
    var repeatedWords = find10OccurWords(Array.from(wordList));
    console.log("Numero parole: " + wordList.length);
    console.log("Numero lettere: " + letterList.length);
    console.log("Numero spazo: " + spacesList.length);
    console.log("Parole che si ripetono più di 10 volte: " + repeatedWords);
    console.log("Numero parole che si ripetono più di 10 volte: " + repeatedWords.length);
}
function find10OccurWords(words) {
    var countersMap = new Map();
    words.forEach(function (word) {
        if (countersMap.has(word)) {
            countersMap.set(word, countersMap.get(word) + 1);
        }
        else {
            countersMap.set(word, 1);
        }
    });
    var repeatedWords = [];
    countersMap.forEach(function (counter, word) {
        if (counter > 10) {
            repeatedWords.push(word);
        }
    });
    return repeatedWords;
}
main();
