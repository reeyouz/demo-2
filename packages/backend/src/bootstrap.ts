import { Application } from "./app";
import {
  CampaignController,
  CampaignRepository,
  CampaignService,
  HealthCheckController,
} from "./features";
import { ConfigService, LoggerService } from "./shared";

export function getBootstrappedApp() {
  const configService = new ConfigService();
  const loggerService = new LoggerService(configService);

  // Health Check Feature
  const healthCheckController = new HealthCheckController(loggerService);

  // Campaign Feature
  const campaignRepository = new CampaignRepository();
  const campaignService = new CampaignService(
    loggerService,
    campaignRepository
  );
  const campaignController = new CampaignController(
    loggerService,
    campaignService
  );

  return new Application(
    configService,
    [campaignController, healthCheckController],
    loggerService
  );
}
