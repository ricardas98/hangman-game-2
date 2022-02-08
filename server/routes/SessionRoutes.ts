import { createSessionInteractor } from "../Configuration";
import SessionControllerREST from "../controllers/rest/SessionControllerREST";
import DataConverterREST from "../presenters/rest/SessionB2RConverter";
const router = require("express").Router();

router.post("/", (req: any, res: any) => {
  new SessionControllerREST(
    createSessionInteractor,
    new DataConverterREST()
  ).create(res);
});

export default router;
