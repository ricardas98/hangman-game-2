import DeleteSessionUseCase from "../api/DeleteSessionUseCase";
import DeleteSessionInteractor from "./DeleteSessionInteractor";
import { MockProxy, mock } from "jest-mock-extended";
import SessionGateway from "../../gateway/api/SessionGateway";
import BoundaryDeleteSessionInput from "../api/entity/BoundaryDeleteSessionInput";

describe("Delete session interactor", () => {
  let interactor: DeleteSessionUseCase;
  let sessionAccessInMemory: MockProxy<SessionGateway>;

  function buildMockSessionAccessInMemory() {
    sessionAccessInMemory = mock<SessionGateway>();
  }

  function initInteractor() {
    interactor = new DeleteSessionInteractor(sessionAccessInMemory);
  }

  beforeEach(() => {
    buildMockSessionAccessInMemory();
    initInteractor();
  });

  it("deletes existing game", () => {
    sessionAccessInMemory.delete.mockImplementation(() => {});
    interactor.delete(new BoundaryDeleteSessionInput("1"));

    expect(sessionAccessInMemory.delete).toBeCalledTimes(1);
  });
});
