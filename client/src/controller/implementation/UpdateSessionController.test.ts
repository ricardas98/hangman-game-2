import { ViewSession } from "../../controller/model/ViewSession";
import { MockProxy, mock } from "jest-mock-extended";
import { BoundarySessionOutput } from "../../use-case/api/entity/BoundarySessionOutput";
import { UpdateSessionUseCase } from "../../use-case/api/UpdateSessionUseCase";
import { SessionB2VConverter } from "./converter/SessionB2VConverter";
import { UpdateSessionController } from "./UpdateSessionController";
import { of } from "rxjs";

describe("Update sesion converte", () => {
  let controller: UpdateSessionController;
  let useCase: MockProxy<UpdateSessionUseCase>;

  beforeEach(() => {
    mockInteractor();
    initController();
  });

  it("updates game", done => {
    const boundarySession = new BoundarySessionOutput(
      "123",
      0,
      ["a"],
      [],
      [[0, "a"]]
    );
    const viewSession = new ViewSession("123", 0, ["a"], [], "a");
    useCase.update.mockReturnValue(of(boundarySession));

    controller.update("132", "a").subscribe(res => {
      expect(res).toEqual(viewSession);
      done();
    });
  });

  function mockInteractor() {
    useCase = mock<UpdateSessionUseCase>();
  }

  function initController() {
    controller = new UpdateSessionController(
      useCase,
      new SessionB2VConverter()
    );
  }
});
