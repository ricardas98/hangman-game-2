import { GameState } from "../../game-state/GameState";
import State from "./State";

export default class RunningState implements State {
  getState(): GameState {
    return GameState.Running;
  }
}
