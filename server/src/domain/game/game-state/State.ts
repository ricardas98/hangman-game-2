import { GameState } from "../../game-state/GameState";

export default interface State {
  getState(): GameState;
}
