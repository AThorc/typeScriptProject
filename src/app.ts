import * as fs from 'fs';
import * as readlineSync from 'readline-sync';
import {find10OccurWords} from "./functions";

function main(): void {
    const userInput = readlineSync.question('Inserisci il path del file (locale o un URL):');
    console.log("Path inserito:", userInput);
    const words = fs.readFileSync(userInput, 'utf-8');
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
}

main();