import SessionAccessInMemory from "../../../data-in-memory/session-data/SessionAccessInMemory";
import SessionOutputData from "../../../output-data/SessionOutputData";
import DeleteSessionUseCase from "../../input-boundary-models/DeleteSessionUseCase";
import DeleteSessionInteractor from "./DeleteSessionInteractor";
import { MockProxy, mock } from "jest-mock-extended";
import SessionGateway from "../../../data-gateway/SessionGateway";
import Session from "../../../entities/session/Session";
import BoundaryDeleteSession from "../../../input-data/BoundaryDeleteSession";

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
    interactor.delete(new BoundaryDeleteSession("1"));

    expect(sessionAccessInMemory.delete).toBeCalledTimes(1);
  });
});
