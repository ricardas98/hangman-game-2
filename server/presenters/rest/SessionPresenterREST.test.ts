import { GameState } from "../../entities/game-state/GameState";
import OutputData from "../../output-data/OutputData";
import SessionPresenterREST from "./SessionPresenterREST";

describe("Session presenter REST", () => {
  it("returns output data in json string", () => {
    const data = new OutputData(
      "1",
      GameState.Running,
      ["a", "b"],
      ["x", " y", "z"]
    );

    const res = SessionPresenterREST.processData(data);

    expect(res).toBe(
      '{"id":"1","state":0,"matches":["a","b"],"misses":["x"," y","z"]}'
    );
  });
});
