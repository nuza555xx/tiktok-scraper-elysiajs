import Elysia, { ElysiaInstance } from "elysia";
import { ExampleController } from "../controllers";


export class ApplicationRoutes {
  constructor(private readonly app: Elysia<ElysiaInstance>) {
    const controller = new ExampleController()
    this.app.get('/ping', controller.example)
  }
}