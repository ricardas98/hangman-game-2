import { GameState } from "../../game-state/GameState";
import State from "./State";

export default class WonState implements State {
  getState(): GameState {
    return GameState.Won;
  }
}
