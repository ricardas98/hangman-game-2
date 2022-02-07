import { GameState } from "../entities/game-state/GameState";
import SessionOutputData from "./SessionOutputData";

describe("Output data", () => {
  let outputData: SessionOutputData;

  function initOutputData() {
    outputData = new SessionOutputData(
      "123",
      GameState.Running,
      ["a", "b"],
      ["x", "y", "z"]
    );
  }

  beforeEach(() => {
    initOutputData();
  });

  it("is created", () => {
    expect(outputData).toBeDefined();
  });

  it("gets id", () => {
    const res = outputData.getSessionId();

    expect(res).toBe("123");
  });

  it("gets game state", () => {
    const res = outputData.getGameState();

    expect(res).toBe(GameState.Running);
  });

  it("gets matches", () => {
    const res = outputData.getMatches();

    expect(res).toEqual(["a", "b"]);
  });

  it("gets misses", () => {
    const res = outputData.getMisses();

    expect(res).toEqual(["x", "y", "z"]);
  });
});
