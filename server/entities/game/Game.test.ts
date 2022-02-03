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
    game = new Game("elephant", ["n", "t", "e"], []);

    const res = game.getResultWord();

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
    const res = game.guess("a");
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
});
