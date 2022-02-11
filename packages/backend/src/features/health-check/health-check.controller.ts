import { Request, Response, Router } from "express";
import { BaseController } from "../../base";
import { LoggerService } from "../../shared";

export class HealthCheckController extends BaseController {
  public router = Router();
  public path = "/";

  constructor(loggerService: LoggerService, path?: string) {
    super(loggerService);
    if (path !== undefined) {
      this.path = path;
    }
    this.router.get(this.path, (req: Request, res: Response) => {
      return res.status(200).send("Health Check Working");
    });
  }
}
