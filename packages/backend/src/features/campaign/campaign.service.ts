import { Campaign } from ".";
import { BaseService } from "../../base";
import { LoggerService } from "../../shared";
import { CampaignRepository } from "./campaign.repository";

export class CampaignService extends BaseService {
  constructor(loggerService: LoggerService, private repo: CampaignRepository) {
    super(loggerService);
  }

  addCampaign(campaign: Campaign | Campaign[]) {
    if (Array.isArray(campaign)) {
      this.repo.addCampaign(...campaign);
    } else {
      this.repo.addCampaign(campaign);
    }
  }

  findCampaigns(startDate?: string, endDate?: string, name?: string) {
    if (startDate === undefined || endDate === undefined) {
      return name === undefined
        ? this.repo.findCampaigns(() => true)
        : this.repo.findCampaigns((campaign) =>
            campaign.name.toLowerCase().includes(name.toLowerCase())
          );
    }
    const start = new Date(startDate);
    const end = new Date(endDate);
    this.logger.info({ start, end });

    return name === undefined
      ? this.repo.findCampaigns(
          (campaign) =>
            ((campaign.startDate >= start && campaign.startDate <= end) ||
              (campaign.endDate >= start && campaign.endDate <= end)) &&
            campaign.startDate <= campaign.endDate
        )
      : this.repo.findCampaigns(
          (campaign) =>
            ((campaign.startDate >= start && campaign.startDate <= end) ||
              (campaign.endDate >= start && campaign.endDate <= end)) &&
            campaign.startDate <= campaign.endDate &&
            campaign.name.toLowerCase().includes(name.toLowerCase())
        );
  }
}
