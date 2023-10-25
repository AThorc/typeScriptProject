import * as fs from 'fs';
import * as readlineSync from 'readline-sync';
import {find10OccurWords} from "./functions";
import fetch from 'node-fetch';

/**
 * The Abstract Factory interface declares a set of methods that return
 * abstract elements.
 */
interface AbstractFactory {
    createElements(): AbstractElements;
}

class WordsFactory implements AbstractFactory{
    public createElements(): AbstractElements {
        return new ConcreteWords();
    }
}

class LettersFactory implements AbstractFactory{
    public createElements(): AbstractElements {
        return new ConcreteLetters();
    }
}

class SpacesFactory implements AbstractFactory{
    public createElements(): AbstractElements {
        return new ConcreteSpaces();
    }
}

interface AbstractElements {
    create(fileContent: string): RegExpMatchArray;
}

class ConcreteWords  implements AbstractElements{
    public create(fileContent: string): RegExpMatchArray{
        const regexWords = /\b\w+\b/g;
        const wordList = fileContent.match(regexWords);
        console.log("Numero parole: " + wordList.length);
        return wordList;
    }
}

class ConcreteLetters implements AbstractElements {
    public create(fileContent: string): RegExpMatchArray{
        const regexLetters = /[a-zA-Z]/g;
        const letterList = fileContent.match(regexLetters);
        console.log("Numero lettere: " + letterList.length);
        return letterList;
    }
}

class ConcreteSpaces implements AbstractElements {
    public create(fileContent: string): RegExpMatchArray{
        const regexSpaces = /\s/g;
        const spacesList = fileContent.match(regexSpaces);
        console.log("Numero spazi: " + spacesList.length);       
        return spacesList;
    }
}

function process(factory: AbstractFactory, fileContent:string): RegExpMatchArray{
    const elements = factory.createElements();
    return elements.create(fileContent);
}

async function main(): Promise<void> {
    const userInput = readlineSync.question('Inserisci il path del file (locale o un URL):');    
    //console.log("Path inserito:", userInput);
    var words:string;
    if(userInput.startsWith("http")){
        const response = await fetch(userInput, {
            method: 'GET',
            headers: {
              Accept: 'application/json',
            },
        });
        words = await response.text();
    }else{
        words = fs.readFileSync(userInput, 'utf-8');
    }
    //console.log('words: ' + JSON.stringify(words));
    const wordList = process(new WordsFactory(), words);
    process(new LettersFactory(), words);
    process(new SpacesFactory(), words);
    const repeatedWords = find10OccurWords(Array.from(wordList));
    console.log("Parole che si ripetono più di 10 volte: " + repeatedWords);
    console.log("Numero parole che si ripetono più di 10 volte: " + repeatedWords.length);
}

main();
