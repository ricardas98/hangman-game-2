import BoundarySessionOutput from "../../api/entity/BoundarySessionOutput";
import RestSession from "./RestSesion";

export default class SessionB2RConverter {
  processData(data: BoundarySessionOutput): RestSession {
    return new RestSession(
      data.getSessionId(),
      data.getGameState(),
      data.getMatches(),
      data.getMisses(),
      Array.from(data.getResultWord())
    );
  }
}
