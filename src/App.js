import React from "react";
import { ThemeProvider } from "@ui5/webcomponents-react/lib/ThemeProvider";
import { MyApp } from "./MyApp";
import "./App.css";

function App() {
  return (
    <div>
      <ThemeProvider withToastContainer>
        <MyApp />
      </ThemeProvider>
    </div>
  );
}

export default App;
