import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AlarmClock from "../components/pages/AlarmClock";
import CountdownTimer from "../components/pages/CountdownTimer";
import StopWatch from "../components/pages/StopWatch";

const Home = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <StopWatch />;
            }}
          />
          <Route
            exact
            path="/alarm-clock"
            render={() => {
              return <AlarmClock />;
            }}
          />
          <Route
            exact
            path="/timer"
            render={() => {
              return <CountdownTimer />;
            }}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default Home;
