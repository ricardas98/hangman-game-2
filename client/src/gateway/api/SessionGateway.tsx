import Session from "../../controller/model/Session";

export interface SessionGateway {
  create(): Session;
  update(): Session;
  delete(id: string): Session;
}
