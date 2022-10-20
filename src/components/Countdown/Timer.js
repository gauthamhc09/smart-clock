import { Button, Col, Row } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";

const Timer = ({ duration }) => {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  const getFormattedTime = (milliSeconds) => {
    let totalSeconds = parseInt(Math.floor(milliSeconds / 1000));
    let totalMinutes = parseInt(Math.floor(totalSeconds / 60));
    let totalHours = parseInt(Math.floor(totalMinutes / 60));
    let days = parseInt(Math.floor(totalHours / 60));

    let seconds = parseInt(totalSeconds % 60);
    let minutes = parseInt(totalMinutes % 60);
    let hours = parseInt(totalHours % 60);

    const style = {
      background: "#0092ff",
      padding: "8px 0",
    };
    return (
      <div>
        <Row gutter={8}>
          <Col xs={3}>
            <Button>
              <ArrowUpOutlined color="black" />
            </Button>
          </Col>
          <Col xs={3}>
            <Button>
              <ArrowUpOutlined color="black" />
            </Button>
          </Col>
          <Col xs={3}>
            <Button>
              <ArrowUpOutlined color="black" />
            </Button>
          </Col>
          <Col xs={3}>
            <Button>
              <ArrowUpOutlined color="black" />
            </Button>
          </Col>
        </Row>
        <Row gutter={12}>
          <Col xs={3}>
            <div style={style}>{days}</div>
          </Col>
          <Col xs={3}>
            <div style={style}>{hours}</div>
          </Col>
          <Col xs={3}>
            <div style={style}>{minutes}</div>
          </Col>
          <Col xs={3}>
            <div style={style}>{seconds}</div>
          </Col>
        </Row>
        <Button type="primary">Start</Button>
      </div>
    );
  };
  return <div>{getFormattedTime(time)}</div>;
};

export default Timer;
