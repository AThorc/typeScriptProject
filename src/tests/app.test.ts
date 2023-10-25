import {find10OccurWords} from "../functions";

describe('find10OccurWords', () => {
  test('should return words that occur more than 10 times', () => {
    const words = [
      'word1', 'word1', 'word1', 'word1', 'word1',
      'word1', 'word1', 'word1', 'word1', 'word1',
      'word1', 'word1', 'word2'
    ];
    const result = find10OccurWords(words);
    expect(result).toEqual(['word1']);
  });

  test('should return an empty array if no words occur more than 10 times', () => {
    const words = [
      'word1', 'word2', 'word3', 'word4', 'word5',
      'word6', 'word7', 'word8', 'word9', 'word10'
    ];
    const result = find10OccurWords(words);
    expect(result).toEqual([]);
  });
});
