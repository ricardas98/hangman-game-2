import Game from "../Game";
import GameBuilder from "./Game-builder"

describe("Game builder (builder pattern)", () => {

    it('is created', () => {
        const res = new GameBuilder();

        expect(res).toBeDefined();
    })

    it('is reset', () => {
        const res = new GameBuilder();

        res.reset();

        expect(res).toBeDefined();
    })


    it('assigns fields and returns new object', () => {
        const builder = new GameBuilder();
        const game = new Game('cat', ['a', 't'], ['x','y','z']);
        jest.spyOn(game, 'getWord').mockImplementation(() => 'cat');
        jest.spyOn(game, 'getMatches').mockImplementation(() => ['a', 't']);
        jest.spyOn(game, 'getMisses').mockImplementation(() => ['x','y','z']);

        const newGame = builder.setFields(game).getResult();

        expect(newGame.getWord()).toBe('cat');
        expect(newGame.getMatches()).toEqual(['a', 't']);
        expect(newGame.getMisses()).toEqual(['x','y','z']);
    })
})