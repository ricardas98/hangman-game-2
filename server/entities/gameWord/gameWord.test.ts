import GameWord from "./gameWord"

describe("GameWord entity", () => {
    let gameWord: GameWord;

    function createGameWord(): void { 
        gameWord = new GameWord('cat');
    }

    beforeEach(() => createGameWord());

    it("is created", () => {
        expect(gameWord).toBeDefined();
    })

    it("gets missed letters", () => {
        const res = gameWord.getMisses();
        expect(res).toEqual([]);
    })

    it("gets correctly guessed letters", () => {
        const res = gameWord.getMatches();
        expect(res).toEqual([]);
    })

    it("gets formatted guessed word", () => {
        gameWord = new GameWord('elephant', ['e', 'n', 't'], []);
        const res  = gameWord.getGuessedWord();
        expect(res).toEqual("e_e___nt");
    })

    it("handles guessed letter", () => {
        const res  = gameWord.guess('a');
        expect(res.getMatches()).toEqual(['a']);
        expect(res.getMisses()).toEqual([]);
    })
})