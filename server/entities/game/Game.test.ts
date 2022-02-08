import { GameState } from "../game-state/GameState";
import Game from "./Game";
import RunningState from "./game-state/RunningState";

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

  it("gets missed letters empty (empty)", () => {
    const res: string[] = game.getMisses();

    expect(res).toEqual([]);
  });

  it("gets missed letters", () => {
    const g1 = game.guess("x");
    const g2 = g1.guess("y");

    const res: string[] = g2.getMisses();

    expect(res).toEqual(["x", "y"]);
  });

  it("gets correctly guessed letters (empty)", () => {
    const g1 = game.guess("c");
    const g2 = g1.guess("a");

    const res: string[] = g2.getMatches();

    expect(res).toEqual(["c", "a"]);
  });

  it("gets correctly guessed letters", () => {
    const res: string[] = game.getMatches();

    expect(res).toEqual([]);
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
