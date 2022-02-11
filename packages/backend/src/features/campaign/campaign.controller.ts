import { Request, Response, Router } from "express";
import { validatePost, validateQuery } from ".";
import { BaseController } from "../../base";
import { LoggerService } from "../../shared";
import { CampaignService } from "./campaign.service";

export class CampaignController extends BaseController {
  public router = Router();
  public path = "/campaign";

  constructor(
    loggerService: LoggerService,
    private campaignService: CampaignService,
    path?: string
  ) {
    super(loggerService);
    this.router.post("/", validatePost, this.addCampaign.bind(this));
    this.router.get("/", validateQuery, this.findCampaigns.bind(this));
    if (path !== undefined) {
      this.path = path;
    }
  }

  addCampaign(req: Request, res: Response) {
    this.campaignService.addCampaign(req.body);
    return res.status(201).send();
  }

  findCampaigns(req: Request, res: Response) {
    const startDate = req.query.startDate as string | undefined;
    const endDate = req.query.endDate as string | undefined;
    const name = req.query.name as string | undefined;

    this.logger.info({ startDate, endDate, name });

    const data = this.campaignService.findCampaigns(startDate, endDate, name);

    return res.status(200).send(data);
  }
}
