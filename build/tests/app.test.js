"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("../functions");
describe('find10OccurWords', function () {
    test('should return words that occur more than 10 times', function () {
        var words = [
            'word1', 'word1', 'word1', 'word1', 'word1',
            'word1', 'word1', 'word1', 'word1', 'word1',
            'word1', 'word1', 'word2'
        ];
        var result = (0, functions_1.find10OccurWords)(words);
        expect(result).toEqual(['word1']);
    });
    test('should return an empty array if no words occur more than 10 times', function () {
        var words = [
            'word1', 'word2', 'word3', 'word4', 'word5',
            'word6', 'word7', 'word8', 'word9', 'word10'
        ];
        var result = (0, functions_1.find10OccurWords)(words);
        expect(result).toEqual([]);
    });
});
