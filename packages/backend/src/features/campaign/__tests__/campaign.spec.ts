import supertest from "supertest";
import { CampaignRepository, CampaignService } from "..";
import { getBootstrappedApp } from "../../../bootstrap";
import { ConfigService, daysFromToday, LoggerService } from "../../../shared";
import { sample_campaigns } from "../__sample";

describe("Campaign", () => {
  const app = getBootstrappedApp();
  const path = "/campaign";
  const request = supertest(app.expressApp);

  describe("CampaignService", () => {
    const campaignService = new CampaignService(
      new LoggerService(new ConfigService()),
      new CampaignRepository()
    );
    it("find all campaigns - no param", () => {
      const data = campaignService.findCampaigns();
      expect(data.length).toBe(sample_campaigns.length);
    });

    it("find all campaigns - name = Tokyo", () => {
      const data = campaignService.findCampaigns(undefined, undefined, "Tokyo");
      expect(data.length).toBe(1);
    });

    it("find all campaigns - start end", () => {
      const data = campaignService.findCampaigns(
        daysFromToday(-6).toISOString(),
        daysFromToday(1).toISOString()
      );
      expect(data.length).toBe(3);
    });

    it("find all campaigns - start end name", () => {
      const data = campaignService.findCampaigns(
        daysFromToday(-6).toISOString(),
        daysFromToday(-1).toISOString(),
        "monst"
      );
      expect(data.length).toBe(1);
    });

    it("find all campaigns - start end (2)", () => {
      const data = campaignService.findCampaigns("2021-02-10", "2023-02-13");
      expect(data.length).toBe(4);
    });
  });

  it("GET", async () => {});
});
