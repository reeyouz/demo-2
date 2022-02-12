import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";
import { useAppSelector } from "../../store";
import { Active } from "./Active";

export function Campaign() {
  const campaigns = useAppSelector((state) => state.campaign.data) ?? [];
  const status = useAppSelector((state) => state.campaign.status);

  if (status === "loading") {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ width: "100%", overflowX: "scroll" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>End Date</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>Budget</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {campaigns.map((campaign) => (
            <TableRow key={campaign.name}>
              <TableCell>{campaign.name}</TableCell>
              <TableCell>{campaign.startDate.slice(0, 10)}</TableCell>
              <TableCell>{campaign.endDate.slice(0, 10)}</TableCell>
              <TableCell>
                <Active
                  startDate={campaign.startDate}
                  endDate={campaign.endDate}
                />
              </TableCell>
              <TableCell>{campaign.Budget} USD</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
