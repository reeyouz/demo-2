import React from "react";
import { store } from "./store";
import { Search } from "./pages";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Search />
    </Provider>
  );
}

export default App;
