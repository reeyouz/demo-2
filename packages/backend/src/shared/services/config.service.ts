import { ENV, Environment } from "..";

export class ConfigService {
  private environment: Environment;
  private app_port: number;

  get NODE_ENV(): Environment {
    return this.environment;
  }

  get APP_PORT(): number {
    return this.app_port;
  }

  constructor() {
    this.environment = this.getEnvironment();
    this.app_port = this.getAppPort();
  }

  protected getEnvironment(): Environment {
    let NODE_ENV = process.env.NODE_ENV ?? "";
    let result: Environment = ENV.DEV;
    if (
      NODE_ENV == "" ||
      ![ENV.DEV, ENV.TEST, ENV.STAGING, ENV.PROD].includes(
        NODE_ENV as Environment
      )
    ) {
      result = ENV.DEV;
    }
    return result;
  }

  protected getAppPort(): number {
    let result = 3000;
    let APP_PORT = process.env.APP_PORT ?? `${result}`;
    if (/[0-9]{4,5}/.test(APP_PORT)) {
      result = Number(APP_PORT);
    }
    return result;
  }
}
