import Director from "./gameBuilder/Director";
import GameBuilder from "./gameBuilder/Game-builder";

export default class Game {
    private word: string;
    private matches: string[];
    private misses: string[];

    constructor(word: string = "", matches: string[] = [], misses: string[] = []){
        this.word = word;
        this.matches = matches;
        this.misses = misses;
    }

    guess(letter: string): Game{
        if(this.isLetterAlreadyGuessed(letter)) return this;

        if(this.isGuessCorrect(letter)) return this.addMatch(letter);
        else return this.addMiss(letter)
    }

    getWord(): string{
        return this.word
    }

    setWord(word :string){
        this.word = word
    }

    getMatches(): string[]{
        return this.matches
    }

    setMatches(matches :string[]){
        this.matches = matches
    }

    getMisses(): string[]{
        return this.misses
    }

    setMisses(misses :string[]){
        this.misses = misses
    }

    getResultWord(): Map<number, string>{
        return this.buildResultWord();
    }

    private buildResultWord(): Map<number, string>{
        let resultWord = new Map<number, string>();
        const wordArr: string[] = [...this.word];
        wordArr.map((e, i) => {
            this.addLetterToMapIfItsInArray(resultWord, wordArr, i)
        })
        return resultWord;
    }

    private addLetterToMapIfItsInArray(map: Map<number, string>, arr: string[], index: number){
        this.matches.includes(arr[index]) && map.set(index, arr[index]);
    }

    private addMatch(letter: string): Game
    {
        const builder = new GameBuilder();
        return builder.setFields(this).setMatches(this.matches.concat(letter)).getResult();
    }

    private addMiss(letter: string): Game{
        const builder = new GameBuilder();
        return builder.setFields(this).setMisses(this.misses.concat(letter)).getResult();
    }

    private isGuessCorrect(letter: string){
        return this.word.includes(letter);
    }

    private isLetterAlreadyGuessed(letter: string){
        const merged = this.mergeMatchesAndMisses();
        return merged.includes(letter)
    }

    private mergeMatchesAndMisses(): string[] {
        const merged: string[] = this.misses.concat(this.matches);
        return merged;
    }
}