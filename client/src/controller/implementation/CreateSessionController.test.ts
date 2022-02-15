import { MockProxy, mock } from "jest-mock-extended";
import { Session } from "../../domain/Session";
import { CreateSessionUseCase } from "../../use-case/api/CreateSessionUseCase";
import { SessionB2VConverter } from "./converter/SessionB2VConverter";
import { CreateSessionController } from "./CreateSessionController";
import { of } from "rxjs";
import { BoundarySessionOutput } from "../../use-case/api/entity/BoundarySessionOutput";
import { ViewSession } from "../model/ViewSession";

describe("Create session controller", () => {
  let controller: CreateSessionController;
  let interactor: MockProxy<CreateSessionUseCase>;

  beforeEach(() => {
    mockInteractor();
    initController();
  });

  it("should create game", done => {
    const session = new BoundarySessionOutput("123", 0, [], [], []);
    const viewSession = new ViewSession("123", 0, [], [], []);
    interactor.create.mockReturnValue(of(session));

    const observable = controller.create();

    observable.subscribe(res => {
      expect(res.id).toEqual(viewSession.id);
      expect(res.state).toEqual(viewSession.state);
      expect(res.matches).toEqual(viewSession.matches);
      expect(res.misses).toEqual(viewSession.misses);
      expect(res.resultWord).toEqual(viewSession.resultWord);
      done();
    });
  });

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
