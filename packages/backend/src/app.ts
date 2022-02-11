import express, { NextFunction, Request, Response } from "express";
import { Logger } from "winston";
import cors from "cors";
import { ConfigService, LoggerService } from "./shared";
import { BaseController } from "./base";

export class Application {
  private app = express();
  private logger: Logger;

  expressApp(): null | express.Application {
    return this.configService.NODE_ENV == "test" ? this.app : null;
  }

  constructor(
    private configService: ConfigService,
    controllers: BaseController[],
    loggerService: LoggerService
  ) {
    this.logger = loggerService.logger;
    if (this.configService.NODE_ENV != "prod") {
      this.app.use(cors());
    }
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      this.logger.info({
        method: req.method,
        path: req.path,
        query: req.query,
      });
      next();
    });
    this.setupControllers(controllers);
  }

  protected setupControllers(controllers: BaseController[]) {
    controllers.forEach((controller) => {
      this.logger.info(`Registering ${controller.path}`);
      this.app.use(controller.path, controller.router);
    });
  }

  listen(PORT = this.configService.APP_PORT) {
    this.app.listen(PORT, () => {
      this.logger.info(`App running on PORT ${PORT}`);
    });
  }
}
