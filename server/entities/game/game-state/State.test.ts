import { GameState } from "../../game-state/GameState";
import LostState from "./LostState";
import RunningState from "./RunningState";
import WonState from "./WonState";

describe("State pattern", () => {
  it("creates running state", () => {
    const runningState = new RunningState();

    const res = runningState.getState();

    expect(res).toBe(GameState.Running);
  });

  it("creates won state", () => {
    const wonState = new WonState();

    const res = wonState.getState();

    expect(res).toBe(GameState.Won);
  });

  it("creates lost state", () => {
    const lostState = new LostState();

    const res = lostState.getState();

    expect(res).toBe(GameState.Lost);
  });
});
