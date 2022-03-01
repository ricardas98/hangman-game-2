import DeleteSessionInteractor from "../../use-case/implementation/DeleteSessionInteractor";
import SessionDeleteRoute from "./SessionDeleteRoute";
import { mock } from "jest-mock-extended";
import { getMockReq, getMockRes } from "@jest-mock/express";

describe("Session delete controller", () => {
  let controller: SessionDeleteRoute;

  function mockInteractor() {
    const interactor = mock<DeleteSessionInteractor>();
    interactor.delete.mockReturnValue();
    return interactor;
  }

  function createController() {
    controller = new SessionDeleteRoute(mockInteractor());
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
