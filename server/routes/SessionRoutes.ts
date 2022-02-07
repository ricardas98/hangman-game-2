import { createSessionInteractor } from "../Configuration";
import SessionControllerREST from "../controllers/rest/SessionControllerREST";
const router = require("express").Router();

router.get("/", (req: any, res: any) => {
  res.status(200).json({ status: "working" });
});

router.post("/", (req: any, res: any) => {
  new SessionControllerREST(createSessionInteractor()).create(res);
});

export default router;
