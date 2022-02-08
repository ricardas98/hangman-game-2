import {
  createSessionInteractor,
  updateSessionInteractor,
} from "../Configuration";
import SessionCreateControllerREST from "../controllers/rest/create/SessionCreateControllerREST";
import SessionB2RConverter from "../presenters/rest/SessionB2RConverter";
import { Request, Response } from "express";
import SessionUpdateControllerREST from "../controllers/rest/update/SessionUpdateControllerREST";

const router = require("express").Router();

router.post("/", (req: Request, res: Response) => {
  new SessionCreateControllerREST(
    createSessionInteractor,
    new SessionB2RConverter()
  ).create(res);
});

router.put("/:id", (req: Request, res: Response) => {
  new SessionUpdateControllerREST(
    updateSessionInteractor,
    new SessionB2RConverter()
  ).update(req, res);
});

export default router;
