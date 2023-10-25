export function find10OccurWords(words: string[]): string[]{
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