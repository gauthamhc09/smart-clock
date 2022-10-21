import React, { useState } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const AppHeader = () => {
  const items = [
    { label: "Stop Watch", key: "stopWatch" },
    { label: "Timer", key: "timer" },
    { label: "Alarm Clock", key: "alarm" },
  ];
  const [current, setCurrent] = useState("stopWatch");
  return (
    <div className="app_header">
      <Menu
        mode="horizontal"
        theme="dark"
        items={items}
        selectedKeys={current}
        onClick={(e) => setCurrent(e.key)}
      />
    </div>
  );
};

export default AppHeader;
