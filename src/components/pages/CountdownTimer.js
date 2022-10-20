import { Card } from "antd";
import React from "react";
import Timer from "../Countdown/Timer";

const CountdownTimer = () => {
  return (
    <div className="countdown_timer">
      <Card title="CountDown Timer">
        <p>Card content</p>
        <Timer duration={1 * 60 * 60 * 1000} />
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  );
};

export default CountdownTimer;
