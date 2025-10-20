import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// Create React root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render app with routing support
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Performance reporting (optional)
reportWebVitals();
// To log performance metrics, use: reportWebVitals(console.log);