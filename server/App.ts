import express from "express";
import router from "./routes/SessionRoutes";
const app = express();

app.use("/api/sessions", router);

export default app;
