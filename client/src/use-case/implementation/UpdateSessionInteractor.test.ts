import { Session } from "../../domain/Session";
import { SessionGateway } from "../../gateway/api/SessionGateway";
import { MockProxy, mock } from "jest-mock-extended";
import { UpdateSessionUseCase } from "../../use-case/api/UpdateSessionUseCase";
import { UpdateSessionInteractor } from "./UpdateSessionInteractor";
import { SessionD2BConverter } from "./converter/SessionD2BConverter";
import { of } from "rxjs";
import { BoundarySessionOutput } from "../../use-case/api/entity/BoundarySessionOutput";

describe("Update session interactor", () => {
  let interactor: UpdateSessionUseCase;
  let gateway: MockProxy<SessionGateway>;

  beforeEach(() => {
    mockGateway();
    initInteractor();
  });

  it("updates game", done => {
    const session: Session = new Session("123", 0, ["a"], [], [[0, "a"]]);
    const boundarySession = new BoundarySessionOutput(
      "123",
      0,
      ["a"],
      [],
      [[0, "a"]]
    );
    gateway.update.mockReturnValue(of(session));

    interactor.update("123", "a").subscribe(s => {
      expect(s).toEqual(boundarySession);
      done();
    });
  });

  function mockGateway() {
    gateway = mock<SessionGateway>();
  }

  function initInteractor() {
    interactor = new UpdateSessionInteractor(
      gateway,
      new SessionD2BConverter()
    );
  }
});
