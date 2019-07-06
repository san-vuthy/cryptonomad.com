import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import News from "./components/News";
import Event from "./components/Event";
import About from "./components/About";
import Template from "./components/Template";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/news" component={News} />
        <Route exact path="/event" component={Event} />
        <Route exact path="/about" component={About} />
        <Route exact path="/template" component={Template} />
        <Redirect to="/" component={Home} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
