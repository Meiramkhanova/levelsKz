import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app/App";
import "./index.css";

import AuthContextProvider from "./context/AuthContextProvider";
import { ThemeProvider } from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
