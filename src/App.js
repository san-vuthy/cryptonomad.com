import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Template from "./components/Template";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/template" component={Template} />
        <Redirect to="/" component={Home} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
