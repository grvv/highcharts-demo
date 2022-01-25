import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { LineChart } from "./components/LineChart";
import { HeatmapChart } from "./components/Heatmap";

ReactDOM.render(
  <React.StrictMode>
    <LineChart />
    <HeatmapChart />
  </React.StrictMode>,
  document.getElementById("root")
);
