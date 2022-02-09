import express from "express";
import router from "./routes/SessionRoutes";
const app = express();

app.use(express.json());

app.use("/api/sessions", router);

export default app;
