import axios from "axios";
import { SearchForm } from "../../pages";
import { Campaign } from "./campaign.types";

// TODO: Env based URL
const baseURL = "http://localhost:3000/campaign";

export function findCampaigns(params: SearchForm) {
  return axios.get<Campaign[]>(baseURL, {
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      ...(params.startDate && { startDate: params.startDate }),
      ...(params.endDate && { endDate: params.endDate }),
      ...(params.name && { name: params.name }),
    },
  });
}

export function addCampaign(campaign: Campaign | Campaign[]) {
  return axios.post<void>(baseURL, campaign, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
