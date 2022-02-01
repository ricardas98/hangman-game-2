import Game from "../Game";

export default class GameBuilder {
  private readonly word: string;
  private readonly matches: string[];
  private readonly misses: string[];

  private constructor(word: string, matches: string[], misses: string[]) {
    this.word = word;
    this.matches = matches;
    this.misses = misses;
  }

  static from(game: Game): GameBuilder {
    return GameBuilder.empty()
      .setWord(game.getWord())
      .setMatches(game.getMatches())
      .setMisses(game.getMisses());
  }

  static empty(): GameBuilder {
    return new GameBuilder("", [], []);
  }

  setWord(word: string): GameBuilder {
    return new GameBuilder(word, this.matches, this.misses);
  }

  setMatches(matches: string[]): GameBuilder {
    return new GameBuilder(this.word, matches, this.misses);
  }

  setMisses(misses: string[]): GameBuilder {
    return new GameBuilder(this.word, this.matches, misses);
  }

  build(): Game {
    return new Game(this.word, this.matches, this.misses);
  }
}
