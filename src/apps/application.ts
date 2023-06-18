
import Elysia, { ElysiaInstance } from "elysia";
import { ApplicationRoutes } from "./routes";
import swagger from "@elysiajs/swagger";
import { swaggerOptions } from "./constants";

export class Application {
  private _server: Elysia<ElysiaInstance>;
  constructor() {
    this._server = new Elysia().use(swagger(swaggerOptions));
    new ApplicationRoutes(this._server)
  }

  public startServer(): void {
    this._server.listen(8080, ({ hostname, port }) => {
      console.log(`🦊 Elysia is running at http://${hostname}:${port}`)
    });
  }
}