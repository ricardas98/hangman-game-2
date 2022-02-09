import { GameState } from "../../game-state/GameState";
import State from "./State";

export default class LostState implements State {
  getState(): GameState {
    return GameState.Lost;
  }
}
