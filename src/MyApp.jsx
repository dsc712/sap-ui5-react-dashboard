import React, { useState } from "react";
import { Card, Text } from "@ui5/webcomponents-react";
import { spacing } from "@ui5/webcomponents-react-base";
import { BarChart, LineChart } from "@ui5/webcomponents-react-charts";

export function MyApp() {
  const [activeChart, setActiveChart] = useState("lineChart");
  const [loading, setLoading] = useState(false);

  const contentTitle = activeChart === "lineChart" ? "Line Chart" : "Bar Chart";
  const switchToChart =
    activeChart === "lineChart" ? "Bar Chart" : "Line Chart";
  let handleHandlerClick = e => {
    if (activeChart === "lineChart") {
      setLoading(true);
      setTimeout(() => {
        setActiveChart("barChart");
        setLoading(false);
      }, 1000);
    } else {
      setLoading(true);
      setTimeout(() => {
        setActiveChart("lineChart");
        setLoading(false);
      }, 1000);
    }
  };

  const datasets = [
    {
      label: "Stock Price",
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ];
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July"
  ];
  return (
    <div>
      <Card
        heading="Stock Analysis"
        style={{ width: "300px" }}
        headerInteractive
        subtitle={`Click here to switch to ${switchToChart}`}
        onHeaderClick={handleHandlerClick}
      >
        <Text style={spacing.sapUiContentPadding}>{contentTitle}</Text>
        {activeChart === "lineChart" ? (
          <LineChart datasets={datasets} labels={labels} loading={loading} />
        ) : (
          <BarChart datasets={datasets} labels={labels} loading={loading} />
        )}
      </Card>
    </div>
  );
}
