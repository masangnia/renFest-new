import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import WrappedApp from "./App"; // Mengimpor WrappedApp

ReactDOM.render(
  <React.StrictMode>
    <WrappedApp />
  </React.StrictMode>,
  document.getElementById("root")
);
