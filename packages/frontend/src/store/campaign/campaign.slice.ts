import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { findCampaigns } from ".";
import { SearchForm } from "../../pages";
import { Campaign } from "./campaign.types";

export interface CampaignState {
  status: "idle" | "loading" | "failed";
  data: Campaign[];
}

const initialState: CampaignState = {
  status: "idle",
  data: [],
};

export const findCampaignsAsync = createAsyncThunk(
  "campaign/findCampaigns",
  async (params: SearchForm) => {
    const res = await findCampaigns(params);
    console.log(res.data);
    return res.data;
  }
);

const campaignSlice = createSlice({
  name: "campaign",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(findCampaignsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(findCampaignsAsync.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(findCampaignsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      });
  },
});

export const campaignReducer = campaignSlice.reducer;
