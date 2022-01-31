import GameWord from "./gameWord"

describe("GameWord entity", () => {
    let gameWord: GameWord;

    function createGameWord(): void { 
        gameWord = new GameWord("cat");
    }

    function populateMissesAndMatchesArray(gameWord: GameWord): void{
        gameWord.addMatch('c');
        gameWord.addMatch('a');
        gameWord.addMiss('x');
        gameWord.addMiss('y');
        gameWord.addMiss('z');
    }

    beforeEach(() => createGameWord());

    it("is created", () => {
        expect(gameWord).toBeDefined();
    })

    it("gets missed letters", () => {
        const res = gameWord.getMisses();
        expect(res).toEqual([]);
    })

    it("adds a missed letter", () => {
        gameWord.addMiss('x');
        const res = gameWord.getMisses();
        expect(res).toEqual(['x'])
    })

    it("gets correctly guessed letters", () => {
        const res = gameWord.getMatches();
        expect(res).toEqual([]);
    })

    it("adds a correctly guessed letter", () => {
        gameWord.addMatch('c');
        const res = gameWord.getMatches();
        expect(res).toEqual(['c'])
    })

    it("guess is correct", () => {
        const res = gameWord.isGuessCorrect('c');
        expect(res).toBeTruthy();
    })

    it("letter was already guessed", () => {
        populateMissesAndMatchesArray(gameWord)
        const res = gameWord.wasLetterAlreadyGuessed('c')
        expect(res).toBeTruthy();
    })
   
    it("joins two string arrays into one", ()=> {
        populateMissesAndMatchesArray(gameWord)
        const res = gameWord.mergeMatchesAndMisses();
        expect(res).toEqual(['x', 'y', 'z', 'c', 'a'])
    })
})