import { MockProxy, mock } from "jest-mock-extended";
import { CreateSessionUseCase } from "../../use-case/api/CreateSessionUseCase";
import { SessionB2VConverter } from "./converter/SessionB2VConverter";
import CreateSessionController from "./CreateSessionController";

describe("Create session controller", () => {
  let controller: CreateSessionController;
  let interactor: MockProxy<CreateSessionUseCase>;

  beforeEach(() => {
    initController();
  });

  it.todo("should create game");

  function initController() {
    controller = new CreateSessionController(
      interactor,
      new SessionB2VConverter()
    );
  }

  function mockInteractor() {
    interactor = mock<CreateSessionUseCase>();
  }
});
