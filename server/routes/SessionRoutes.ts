import { createSessionInteractor } from "../Configuration";
import SessionCreateControllerREST from "../controllers/rest/create/SessionCreateControllerREST";
import SessionB2RConverter from "../presenters/rest/SessionB2RConverter";
const router = require("express").Router();

router.post("/", (req: any, res: any) => {
  new SessionCreateControllerREST(
    createSessionInteractor,
    new SessionB2RConverter()
  ).create(res);
});

export default router;
