import { MockProxy, mock } from "jest-mock-extended";
import { of } from "rxjs";
import { BoundarySessionOutput } from "../api/entity/BoundarySessionOutput";
import { SessionGateway } from "../../gateway/api/SessionGateway";
import { CreateSessionUseCase } from "../api/CreateSessionUseCase";
import { CreateSessionInteractor } from "./CreateSessionInteractor";
import { Session } from "../../domain/Session";
import { SessionD2BConverter } from "./converter/SessionD2BConverter";

describe("Create session interactor", () => {
  let interactor: CreateSessionUseCase;
  let gateway: MockProxy<SessionGateway>;

  beforeEach(() => {
    mockGateway();
    initInteractor();
  });

  it("Creates session", done => {
    const session = new Session("123", 0, [], [], []);
    const boundarySession = new BoundarySessionOutput("123", 0, [], [], []);
    gateway.create.mockReturnValue(of(session));

    interactor.create().subscribe(res => {
      expect(res).toEqual(boundarySession);
      done();
    });
  });

  function mockGateway() {
    gateway = mock<SessionGateway>();
  }

  function initInteractor() {
    interactor = new CreateSessionInteractor(
      gateway,
      new SessionD2BConverter()
    );
  }
});
