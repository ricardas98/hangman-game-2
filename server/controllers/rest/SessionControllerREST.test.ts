import { mock } from "jest-mock-extended";
import Session from "../../entities/session/Session";
import CreateSessionInteractor from "../../use-cases/implementation/create-session/CreateSessionInteractor";
import SessionControllerREST from "./SessionControllerREST";
import SessionOutputData from "../../output-data/SessionOutputData";
import { GameState } from "../../entities/game-state/GameState";
import SessionB2RConverter from "../../presenters/rest/SessionB2RConverter";
import { getMockReq, getMockRes } from "@jest-mock/express";

describe("Session controller", () => {
  let controller: SessionControllerREST;
  let outputData: SessionOutputData;

  function mockInteractor() {
    const interactor = mock<CreateSessionInteractor>();
    interactor.create.mockReturnValue(
      new SessionOutputData("1", GameState.Running, ["a"], ["b", "c"])
    );
    return interactor;
  }

  function createController() {
    controller = new SessionControllerREST(mockInteractor());
  }

  function setOutputData() {
    outputData = new SessionOutputData(
      "1",
      GameState.Running,
      ["a"],
      ["b", "c"]
    );
  }

  beforeEach(() => {
    setOutputData();
    createController();
  });

  it("is created", () => {
    expect(controller).toBeDefined();
  });

  it("created a new session", async () => {
    const { res } = getMockRes();

    await controller.create(res);

    expect(res.status).toBeCalledWith(201);
    expect(res.send).toBeCalledWith(
      new SessionB2RConverter().processData(outputData)
    );
  });
});
