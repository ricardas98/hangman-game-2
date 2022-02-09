import { GameState } from "../../game-state/GameState";
import Game from "../Game";
import WonState from "../game-state/WonState";
import GameBuilder from "./GameBuilder";

describe("Game builder (builder pattern)", () => {
  it("is created", () => {
    expect(GameBuilder.empty()).toBeDefined();
  });

  it("assigns fields and returns new object", () => {
    const game = new Game("cat", ["t", "c"], ["x", "y", "z"]);

    const newGame = GameBuilder.from(game).build();

    expect(newGame.getWord()).toBe("cat");
    expect(newGame.getMatches()).toEqual(["t", "c"]);
    expect(newGame.getMisses()).toEqual(["x", "y", "z"]);
  });
});
