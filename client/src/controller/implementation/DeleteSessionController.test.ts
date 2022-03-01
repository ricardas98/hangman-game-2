import { mock, MockProxy } from "jest-mock-extended";
import { of } from "rxjs";
import { DeleteSessionUseCase } from "use-case/api/DeleteSessionUseCase";
import { SessionB2VConverter } from "./converter/SessionB2VConverter";
import { DeleteSessionController } from "./DeleteSessionController";

describe("Delete session controller", () => {
  let controller: DeleteSessionController;
  let useCase: MockProxy<DeleteSessionUseCase>;

  beforeEach(() => {
    mockUseCase();
    initController();
  });

  it("deletes session", done => {
    useCase.delete.mockReturnValue(of(true));

    controller.delete("1").subscribe(res => {
      expect(res).toBeTruthy();
      done();
    });
  });

  function mockUseCase() {
    useCase = mock<DeleteSessionUseCase>();
  }

  function initController() {
    controller = new DeleteSessionController(useCase);
  }
});
