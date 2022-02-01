import Builder from "./Builder";
import Game from "../Game";

export default class Director {
    private builder: Builder

    constructor(builder: Builder){
        this.builder = builder;
    }

    setBuilder(builder: Builder){
        this.builder = builder;
    }

    buildGameWithNewMissesValue(game: Game, misses: string[]){
        this.builder.setFields(game)
        .setMisses(misses);
    }

    buildGameWithNewMatchesValue(game: Game, matches: string[]){
        this.builder.setFields(game)
        .setMatches(matches);
    }
}