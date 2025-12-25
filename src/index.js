import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { GlobalStylesApp } from "./GlobalStyles.styled";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <GlobalStylesApp />
  </React.StrictMode>
);
