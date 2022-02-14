import express from "express";
import cors from "cors";

export default class App {
  private app: any;
  private port: number;

  constructor(router: any, port: number) {
    this.port = port;
    this.app = express();
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use("/api/sessions", router);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
  getApp() {
    return this.app;
  }
}
