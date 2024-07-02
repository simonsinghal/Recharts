import React from "react";
import "./App.css"
import AreaChart from "./Components/AreaChart";
import BarChart from "./Components/BarChart";
import LineChart from "./Components/LineChart";
import PieChart from "./Components/PieChart";

export default function Home() {
  return (
    <main className="main-container">
      <div className="grid-container">
        <GridItem title="AREA CHART">
          <AreaChart />
        </GridItem>
        <GridItem title="LINE CHART">
          <LineChart />
        </GridItem>
        <GridItem title="BAR CHART">
          <BarChart />
        </GridItem>
        <GridItem title="PIE CHART">
          <PieChart />
        </GridItem>
      </div>
    </main>
  );
}

function GridItem({ title, children }) {
  return (
    <div className="grid-item">
      <h3>{title}</h3>
      {children}
    </div>
  );
}
