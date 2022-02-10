import SessionB2RConverter from "../../../presenters/rest/SessionB2RConverter";
import UpdateSessionUseCase from "../../../use-cases/input-boundary-models/UpdateSessionUseCase";
import SessionUpdateControllerREST from "./SessionUpdateControllerREST";
import { mock } from "jest-mock-extended";
import BoundarySessionOutput from "../../../output-data/BoundarySessionOutput";
import { GameState } from "../../../entities/game-state/GameState";
import { getMockReq, getMockRes } from "@jest-mock/express";
import { Request, Response } from "express";

describe("Session update controller", () => {
  let controller: SessionUpdateControllerREST;

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
    });
  });

  function mockInteractor() {
    const interactor = mock<UpdateSessionUseCase>();
    interactor.update.mockReturnValue(
      new BoundarySessionOutput("123", GameState.Running, ["a"], ["b", "c"])
    );
    return interactor;
  }

  function createController() {
    controller = new SessionUpdateControllerREST(
      mockInteractor(),
      new SessionB2RConverter()
    );
  }
});
