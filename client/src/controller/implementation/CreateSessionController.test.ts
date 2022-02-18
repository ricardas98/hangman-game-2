import { MockProxy, mock } from "jest-mock-extended";
import { CreateSessionUseCase } from "../../use-case/api/CreateSessionUseCase";
import { SessionB2VConverter } from "./converter/SessionB2VConverter";
import { CreateSessionController } from "./CreateSessionController";
import { of } from "rxjs";
import { BoundarySessionOutput } from "../../use-case/api/entity/BoundarySessionOutput";
import { ViewSession } from "../model/ViewSession";

describe("Create session controller", () => {
  let controller: CreateSessionController;
  let useCase: MockProxy<CreateSessionUseCase>;

  beforeEach(() => {
    mockUseCase();
    initController();
  });

  it("creates game", done => {
    const boundarySession = new BoundarySessionOutput("123", 0, [], [], []);
    const viewSession = new ViewSession("123", 0, [], [], "");
    useCase.create.mockReturnValue(of(boundarySession));

    const observable = controller.create();

    observable.subscribe(res => {
      expect(res).toEqual(viewSession);
      done();
    });
  });

  function initController() {
    controller = new CreateSessionController(
      useCase,
      new SessionB2VConverter()
    );
  }

  function mockUseCase() {
    useCase = mock<CreateSessionUseCase>();
  }
});
