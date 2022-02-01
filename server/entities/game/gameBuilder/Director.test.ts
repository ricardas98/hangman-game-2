import Game from "../Game";
import Director from "./Director"
import GameBuilder from "./Game-builder"

describe('Director (builder pattern)', () => {

    let concreteBuilder: GameBuilder;

    function createGame(): void { 
        concreteBuilder = new GameBuilder();
    }

    beforeEach(() => createGame());

    it('is created', () => {
        const concreteBuilder = new GameBuilder();

        const res  =  new Director(concreteBuilder);

        expect(res).toBeDefined();
    })

    it('builds new game with a different match (correct guess) value', () => {
        const game = new Game('elephant', ['e', 'p', 'h'], ['x', 'b'])
        const concreteBuilder = new GameBuilder();
        const builderDirector  =  new Director(concreteBuilder);

        builderDirector.buildGameWithNewMatchesValue(game, ['e','p','h','t']);
        const res = concreteBuilder.getResult();

        expect(res.getMatches()).toEqual(['e','p','h','t']);
    })

    it('builds new game with a different miss value', () => {
        const game = new Game('elephant', ['e', 'p', 'h'], ['x', 'b'])
        const concreteBuilder = new GameBuilder();
        const builderDirector  =  new Director(concreteBuilder);

        builderDirector.buildGameWithNewMissesValue(game, ['x', 'b', 'y', 'z']);
        const res = concreteBuilder.getResult();

        expect(res.getMisses()).toEqual(['x', 'b', 'y', 'z']);
    })
})