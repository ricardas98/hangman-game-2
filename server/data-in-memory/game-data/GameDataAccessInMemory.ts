import GameDataGateway from "../../data-gateway/GameDataGateway";
import Game from "../../entities/game/Game";

const sessions = require("../../memory/Sessions");

export default class GameDataAccessInMemory implements GameDataGateway {
  tryCreate(): Game {
    return new Game();
  }
  tryDelete(): void {}
  tryUpdate(): Game {
    return new Game();
  }
  tryFetchAll(): Game[] {
    let games: Game[] = [];
    return games;
  }
  tryFindById(): Game {
    return new Game();
  }
}
