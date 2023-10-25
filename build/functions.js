"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.find10OccurWords = void 0;
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
            //console.log(word + ' occorre: ' + counter + ' volte');
        }
    });
    return repeatedWords;
}
exports.find10OccurWords = find10OccurWords;
