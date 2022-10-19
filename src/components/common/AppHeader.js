import React, { useState } from "react";
import { Menu } from "antd";

const AppHeader = () => {
  const items = [
    { label: "Stop Watch", key: "stopWatch" },
    { label: "Timer", key: "timer" },
    { label: "Alaram Clock", key: "alaram" },
  ];
  const [current, setCurrent] = useState("stopWatch");
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <h4>Smart Clock</h4>
        </div>
        <Menu
          mode="horizontal"
          theme="dark"
          items={items}
          selectedKeys={current}
          onClick={(e) => setCurrent(e.key)}
        />
      </div>
    </div>
  );
};

export default AppHeader;
