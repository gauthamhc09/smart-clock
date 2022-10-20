import { Card, Row, Typography } from "antd";
import React, { useState } from "react";
import Timer from "../Countdown/Timer";
import "./CountdownTimer.css";

const { Title } = Typography;
const CountdownTimer = () => {;
  const [hours, setHours] = useState(12);
  const [minutes, setMinutes] = useState(60);
  const [seconds, setSeconds] = useState(60);

  return (
    <div className="countdown_timer">
      <Card title="CountDown Timer">
        <Row>
          <Timer
            duration={hours * minutes * seconds * 1000}
            hours={hours}
            setHours={setHours}
            setMinutes={setMinutes}
            setSeconds={setSeconds}
          />
        </Row>
      </Card>
    </div>
  );
};

export default CountdownTimer;
