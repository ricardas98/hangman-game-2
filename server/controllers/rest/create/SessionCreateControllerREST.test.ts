import { mock } from "jest-mock-extended";
import SessionCreateControllerREST from "./SessionCreateControllerREST";
import BoundarySessionOutput from "../../../output-data/BoundarySessionOutput";
import { GameState } from "../../../entities/game-state/GameState";

import { getMockRes } from "@jest-mock/express";
import CreateSessionsUseCase from "../../../use-cases/input-boundary-models/CreateSessionUseCase";
import SessionB2RConverter from "../../../presenters/rest/SessionB2RConverter";

describe("Session create controller", () => {
  let controller: SessionCreateControllerREST;
  const outputData = new BoundarySessionOutput("1", GameState.Running, [], []);

  beforeEach(() => {
    createController();
  });

  it("is created", () => {
    expect(controller).toBeDefined();
  });

  it("created a new session", () => {
    const { res } = getMockRes();

    controller.create(res);

    expect(res.status).toBeCalledWith(201);
    expect(res.json).toBeCalledWith({
      id: "1",
      state: 0,
      matches: [],
      misses: [],
    });
  });

  function mockInteractor() {
    const interactor = mock<CreateSessionsUseCase>();
    interactor.create.mockReturnValue(outputData);
    return interactor;
  }

  function createController() {
    controller = new SessionCreateControllerREST(
      mockInteractor(),
      new SessionB2RConverter()
    );
  }
});
