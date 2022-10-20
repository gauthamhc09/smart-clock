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
  // const gridStyle = {
  //   // width: "25%",
  //   textAlign: "center",
  // };

  return (
    <div className="digital_clock">
      <Card style={{ width: 300, color: "black" }}>
        <Card.Grid>
          <Title level={2}>{hourDigital}:</Title>
          <Title level={2}>{minutesDigital}</Title>
          <Title level={5}>{amPm}</Title>
        </Card.Grid>
        <Card.Grid>
          <div>
            <span level={4}>Date:&nbsp;</span>
            <span>{`${dayNow} `}</span>
            <span>{`${monthNow} , `}</span>
            <span>{yearNow}</span>
          </div>
        </Card.Grid>
      </Card>
    </div>
  );
}

export default DigitalClock;
