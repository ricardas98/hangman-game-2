import SessionCreateControllerREST from "../controllers/rest/create/SessionCreateControllerREST";
import SessionB2RConverter from "../presenters/rest/SessionB2RConverter";
import { Request, Response } from "express";
import SessionUpdateControllerREST from "../controllers/rest/update/SessionUpdateControllerREST";
import SessionDeleteControllerREST from "../controllers/rest/delete/SessionDeleteControllerREST";
import CreateSessionUseCase from "../use-cases/input-boundary-models/CreateSessionUseCase";
import UpdateSessionUseCase from "../use-cases/input-boundary-models/UpdateSessionUseCase";
import DeleteSessionUseCase from "../use-cases/input-boundary-models/DeleteSessionUseCase";
import CreateSessionInteractor from "../use-cases/implementation/create-session/CreateSessionInteractor";
import UpdateSessionInteractor from "../use-cases/implementation/update-session/UpdateSessionInteractor";
import DeleteSessionInteractor from "../use-cases/implementation/delete-session/DeleteSessionInteractor";

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
      new SessionCreateControllerREST(
        this.createSessionInteractor,
        new SessionB2RConverter()
      ).create(res);
    });

    this.router.put("/:id", (req: Request, res: Response) => {
      new SessionUpdateControllerREST(
        this.updateSessionInteractor,
        new SessionB2RConverter()
      ).update(req, res);
    });

    this.router.delete("/:id", (req: Request, res: Response) => {
      new SessionDeleteControllerREST(this.deleteSessionInteractor).delete(
        req,
        res
      );
    });
  }
}
