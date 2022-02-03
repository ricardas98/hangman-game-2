import { GameState } from "../game-state/GameState";
import Game from "./Game";

describe("Game entity", () => {
  let game: Game;

  function createGame(): void {
    game = new Game("cat");
  }

  beforeEach(() => createGame());

  it("is created", () => {
    expect(game).toBeDefined();
  });

  it("gets word", () => {
    const res: string = game.getWord();

    expect(res).toBe("cat");
  });

  it("gets missed letters", () => {
    const g1 = game.guess("x");
    const g2 = g1.guess("y");

    const res: string[] = g2.getMisses();

    expect(res).toEqual(["x", "y"]);
  });

  it("gets missed letters empty (empty)", () => {
    const res: string[] = game.getMisses();

    expect(res).toEqual([]);
  });

  it("gets correctly guessed letters", () => {
    const res: string[] = game.getMatches();

    expect(res).toEqual([]);
  });

  it("gets correctly guessed letters (empty)", () => {
    const g1 = game.guess("c");
    const g2 = g1.guess("a");

    const res: string[] = g2.getMatches();

    expect(res).toEqual(["c", "a"]);
  });

  it("gets game state", () => {
    const res = game.getState();

    expect(res).toBe(GameState.Running);
  });

  it("gets result word", () => {
    game = new Game("elephant", ["e", "n", "t"], []);

    const res: Map<number, string> = game.getResultWord();

    expect(res).toEqual(
      new Map<number, string>([
        [0, "e"],
        [2, "e"],
        [6, "n"],
        [7, "t"],
      ])
    );
  });

  it("handles guessed letter", () => {
    const res: Game = game.guess("a");

    expect(res.getMatches()).toEqual(["a"]);
    expect(res.getMisses()).toEqual([]);
  });

  it("handles game state after word has been guessed", () => {
    game = game.guess("a");
    game = game.guess("t");
    game = game.guess("c");

    const resultWord = game.getResultWord();

    expect(game.getState()).toEqual(GameState.Won);
    expect(game.getMatches()).toEqual(["a", "t", "c"]);
    expect(game.getMisses()).toEqual([]);
    expect(resultWord).toEqual(
      new Map<number, string>([
        [1, "a"],
        [2, "t"],
        [0, "c"],
      ])
    );
  });

  it("handles game state after word has been guessed", () => {
    game = game.guess("x");
    game = game.guess("q");
    game = game.guess("e");
    game = game.guess("r");
    game = game.guess("y");
    game = game.guess("u");
    game = game.guess("i");
    game = game.guess("o");
    game = game.guess("p");
    game = game.guess("z");

    const resultWord = game.getResultWord();

    expect(game.getState()).toEqual(GameState.Lost);
    expect(game.getMatches()).toEqual([]);
    expect(game.getMisses()).toEqual([
      "x",
      "q",
      "e",
      "r",
      "y",
      "u",
      "i",
      "o",
      "p",
      "z",
    ]);
    expect(resultWord).toEqual(new Map<number, string>([]));
  });
});
