// import "./DigitalClock.css";

import { Card, Typography } from "antd";
const { Title } = Typography;

function DigitalClock({
  hourDigital,
  minutesDigital,
  amPm,
  dayNow,
  monthNow,
  yearNow,
}) {
  return (
    <div className="digital_clock">
      <Card style={{ width: 300, color: "black" }}>
        <Title level={2}>{hourDigital}:</Title>
        <Title level={2}>{minutesDigital}</Title>
        <Title level={5}>{amPm}</Title>
      </Card>

      <div className="clock__date">
        <span>{`${dayNow} `}</span>
        <span>{`${monthNow} , `}</span>
        <span>{yearNow}</span>
      </div>
    </div>
  );
}

export default DigitalClock;
