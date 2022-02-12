import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { useSearch } from "./useSearch";
import { findCampaignsAsync, useAppDispatch } from "../../store";

interface SearchProps {}
export function Search(props: SearchProps) {
  const { form, handleStartDateChange, handleEndDateChange, handleNameChange } =
    useSearch();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(findCampaignsAsync(form));
  }, [form]);

  return (
    <form>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            {/* Start Date */}
            <DesktopDatePicker
              label="Start Date"
              value={form.startDate}
              onChange={handleStartDateChange}
              renderInput={(props) => <TextField fullWidth {...props} />}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            {/* End Date */}
            <DesktopDatePicker
              label="End Date"
              value={form.endDate}
              onChange={handleEndDateChange}
              renderInput={(props) => <TextField fullWidth {...props} />}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Search"
              fullWidth
              value={form.name}
              onChange={handleNameChange}
            />
          </Grid>
        </Grid>
      </LocalizationProvider>
    </form>
  );
}
