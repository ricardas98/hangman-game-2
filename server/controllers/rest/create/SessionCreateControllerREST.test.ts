import { mock } from "jest-mock-extended";
import SessionCreateControllerREST from "./SessionCreateControllerREST";
import SessionOutputData from "../../../output-data/SessionOutputData";
import { GameState } from "../../../entities/game-state/GameState";

import { getMockRes } from "@jest-mock/express";
import CreateSessionsUseCase from "../../../use-cases/input-boundary-models/CreateSessionUseCase";
import SessionB2RConverter from "../../../presenters/rest/SessionB2RConverter";

describe("Session create controller", () => {
  let controller: SessionCreateControllerREST;

  function mockInteractor() {
    const interactor = mock<CreateSessionsUseCase>();
    interactor.create.mockReturnValue(
      new SessionOutputData("1", GameState.Running, [], [])
    );
    return interactor;
  }

  function createController() {
    controller = new SessionCreateControllerREST(
      mockInteractor(),
      new SessionB2RConverter()
    );
  }

  beforeEach(() => {
    createController();
  });

  it("is created", () => {
    expect(controller).toBeDefined();
  });

  it("created a new session", () => {
    const { res } = getMockRes();
    const outputData = new SessionOutputData("1", GameState.Running, [], []);

    controller.create(res);

    expect(res.status).toBeCalledWith(201);
    expect(res.send).toBeCalledWith(
      new SessionB2RConverter().processData(outputData)
    );
  });
});
