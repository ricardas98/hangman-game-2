import { GameState } from "../../../entities/game-state/GameState";
import OutputData from "../../../output-data/OutputData";
import CreateGameUseCase from "../../input-boundary-models/CreateSessionUseCase";

export default class CreateSessionInteractor implements CreateGameUseCase {
  create(): OutputData {
    return new OutputData("", GameState.Running, [], []);
  }
}
