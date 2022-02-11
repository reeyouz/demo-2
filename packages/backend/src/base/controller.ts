import { Router } from "express";
import { Logger } from "winston";
import { LoggerService } from "../shared";

export abstract class BaseController {
  abstract router: Router;
  abstract path: string;
  protected logger: Logger;

  constructor(loggerService: LoggerService) {
    this.logger = loggerService.logger;
  }
}
