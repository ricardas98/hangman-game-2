import Game from "../Game";
import GameBuilder from "./GameBuilder";

describe("Game builder (builder pattern)", () => {
  it("is created", () => {
    expect(GameBuilder.empty()).toBeDefined();
  });

  it("assigns fields and returns new object", () => {
    const game = new Game("cat", ["a", "t"], ["x", "y", "z"]);

    const newGame = GameBuilder.from(game).build();

    expect(newGame.getWord()).toBe("cat");
    expect(newGame.getMatches()).toEqual(["a", "t"]);
    expect(newGame.getMisses()).toEqual(["x", "y", "z"]);
  });
});
