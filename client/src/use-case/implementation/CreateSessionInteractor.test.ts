import { MockProxy, mock } from "jest-mock-extended";
import { of } from "rxjs";
import { BoundarySessionOutput } from "../api/entity/BoundarySessionOutput";
import { SessionGateway } from "../../gateway/api/SessionGateway";
import { CreateSessionUseCase } from "../api/CreateSessionUseCase";
import { CreateSessionInteractor } from "./CreateSessionInteractor";
import { Session } from "../../domain/Session";

describe("Create session interactor", () => {
  let interactor: CreateSessionUseCase;
  let gateway: MockProxy<SessionGateway>;

  beforeEach(() => {
    mockGateway();
    initInteractor();
  });

  it("Creates session", () => {
    const session = new Session("123", 0, [], [], []);
    const boundarySession = new BoundarySessionOutput("123", 0, [], [], []);
    gateway.create.mockReturnValue(of(session));

    const observable = interactor.create();

    observable.subscribe((res) => expect(res).toEqual(boundarySession));
  });

  function mockGateway() {
    gateway = mock<SessionGateway>();
  }

  function initInteractor() {
    interactor = new CreateSessionInteractor(gateway);
  }
});
