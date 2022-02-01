export default class GameWord {
    private word: string;
    private matches: string[];
    private misses: string[];

    constructor(word: string, matches: string[] = [], misses: string[] = []){
        this.word = word;
        this.matches = matches;
        this.misses = misses;
    }

    guess(c: string): GameWord{
        if(this.isLetterAlreadyGuessed(c)) return this;

        if(this.isGuessCorrect(c)) return this.addMatch(c);
        else return this.addMiss(c)
    }

    getMatches(): string[]{
        return this.matches
    }

    getMisses(): string[]{
        return this.misses
    }

    getGuessedWord(): string{
        return this.buildGuessedWord();
    }

    private buildGuessedWord(): string{
        const wordArr: string[] = [...this.word]
        let guessedW: string = ""
        wordArr.forEach(letter => {
            if(this.matches.includes(letter)){
                guessedW += letter
            }else{
                guessedW += '_'
            }
        });
        return guessedW;
    }

    private addMatch(c: string): GameWord
    {
        return new GameWord(this.word, this.matches.concat(c), this.misses);
    }

    private addMiss(c: string): GameWord{
        return new GameWord(this.word, this.matches, this.misses.concat(c));
    }

    private isGuessCorrect(c: string){
        return this.word.includes(c);
    }

    private isLetterAlreadyGuessed(c: string){
        const merged = this.mergeMatchesAndMisses();
        return merged.includes(c)
    }

    private mergeMatchesAndMisses(): string[] {
        const merged: string[] = this.misses.concat(this.matches);
        return merged;
    }
}