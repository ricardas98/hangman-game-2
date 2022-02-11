import { mock } from "jest-mock-extended";
import SessionCreateRoute from "../../../src/rest/implementation/SessionCreateRoute";
import BoundarySessionOutput from "../../../src/rest/api/entity/BoundarySessionOutput";
import { GameState } from "../../../src/domain/game-state/GameState";
import { getMockRes } from "@jest-mock/express";
import CreateSessionsUseCase from "../../../src/use-case/api/CreateSessionUseCase";
import SessionB2RConverter from "../../../src/rest/implementation/converter/SessionB2RConverter";

describe("Session create controller", () => {
  let controller: SessionCreateRoute;
  const outputData = new BoundarySessionOutput(
    "1",
    GameState.Running,
    [],
    [],
    new Map<number, string>([])
  );

  beforeEach(() => {
    createController();
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
      resultWord: [],
    });
  });

  function mockInteractor() {
    const interactor = mock<CreateSessionsUseCase>();
    interactor.create.mockReturnValue(outputData);
    return interactor;
  }

  function createController() {
    controller = new SessionCreateRoute(
      mockInteractor(),
      new SessionB2RConverter()
    );
  }
});
