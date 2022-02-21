import { SessionGateway } from "gateway/api/SessionGateway";
import { mock, MockProxy } from "jest-mock-extended";
import { of } from "rxjs";
import { SessionD2BConverter } from "./converter/SessionD2BConverter";
import { DeleteSessionInteractor } from "./DeleteSessionInteractor";

describe("Delete session interactor", () => {
  let interactor: DeleteSessionInteractor;
  let gateway: MockProxy<SessionGateway>;

  beforeEach(() => {
    mockGateway();
    initInteractor();
  });

  it("deletes session", () => {
    gateway.delete.mockReturnValue(of(true));

    interactor.delete("1").subscribe(res => expect(res).toBeTruthy());
  });

  function mockGateway() {
    gateway = mock<SessionGateway>();
  }

  function initInteractor() {
    interactor = new DeleteSessionInteractor(
      gateway,
      new SessionD2BConverter()
    );
  }
});
