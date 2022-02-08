import Session from "../../entities/session/Session";
import CreateSessionInteractor from "../../use-cases/implementation/create-session/CreateSessionInteractor";
import SessionControllerREST from "./SessionControllerREST";

jest.mock(
  "../../use-cases/implementation/create-session/CreateSessionInteractor",
  () => {
    return {
      CreateSessionInteractor: jest.fn().mockImplementation(() => {
        return {
          create: () => {
            return new Session("1", 134446, "cat");
          },
        };
      }),
    };
  }
);

describe("Session controller", () => {
  let controller: SessionControllerREST;
  let interactor;

  function createController() {
    controller = new SessionControllerREST(new CreateSessionInteractor());
  }

  beforeAll(() => {
    createController();
  });

  it("is created", () => {
    expect(controller).toBeDefined();
  });

  it("creates session", () => {});
});
