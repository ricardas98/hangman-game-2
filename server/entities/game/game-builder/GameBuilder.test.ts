import { GameState } from "../../game-state/GameState";
import Game from "../Game";
import WonState from "../game-state/WonState";
import GameBuilder from "./GameBuilder";

describe("Game builder (builder pattern)", () => {
  it("is created", () => {
    expect(GameBuilder.empty()).toBeDefined();
  });

  it("assigns fields and returns new object", () => {
    const game = new Game();
    jest.spyOn(game, "getWord").mockImplementation(() => "cat");
    jest.spyOn(game, "getMatches").mockImplementation(() => ["t", "c"]);
    jest.spyOn(game, "getMisses").mockImplementation(() => ["x", "y", "z"]);

    const newGame = GameBuilder.from(game).build();

    expect(newGame.getWord()).toBe("cat");
    expect(newGame.getMatches()).toEqual(["t", "c"]);
    expect(newGame.getMisses()).toEqual(["x", "y", "z"]);
    expect(newGame.getState()).toEqual(GameState.Running);
  });
});
