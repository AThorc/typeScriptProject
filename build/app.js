"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var readlineSync = require("readline-sync");
var functions_1 = require("./functions");
var WordsFactory = /** @class */ (function () {
    function WordsFactory() {
    }
    WordsFactory.prototype.createElements = function () {
        return new ConcreteWords();
    };
    return WordsFactory;
}());
var LettersFactory = /** @class */ (function () {
    function LettersFactory() {
    }
    LettersFactory.prototype.createElements = function () {
        return new ConcreteLetters();
    };
    return LettersFactory;
}());
var SpacesFactory = /** @class */ (function () {
    function SpacesFactory() {
    }
    SpacesFactory.prototype.createElements = function () {
        return new ConcreteSpaces();
    };
    return SpacesFactory;
}());
var ConcreteWords = /** @class */ (function () {
    function ConcreteWords() {
    }
    ConcreteWords.prototype.create = function (fileContent) {
        var regexWords = /\b\w+\b/g;
        var wordList = fileContent.match(regexWords);
        console.log("Numero parole: " + wordList.length);
        return wordList;
    };
    return ConcreteWords;
}());
var ConcreteLetters = /** @class */ (function () {
    function ConcreteLetters() {
    }
    ConcreteLetters.prototype.create = function (fileContent) {
        var regexLetters = /[a-zA-Z]/g;
        var letterList = fileContent.match(regexLetters);
        console.log("Numero lettere: " + letterList.length);
        return letterList;
    };
    return ConcreteLetters;
}());
var ConcreteSpaces = /** @class */ (function () {
    function ConcreteSpaces() {
    }
    ConcreteSpaces.prototype.create = function (fileContent) {
        var regexSpaces = /\s/g;
        var spacesList = fileContent.match(regexSpaces);
        console.log("Numero spazi: " + spacesList.length);
        return spacesList;
    };
    return ConcreteSpaces;
}());
function process(factory, fileContent) {
    var elements = factory.createElements();
    return elements.create(fileContent);
}
function main() {
    var userInput = readlineSync.question('Inserisci il path del file (locale o un URL):');
    console.log("Path inserito:", userInput);
    var words = fs.readFileSync(userInput, 'utf-8');
    var wordList = process(new WordsFactory(), words);
    process(new LettersFactory(), words);
    process(new SpacesFactory(), words);
    var repeatedWords = (0, functions_1.find10OccurWords)(Array.from(wordList));
    console.log("Parole che si ripetono più di 10 volte: " + repeatedWords);
    console.log("Numero parole che si ripetono più di 10 volte: " + repeatedWords.length);
}
main();
