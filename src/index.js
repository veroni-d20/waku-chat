import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { LightNodeProvider } from "@waku/react";

// Set the Light Node options
const NODE_OPTIONS = { defaultBootstrap: true };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LightNodeProvider options={NODE_OPTIONS}>
      <App />
    </LightNodeProvider>
  </React.StrictMode>
);
