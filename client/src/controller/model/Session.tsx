import { GameState } from "./GameState";

export default class Session {
    readonly id: string;
    readonly state: GameState;
    readonly matches: string[];
    readonly misses: string[];
    readonly resultWord: string[];

    constructor(
         id: string,
         state: number,
         matches: string[],
         misses: string[],
         resultWord: string[],
    ){
        this.id = id;
        this.state = state;
        this.matches = matches;
        this.misses = misses;
        this.resultWord = resultWord
    }
}