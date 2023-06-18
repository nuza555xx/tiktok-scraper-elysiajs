import { Application } from "./apps/application";

(() => {
  const application: Application = new Application();
  application.startServer();
})()