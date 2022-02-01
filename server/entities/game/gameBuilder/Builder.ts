import GameBuilder from "./Game-builder";
import Game from "../Game"

export default interface Builder {
    reset(): void,
    setFields(game: Game): GameBuilder,
    setWord(word: string): GameBuilder,
    setMisses(misses: string[]): GameBuilder,
    setMatches(matches: string[]): GameBuilder,
}