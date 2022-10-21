import React, { useState } from "react";
import { Menu } from "antd";
import { BrowserRouter as Router, Link } from "react-router-dom";

const AppHeader = () => {
  const items = [
    { label: <Link to="/">Stop watch</Link>, key: "stopWatch" },
    { label: <Link to="/timer">Timer</Link>, key: "timer" },
    { label: <Link to="/alarm-clock">Alarm Clock</Link>, key: "alarm" },
  ];
  const [current, setCurrent] = useState("stopWatch");
  return (
    <div className="app_header">
      <Router>
        <Menu
          mode="horizontal"
          theme="dark"
          items={items}
          selectedKeys={current}
          onClick={(e) => setCurrent(e.key)}
        />
      </Router>
    </div>
  );
};

export default AppHeader;
