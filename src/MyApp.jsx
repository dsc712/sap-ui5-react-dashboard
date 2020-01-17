import React, { useState } from "react";
import { spacing } from "@ui5/webcomponents-react-base";
import { BarChart, LineChart } from "@ui5/webcomponents-react-charts";
import "@ui5/webcomponents/dist/icons/add.js";
import {
  Card,
  Text,
  ShellBar,
  ShellBarItem,
  List,
  StandardListItem,
  ValueState,
  ProgressIndicator,
  Title,
  TitleLevel,
  FlexBox,
  FlexBoxJustifyContent,
  FlexBoxWrap,
  FlexBoxDirection,
  AnalyticalTable
} from "@ui5/webcomponents-react";

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
      <ShellBar
        logo={"reactLogo.png"}
        profile={"profilePictureExample.png"}
        primaryTitle="My App"
      >
        <ShellBarItem src="sap-icon://add" text="Add" />
      </ShellBar>
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
      <Card heading="Progress" subtitle="List" style={{ width: "300px" }}>
        <List>
          <StandardListItem info="finished" infoState={ValueState.Success}>
            Activity 1
          </StandardListItem>
          <StandardListItem info="failed" infoState={ValueState.Error}>
            Activity 2
          </StandardListItem>
          <StandardListItem
            info="in progress"
            infoState={ValueState.Warning}
            style={{ height: "80px" }}
          >
            <FlexBox direction={FlexBoxDirection.Column}>
              <Title level={TitleLevel.H5}>Activity 3</Title>
              <ProgressIndicator
                displayValue="89%"
                percentValue={89}
                width="180px"
                state={ValueState.Success}
              />
            </FlexBox>
          </StandardListItem>
          <StandardListItem
            info="in progress"
            infoState={ValueState.Warning}
            style={{ height: "80px" }}
          >
            <FlexBox direction={FlexBoxDirection.Column}>
              <Title level={TitleLevel.H5}>Activity 4</Title>
              <ProgressIndicator
                displayValue="5%"
                percentValue={5}
                width="180px"
                state={ValueState.Error}
              />
            </FlexBox>
          </StandardListItem>
        </List>
      </Card>
    </div>
  );
}
