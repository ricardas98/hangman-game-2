import { mock } from "jest-mock-extended";
import SessionControllerREST from "./SessionControllerREST";
import BoundarySessionOutput from "../../output-data/BoundarySessionOutput";
import { GameState } from "../../entities/game-state/GameState";
import SessionB2RConverter from "../../presenters/rest/SessionB2RConverter";
import { getMockRes } from "@jest-mock/express";
import CreateSessionsUseCase from "../../use-cases/input-boundary-models/CreateSessionUseCase";

describe("Session controller", () => {
  let controller: SessionControllerREST;
  let outputData: BoundarySessionOutput;

  beforeEach(() => {
    BuildOutputData();
    createController();
  });

  it("is created", () => {
    expect(controller).toBeDefined();
  });

  it("created a new session", () => {
    const { res } = getMockRes();

    controller.create(res);

    expect(res.status).toBeCalledWith(201);
    expect(res.send).toBeCalledWith(
      new SessionB2RConverter().processData(outputData)
    );
  });

  function mockInteractor() {
    const interactor = mock<CreateSessionsUseCase>();
    interactor.create.mockReturnValue(
      new BoundarySessionOutput(
        "1",
        GameState.Running,
        ["a"],
        ["b", "c"],
        new Map<number, string>([[0, "a"]])
      )
    );
    return interactor;
  }

  function createController() {
    controller = new SessionControllerREST(
      mockInteractor(),
      new SessionB2RConverter()
    );
  }

  function BuildOutputData() {
    outputData = new BoundarySessionOutput(
      "1",
      GameState.Running,
      ["a"],
      ["b", "c"],
      new Map<number, string>([[0, "a"]])
    );
  }
});
