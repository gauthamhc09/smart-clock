import React, { useState } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const AppHeader = () => {
  const [current, setCurrent] = useState("stopWatch");
  const items = [
    { label: <Link to="/">Stop watch</Link>, key: "stopWatch" },

    { label: <Link to="/alarm-clock">Alarm Clock</Link>, key: "alarm-clock" },
    { label: <Link to="/timer">Timer</Link>, key: "timer" },
  ];

  return (
    <div className="app_header">
      <Menu
        mode="horizontal"
        theme="dark"
        items={items}
        selectedKeys={current}
        onClick={(e) => {
          setCurrent(e.key);
        }}
      />
    </div>
  );
};

export default AppHeader;
