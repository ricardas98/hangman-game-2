import SessionControllerREST from "./SessionControllerREST";
jest.mock(
  "../../use-cases/implementation/create-session/CreateSessionInteractor"
);
//import CreateSessionInteractor from "../../use-cases/implementation/create-session/CreateSessionInteractor";

describe("Session controller", () => {
  it("is created", () => {
    const interactor = require("../../use-cases/implementation/create-session/CreateSessionInteractor");

    const res = new SessionControllerREST(interactor);

    expect(res).toBeDefined();
  });
});
