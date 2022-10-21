import { Col, Row, Typography } from "antd";
import React from "react";

const { Title } = Typography;
const StopWatchHistory = ({ storeTime }) => {
  return (
    <>
      <Title level={5} style={{ textAlign: "center", color: "#ffffff" }}>
        StopWatch History
      </Title>
      {storeTime.length > 0 &&
        storeTime.map((time) => {
          const { milliSeconds, seconds, minutes, hours } = time;
          return (
            <Row className="stopwatch_history">
              <Col>
                {hours >= 10 ? hours : "0" + hours}:&nbsp;
                {minutes >= 10 ? minutes : "0" + minutes}:&nbsp;
                {seconds >= 10 ? seconds : "0" + seconds}:&nbsp;
                {milliSeconds >= 10 ? milliSeconds : "0" + milliSeconds}
              </Col>
            </Row>
          );
        })}
    </>
  );
};

export default StopWatchHistory;
