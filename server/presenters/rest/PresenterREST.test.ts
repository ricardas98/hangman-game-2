import { GameState } from "../../entities/game-state/GameState";
import OutputData from "../../output-data/OutputData";
import PresenterREST from "./PresenterREST";
import SessionPresenterREST from "./PresenterREST";

describe("Session presenter REST", () => {
  it("returns output data in json string", () => {
    const presenterRest = new PresenterREST();
    const data = new OutputData(
      "1",
      GameState.Running,
      ["a", "b"],
      ["x", " y", "z"]
    );

    const res = presenterRest.processData(data);

    expect(res).toBe(
      '{"id":"1","state":0,"matches":["a","b"],"misses":["x"," y","z"]}'
    );
  });
});
