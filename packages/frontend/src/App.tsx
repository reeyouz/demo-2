import React, { useEffect, useRef } from "react";
import { debounce } from "debounce";
import Grid from "@mui/material/Grid";
import { Campaign, Search } from "./pages";
import {
  addCampaignAsync,
  findCampaignsAsync,
  reset,
  useAppDispatch,
  useAppSelector,
} from "./store";
import { Campaign as ICampaign } from "./store";

declare global {
  interface Window {
    AddCampaigns: (campaign: ICampaign | ICampaign[]) => void;
  }
}

function App() {
  const form = useAppSelector((state) => state.form);
  const dispatch = useAppDispatch();
  const debounced = useRef(
    debounce((val: typeof form) => dispatch(findCampaignsAsync(val)), 200)
  );

  useEffect(() => {
    if (debounced.current) {
      debounced.current(form);
    }
  }, [form]);

  useEffect(() => {
    window.AddCampaigns = (campaign) => {
      dispatch(addCampaignAsync(campaign)).then(() => {
        dispatch(reset());
      });
    };
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Search />
      </Grid>
      <Grid item xs={12}>
        <Campaign />
      </Grid>
    </Grid>
  );
}

export default App;
