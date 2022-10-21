import { Layout } from "antd";
import "antd/dist/antd.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import AppHeader from "./components/common/AppHeader";
import ErrorPage from "./components/common/ErrorPage";
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
          <Switch>
            <Route exact path="/" component={StopWatch} />
            <Route exact path="/alarm-clock" component={AlarmClock} />
            <Route exact path="/timer" component={CountdownTimer} />
            <Route component={ErrorPage} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
