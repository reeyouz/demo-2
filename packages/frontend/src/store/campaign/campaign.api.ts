import axios from "axios";
import { FormState } from "..";
import { Campaign } from "./campaign.types";

// TODO: Env based URL
const baseURL = "http://127.0.0.1:3000/campaign";

export function findCampaigns(params: FormState) {
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
