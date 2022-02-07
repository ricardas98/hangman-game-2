import { mock } from "jest-mock-extended";
import CreateSessionInteractor from "../../use-cases/implementation/create-session/CreateSessionInteractor";
import SessionControllerREST from "./SessionControllerREST";

describe("Session controller", () => {
  let controller: SessionControllerREST;

  function createController() {
    controller = new SessionControllerREST(mock<CreateSessionInteractor>());
  }

  beforeAll(() => {
    createController();
  });

  it("is created", () => {
    expect(controller).toBeDefined();
  });
});
