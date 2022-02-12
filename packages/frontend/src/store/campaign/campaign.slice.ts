import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addCampaign, findCampaigns } from ".";
import { FormState } from "..";
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
  async (params: FormState, { rejectWithValue }) => {
    try {
      const res = await findCampaigns(params);
      console.log(res.data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addCampaignAsync = createAsyncThunk(
  "campaign/addCampaign",
  async (campaign: Campaign | Campaign[], thunkAPI) => {
    const res = await addCampaign(campaign);
    console.log(res.status);
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
        state.data = [];
      })
      .addCase(findCampaignsAsync.rejected, (state) => {
        state.status = "failed";
        state.data = [];
      })
      .addCase(findCampaignsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      })
      .addCase(addCampaignAsync.pending, (state) => {
        state.status = "loading";
        state.data = [];
      })
      .addCase(addCampaignAsync.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(addCampaignAsync.fulfilled, (state, action) => {
        state.status = "idle";
      });
  },
});

export const campaignReducer = campaignSlice.reducer;
