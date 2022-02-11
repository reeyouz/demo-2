import { Logger } from "winston";
import { LoggerService } from "../shared";

export abstract class BaseService {
  protected logger: Logger;

  constructor(loggerService: LoggerService) {
    this.logger = loggerService.logger;
  }
}
