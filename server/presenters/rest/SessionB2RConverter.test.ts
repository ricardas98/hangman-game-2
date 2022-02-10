import { GameState } from "../../entities/game-state/GameState";
import BoundarySessionOutput from "../../output-data/BoundarySessionOutput";
import SessionB2RConverter from "./SessionB2RConverter";

describe("Session presenter REST", () => {
  it("returns output data in json string", () => {
    const presenterRest = new SessionB2RConverter();
    const data = new BoundarySessionOutput(
      "1",
      GameState.Running,
      ["a", "b"],
      ["x", "y", "z"]
    );

    const res = presenterRest.processData(data);

    expect(res).toEqual({
      id: "1",
      state: 0,
      matches: ["a", "b"],
      misses: ["x", "y", "z"],
    });
  });
});
