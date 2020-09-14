import React from "react";
import Content from "./content";
import { Provider } from "react-redux";
import { store } from "../src/store/store";

function App() {
  return (
    <Provider store={store}>
      <Content />
    </Provider>
  );
}

export default App;
