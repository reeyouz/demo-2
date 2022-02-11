import React from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Search } from "./pages";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Search />
    </LocalizationProvider>
  );
}

export default App;
