import SessionCreateRoute from "./rest/implementation/SessionCreateRoute";
import SessionB2RConverter from "./rest/implementation/converter/SessionB2RConverter";
import { Request, Response } from "express";
import SessionUpdateRoute from "./rest/implementation/SessionUpdateRoute";
import SessionDeleteRoute from "./rest/implementation/SessionDeleteRoute";
import CreateSessionUseCase from "./use-case/api/CreateSessionUseCase";
import UpdateSessionUseCase from "./use-case/api/UpdateSessionUseCase";
import DeleteSessionUseCase from "./use-case/api/DeleteSessionUseCase";

export default class SessionRouter {
  private router: any;
  private createSessionInteractor: CreateSessionUseCase;
  private updateSessionInteractor: UpdateSessionUseCase;
  private deleteSessionInteractor: DeleteSessionUseCase;

  constructor(
    createSessionInteractor: CreateSessionUseCase,
    updateSessionInteractor: UpdateSessionUseCase,
    deleteSessionInteractor: DeleteSessionUseCase
  ) {
    this.router = require("express").Router();
    this.createSessionInteractor = createSessionInteractor;
    this.updateSessionInteractor = updateSessionInteractor;
    this.deleteSessionInteractor = deleteSessionInteractor;
    this.buildRoutes();
  }

  getRouter() {
    return this.router;
  }

  private buildRoutes() {
    this.router.post("/", (req: Request, res: Response) => {
      new SessionCreateRoute(
        this.createSessionInteractor,
        new SessionB2RConverter()
      ).create(res);
    });

    this.router.put("/:id", (req: Request, res: Response) => {
      new SessionUpdateRoute(
        this.updateSessionInteractor,
        new SessionB2RConverter()
      ).update(req, res);
    });

    this.router.delete("/:id", (req: Request, res: Response) => {
      new SessionDeleteRoute(this.deleteSessionInteractor).delete(req, res);
    });
  }
}
