import React, { useState } from "react";
import { spacing } from "@ui5/webcomponents-react-base";
import { BarChart, LineChart } from "@ui5/webcomponents-react-charts";
import { useHistory } from "react-router-dom";

import {
  Card,
  Text,
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

const tableData = new Array(500).fill(null).map((_, index) => {
  return {
    name: `name${index}`,
    age: Math.floor(Math.random() * 100),
    friend: {
      name: `friend.Name${index}`,
      age: Math.floor(Math.random() * 100)
    }
  };
});

const tableColumns = [
  {
    Header: "Name",
    accessor: "name" // String-based value accessors!
  },
  {
    Header: "Age",
    accessor: "age"
  },
  {
    Header: "Friend Name",
    accessor: "friend.name"
  },
  {
    Header: "Friend Age",
    accessor: "friend.age"
  }
];

export function Home(props) {
  const [activeChart, setActiveChart] = useState("lineChart");
  const [loading, setLoading] = useState(false);

  const contentTitle = activeChart === "lineChart" ? "Line Chart" : "Bar Chart";
  const switchToChart =
    activeChart === "lineChart" ? "Bar Chart" : "Line Chart";

  let onStockAnalysisHeaderClick = e => {
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

  const history = useHistory();
  const onProgressHeaderClick = e => {
    history.push("/detail");
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
    <FlexBox
      justifyContent={FlexBoxJustifyContent.Center}
      wrap={FlexBoxWrap.Wrap}
    >
      <Card
        heading="Stock Analysis"
        style={{ width: "300px", ...spacing.sapUiContentPadding }}
        headerInteractive
        subtitle={`Click here to switch to ${switchToChart}`}
        onHeaderClick={onStockAnalysisHeaderClick}
      >
        <Text style={spacing.sapUiContentPadding}>{contentTitle}</Text>
        {activeChart === "lineChart" ? (
          <LineChart datasets={datasets} labels={labels} loading={loading} />
        ) : (
          <BarChart datasets={datasets} labels={labels} loading={loading} />
        )}
      </Card>
      <Card
        heading="Progress"
        subtitle="List"
        style={{ width: "300px", ...spacing.sapUiContentPadding }}
        headerInteractive
        onHeaderClick={onProgressHeaderClick}
      >
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
      <Card
        heading="AnalyticalTable"
        style={{ maxWidth: "900px", ...spacing.sapUiContentPadding }}
      >
        <AnalyticalTable
          data={tableData}
          columns={tableColumns}
          visibleRows={5}
        />
      </Card>
    </FlexBox>
  );
}
