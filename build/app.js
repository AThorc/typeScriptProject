"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var readlineSync = require("readline-sync");
var functions_1 = require("./functions");
var node_fetch_1 = require("node-fetch");
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
    return __awaiter(this, void 0, void 0, function () {
        var userInput, words, response, wordList, repeatedWords;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userInput = readlineSync.question('Inserisci il path del file (locale o un URL):');
                    console.log("Path inserito:", userInput);
                    if (!userInput.startsWith("http")) return [3 /*break*/, 3];
                    return [4 /*yield*/, (0, node_fetch_1.default)(userInput, {
                            method: 'GET',
                            headers: {
                                Accept: 'application/json',
                            },
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.text()];
                case 2:
                    words = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    words = fs.readFileSync(userInput, 'utf-8');
                    _a.label = 4;
                case 4:
                    console.log('words: ' + JSON.stringify(words));
                    wordList = process(new WordsFactory(), words);
                    process(new LettersFactory(), words);
                    process(new SpacesFactory(), words);
                    repeatedWords = (0, functions_1.find10OccurWords)(Array.from(wordList));
                    console.log("Parole che si ripetono più di 10 volte: " + repeatedWords);
                    console.log("Numero parole che si ripetono più di 10 volte: " + repeatedWords.length);
                    return [2 /*return*/];
            }
        });
    });
}
main();
