import React from "react";
import { ThemeProvider } from "@ui5/webcomponents-react/lib/ThemeProvider";
import { HashRouter } from "react-router-dom";
import { MyApp } from "./MyApp";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <ThemeProvider withToastContainer>
        <MyApp />
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
