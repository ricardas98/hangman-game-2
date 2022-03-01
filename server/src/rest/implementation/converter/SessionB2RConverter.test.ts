import { GameState } from "../../../domain/game-state/GameState";
import BoundarySessionOutput from "../../../use-case/api/entity/BoundarySessionOutput";
import SessionB2RConverter from "./SessionB2RConverter";

describe("Session presenter REST", () => {
  it("returns output data in json string", () => {
    const presenterRest = new SessionB2RConverter();
    const data = new BoundarySessionOutput(
      "1",
      GameState.Running,
      ["a", "b"],
      ["x", "y", "z"],
      new Map<number, string>([
        [0, "a"],
        [3, "b"],
      ])
    );

    const res = presenterRest.processData(data);

    expect(res.id).toEqual("1");
    expect(res.matches).toEqual(["a", "b"]);
    expect(res.misses).toEqual(["x", "y", "z"]);
    expect(res.resultWord).toEqual([
      [0, "a"],
      [3, "b"],
    ]);
    expect(res.state).toEqual(0);
  });
});
