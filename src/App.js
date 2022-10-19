import { Layout } from "antd";
import "antd/dist/antd.css";
import React from "react";
import "./App.css";
import "./stopwatch.css"
import AppHeader from "./components/common/AppHeader";
import Home from "./views/Home";
const { Header, Content } = Layout;
function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <Home />
      </Content>
    </Layout>
  );
}

export default App;
