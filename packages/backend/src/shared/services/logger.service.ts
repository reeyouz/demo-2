import { createLogger, transports, format, Logger } from "winston";
import { ConfigService } from "..";

export class LoggerService {
  public logger: Logger;

  constructor(configService: ConfigService) {
    this.logger = createLogger({
      level: configService.NODE_ENV !== "prod" ? "debug" : "info",
    });

    if (configService.NODE_ENV != "prod") {
      this.logger.add(new transports.Console({ format: format.prettyPrint() }));
    }
  }
}
