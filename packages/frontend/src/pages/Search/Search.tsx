import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { useSearch } from "./useSearch";

interface SearchProps {}
export function Search(props: SearchProps) {
  const { form, handleStartDateChange, handleEndDateChange, handleNameChange } =
    useSearch();

  return (
    <form>
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
    </form>
  );
}
