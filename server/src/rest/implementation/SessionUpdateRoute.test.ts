import SessionB2RConverter from "./converter/SessionB2RConverter";
import UpdateSessionUseCase from "../../use-case/api/UpdateSessionUseCase";
import SessionUpdateRoute from "./SessionUpdateRoute";
import { mock } from "jest-mock-extended";
import BoundarySessionOutput from "../api/entity/BoundarySessionOutput";
import { GameState } from "../../domain/game-state/GameState";
import { getMockReq, getMockRes } from "@jest-mock/express";

describe("Session update controller", () => {
  let controller: SessionUpdateRoute;

  beforeEach(() => {
    createController();
  });

  it("is created", () => {
    expect(controller).toBeDefined();
  });

  it("updates session", () => {
    const req = getMockReq({
      params: { id: "123" },
      body: { guess: "a" },
    });
    const { res } = getMockRes();

    controller.update(req, res);

    expect(res.status).toBeCalledWith(200);
    expect(res.json).toBeCalledWith({
      id: "123",
      state: 0,
      matches: ["a"],
      misses: ["b", "c"],
      resultWord: [[0, "a"]],
    });
  });

  function mockInteractor() {
    const interactor = mock<UpdateSessionUseCase>();
    interactor.update.mockReturnValue(
      new BoundarySessionOutput(
        "123",
        GameState.Running,
        ["a"],
        ["b", "c"],
        new Map<number, string>([[0, "a"]])
      )
    );
    return interactor;
  }

  function createController() {
    controller = new SessionUpdateRoute(
      mockInteractor(),
      new SessionB2RConverter()
    );
  }
});
