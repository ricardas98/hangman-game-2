import DeleteSessionUseCase from "../api/DeleteSessionUseCase";
import DeleteSessionInteractor from "./DeleteSessionInteractor";
import { MockProxy, mock } from "jest-mock-extended";
import SessionGateway from "../../gateway/api/SessionGateway";

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
    interactor.delete("1");

    expect(sessionAccessInMemory.delete).toBeCalledTimes(1);
  });
});
