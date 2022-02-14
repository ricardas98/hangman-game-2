import { MockProxy, mock } from "jest-mock-extended";
import { CreateSessionInteractor } from "../../use-case/implementation/CreateSessionInteractor";
import { SessionD2BConverter } from "./converter/SessionD2BConverter";
import CreateSessionController from "./CreateSessionController";

describe("Create session controller", () => {
  let controller: CreateSessionController;
  let interactor: MockProxy<CreateSessionInteractor>;

  beforeEach(() => {
    initController();
  });

  it("should create game", () => {});

  function initController() {
    controller = new CreateSessionController(
      interactor,
      new SessionD2BConverter()
    );
  }

  function mockInteractor() {
    interactor = mock<CreateSessionInteractor>();
  }
});
