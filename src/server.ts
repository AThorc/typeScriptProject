import * as fs from 'fs';

const words = fs.readFileSync('words.txt', 'utf-8');
console.log(words);