import SessionB2RConverter from "../../../presenters/rest/SessionB2RConverter";
import UpdateSessionUseCase from "../../../use-cases/input-boundary-models/UpdateSessionUseCase";
import SessionUpdateControllerREST from "./SessionUpdateControllerREST";
import { mock } from "jest-mock-extended";
import SessionOutputData from "../../../output-data/SessionOutputData";
import { GameState } from "../../../entities/game-state/GameState";
import { getMockReq, getMockRes } from "@jest-mock/express";
import { Request, Response } from "express";

describe("Session update controller", () => {
  let controller: SessionUpdateControllerREST;

  function mockInteractor() {
    const interactor = mock<UpdateSessionUseCase>();
    interactor.update.mockReturnValue(
      new SessionOutputData("123", GameState.Running, ["a"], ["b", "c"])
    );
    return interactor;
  }

  function createController() {
    controller = new SessionUpdateControllerREST(
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

  it("updates session", () => {
    const req = getMockReq({
      params: { id: "123" },
      body: { guess: "a" },
    });
    const { res } = getMockRes();
    const outputData = new SessionOutputData(
      "123",
      GameState.Running,
      ["a"],
      ["b", "c"]
    );

    controller.update(req, res);

    expect(res.status).toBeCalledWith(200);
    expect(res.send).toBeCalledWith(
      new SessionB2RConverter().processData(outputData)
    );
  });
});
