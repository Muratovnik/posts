import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "@styles/colors.css";
import "@styles/fonts.css";

import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");

if (container) {
  const root = ReactDOM.createRoot(container);

  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App></App>
      </BrowserRouter>
    </React.StrictMode>,
  );
}
