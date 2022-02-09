import DeleteSessionInteractor from "../../../use-cases/implementation/delete-session/DeleteSessionInteractor";
import SessionDeleteControllerREST from "./SessionDeleteControllerREST";
import { mock } from "jest-mock-extended";
import { getMockReq, getMockRes } from "@jest-mock/express";

describe("Session delete controller", () => {
  let controller: SessionDeleteControllerREST;

  function mockInteractor() {
    const interactor = mock<DeleteSessionInteractor>();
    interactor.delete.mockReturnValue();
    return interactor;
  }

  function createController() {
    controller = new SessionDeleteControllerREST(mockInteractor());
  }

  beforeEach(() => {
    createController();
  });

  it("is created", () => {
    expect(controller).toBeDefined();
  });

  it("deletes session", () => {
    const req = getMockReq({
      params: { id: "123" },
    });
    const { res } = getMockRes();

    controller.delete(req, res);

    expect(res.sendStatus).toBeCalledWith(204);
  });
});
