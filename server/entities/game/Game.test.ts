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
    game = new Game("elephant", ["n", "t", "e"], []);

    const res: Map<number, string> = game.getResultWord();

    expect(res).toEqual(
      new Map<number, string>([
        [6, "n"],
        [7, "t"],
        [0, "e"],
        [2, "e"],
      ])
    );
  });

  it("handles guessed letter", () => {
    const res: Game = game.guess("a");
    const resultWord = res.getResultWord();

    expect(res.getMatches()).toEqual(["a"]);
    expect(res.getMisses()).toEqual([]);

    expect(resultWord).toEqual(new Map<number, string>([[1, "a"]]));
  });

  it("handles already guessed letters", () => {
    const res = game.guess("a");
    const res1 = res.guess("a");

    const resultWord = res1.getResultWord();

    expect(res1.getMatches()).toEqual(["a"]);
    expect(res.getMisses()).toEqual([]);

    expect(resultWord).toEqual(new Map<number, string>([[1, "a"]]));
  });

  it("handles already missed letter", () => {
    const res = game.guess("x");
    const res1 = res.guess("x");

    const resultWord = res1.getResultWord();

    expect(res1.getMatches()).toEqual([]);
    expect(res.getMisses()).toEqual(["x"]);

    expect(resultWord).toEqual(new Map<number, string>([]));
  });

  it("handles game state after word has been guessed", () => {
    ["a", "t", "c"].forEach((letter) => (game = game.guess(letter)));

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
    ["x", "q", "e", "r", "y", "u", "i", "o", "p", "z"].forEach(
      (letter) => (game = game.guess(letter))
    );

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

  it("sets game to lost when there are 10 misses", () => {
    ["x", "y", "z", "q", "r", "u", "o", "p", "b", "n"].forEach((l) => {
      game = game.guess(l);
    });

    expect(game.getState()).toEqual(GameState.Lost);
    expect(game.getMisses()).toEqual([
      "x",
      "y",
      "z",
      "q",
      "r",
      "u",
      "o",
      "p",
      "b",
      "n",
    ]);
  });

  it("sets game to won the word is guessed", () => {
    ["t", "c", "a"].forEach((l) => {
      game = game.guess(l);
    });

    expect(game.getState()).toEqual(GameState.Won);
    expect(game.getMatches()).toEqual(["t", "c", "a"]);
  });
});
