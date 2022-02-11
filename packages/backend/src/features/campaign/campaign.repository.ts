import { Campaign } from ".";
import { BaseRepository } from "../../base/repository";
import { sample_campaigns } from "./__sample";

export class CampaignRepository extends BaseRepository {
  protected campaigns: Campaign[] = sample_campaigns;

  constructor() {
    super();
  }

  addCampaign(...campaigns: Campaign[]) {
    this.campaigns.push(...campaigns);
  }

  findCampaigns(predicate: (campaign: Campaign) => boolean): Campaign[] {
    return this.campaigns.filter(predicate);
  }
}
