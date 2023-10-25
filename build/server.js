"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Inserisci il path del file (può essere locale o un URL): ", function (answer) {
    console.log("Path inserito:", answer);
    var words = fs.readFileSync(answer, 'utf-8');
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
    rl.close();
});
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
