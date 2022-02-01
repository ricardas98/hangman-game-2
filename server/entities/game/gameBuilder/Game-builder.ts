import Game from "../Game";
import Builder from "./Builder";

export default class GameBuilder implements Builder{
    private game: Game;

    constructor(){
        this.game = new Game();
    }

    reset() {
        this.game = new Game();
    }

    setFields(game: Game): GameBuilder{
        this.setWord(game.getWord());
        this.setMatches(game.getMatches());
        this.setMisses(game.getMisses());
        return this;
    }

    setWord(word: string): GameBuilder{
        this.game.setWord(word);
        return this;
    }

    setMatches(matches: string[]): GameBuilder{
        this.game.setMatches(matches);
        return this;
    }

    setMisses(misses: string[]): GameBuilder{
        this.game.setMisses(misses);
        return this;
    }

    getResult(): Game{
        return this.game;
    }
}