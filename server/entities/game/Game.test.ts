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
    const res = game.getWord();

    expect(res).toBe("cat");
  });

  it("gets missed letters", () => {
    const res = game.getMisses();

    expect(res).toEqual([]);
  });

  it("gets correctly guessed letters", () => {
    const res = game.getMatches();

    expect(res).toEqual([]);
  });

  it("gets result word", () => {
    game = new Game("elephant", ["e", "n", "t"], []);

    const res = game.getResultWord();

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
    const res = game.guess("a");

    expect(res.getMatches()).toEqual(["a"]);
    expect(res.getMisses()).toEqual([]);
  });
});
