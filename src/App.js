import { Layout } from "antd";
import "antd/dist/antd.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AppHeader from "./components/common/AppHeader";
import AlarmClock from "./components/pages/AlarmClock";
import CountdownTimer from "./components/pages/CountdownTimer";
import StopWatch from "./components/pages/StopWatch";
import "./stopwatch.css";
const { Header, Content } = Layout;
function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Layout>
        <Content>
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
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
