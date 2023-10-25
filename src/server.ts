import * as fs from 'fs';
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question("Inserisci il path del file (può essere locale o un URL): ", function(answer) {
    console.log("Path inserito:", answer);
    const words = fs.readFileSync(answer, 'utf-8');
    const regexWords = /\b\w+\b/g;
    const regexLetters = /[a-zA-Z]/g;
    const regexSpaces = /\s/g;
    const wordList = words.match(regexWords);
    const letterList = words.match(regexLetters);
    const spacesList = words.match(regexSpaces);
    const repeatedWords = find10OccurWords(Array.from(wordList));
    console.log("Numero parole: " + wordList.length);
    console.log("Numero lettere: " + letterList.length);
    console.log("Numero spazo: " + spacesList.length);
    console.log("Parole che si ripetono più di 10 volte: " + repeatedWords);
    console.log("Numero parole che si ripetono più di 10 volte: " + repeatedWords.length);
    rl.close();
  });

  function find10OccurWords(words: string[]): string[]{
    const countersMap = new Map<string, number>();
    words.forEach(word => {
        if(countersMap.has(word)) {
            countersMap.set(word, countersMap.get(word)! + 1);
        } else{
            countersMap.set(word, 1);
        }        
    });

    const repeatedWords: string[] = [];
    countersMap.forEach((counter, word) => {
        if(counter > 10) {
            repeatedWords.push(word);
        }
    });
    return repeatedWords;
  }
