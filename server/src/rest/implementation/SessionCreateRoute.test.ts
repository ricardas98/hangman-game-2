import { mock } from "jest-mock-extended";
import SessionCreateRoute from "./SessionCreateRoute";
import BoundarySessionOutput from "../api/entity/BoundarySessionOutput";
import { GameState } from "../../domain/game-state/GameState";

import { getMockRes } from "@jest-mock/express";
import CreateSessionsUseCase from "../../use-case/api/CreateSessionUseCase";
import SessionB2RConverter from "./converter/SessionB2RConverter";

describe("Session create controller", () => {
  let controller: SessionCreateRoute;

  function mockInteractor() {
    const interactor = mock<CreateSessionsUseCase>();
    interactor.create.mockReturnValue(
      new BoundarySessionOutput(
        "1",
        GameState.Running,
        [],
        [],
        new Map<number, string>([])
      )
    );
    return interactor;
  }

  function createController() {
    controller = new SessionCreateRoute(
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
    const outputData = new BoundarySessionOutput(
      "1",
      GameState.Running,
      [],
      [],
      new Map<number, string>([])
    );

    controller.create(res);

    expect(res.status).toBeCalledWith(201);
    expect(res.json).toBeCalledWith({
      id: "1",
      state: 0,
      matches: [],
      misses: [],
      resultWord: [],
    });
  });
});
