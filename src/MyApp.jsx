import React from "react";
import { ShellBar, ShellBarItem } from "@ui5/webcomponents-react";
import "@ui5/webcomponents/dist/icons/add.js";
import { Switch, Route, Redirect } from "react-router-dom";
import { Home } from "./Home";
import { Detail } from "./Detail";
import { useHistory } from "react-router-dom";

export function MyApp() {
  const history = useHistory();
  const handleLogoClick = e => {
    history.push("./");
  };
  return (
    <>
      <ShellBar
        logo={"reactLogo.png"}
        onLogoClick={handleLogoClick}
        profile={"profilePictureExample.png"}
        primaryTitle="My App"
      >
        <ShellBarItem src="sap-icon://add" text="Add" />
      </ShellBar>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/detail" component={Detail} />
        <Redirect from="/" to="/home" />
      </Switch>
    </>
  );
}
