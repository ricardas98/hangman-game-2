export default class GameWord {
    word: string;
    misses: string[];
    matches: string[];

    constructor(word: string){
        this.word = word;
        this.misses = [];
        this.matches = [];
    }

    isGuessCorrect(letter: string){
        return this.word.includes(letter);
    }

    wasLetterAlreadyGuessed(letter: string){
        const merged = this.mergeMatchesAndMisses();
        return merged.includes(letter)
    }

    mergeMatchesAndMisses(): string[] {
        const merged: string[] = this.misses.concat(this.matches);
        return merged;
    }


    addMiss(letter: string): void{
        this.misses.push(letter)
    }

    getMisses(): string[]{
        return this.misses
    }

    addMatch(letter: string): void{
        this.matches.push(letter)
    }

    getMatches(): string[]{
        return this.matches
    }
}