import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row } from "antd";
import React, { useRef, useState } from "react";

const Timer = ({ duration, setHours, setMinutes, setSeconds }) => {
  const [time, setTime] = useState(duration);
  const inputHourRef = useRef();
  const inputMinutesRef = useRef();
  const inputSecondsRef = useRef();

  const handleStart = () => {
    console.log("time", time);
    setHours(inputHourRef.current.value);
    setMinutes(inputMinutesRef.current.value);
    setSeconds(inputSecondsRef.current.value);
    setInterval(() => {
      setTime(time - 1000);
    }, 1000);
  };

  const handleResume = () => {};

  const handleReset = () => {};

  // useEffect(() => {
  //   setTimeout(() => {
  //     setTime(time - 1000);
  //   }, 1000);
  // }, [time]);
  // console.log(hours, minutes, seconds);
  const getFormattedTime = (milliSeconds) => {
    let totalSeconds = parseInt(Math.floor(milliSeconds / 1000));
    let totalMinutes = parseInt(Math.floor(totalSeconds / 60));
    let totalHours = parseInt(Math.floor(totalMinutes / 60));
    // let days = parseInt(Math.floor(totalHours / 60));

    let seconds = parseInt(totalSeconds % 60);
    let minutes = parseInt(totalMinutes % 60);
    let hours = parseInt(totalHours % 60);

    return (
      <Row>
        <div>
          <Row gutter={8}>
            <Col xs={3}>
              <Button style={{ width: "-webkit-fill-available" }}>
                <ArrowUpOutlined color="black" />
              </Button>
            </Col>
            <Col xs={3}>
              <Button style={{ width: "-webkit-fill-available" }}>
                <ArrowUpOutlined color="black" />
              </Button>
            </Col>
            <Col xs={3}>
              <Button style={{ width: "-webkit-fill-available" }}>
                <ArrowUpOutlined color="black" />
              </Button>
            </Col>
          </Row>
          <Row gutter={8} style={{ marginTop: "16px", marginBottom: "16px" }}>
            <Col xs={3}>
              <Input
                value={hours}
                ref={inputHourRef}
                type="number"
                textAlign="center"
              />
            </Col>
            <Col xs={3}>
              <Input value={minutes} ref={inputMinutesRef} type="number" />
            </Col>
            <Col xs={3}>
              <Input value={seconds} ref={inputSecondsRef} type="number" />
            </Col>
          </Row>
          <Row gutter={8}>
            <Col xs={3}>
              <Button style={{ width: "-webkit-fill-available" }}>
                <ArrowDownOutlined color="black" />
              </Button>
            </Col>
            <Col xs={3}>
              <Button style={{ width: "-webkit-fill-available" }}>
                <ArrowDownOutlined color="black" />
              </Button>
            </Col>
            <Col xs={3}>
              <Button style={{ width: "-webkit-fill-available" }}>
                <ArrowDownOutlined color="black" />
              </Button>
            </Col>
          </Row>
        </div>
        <Button
          type="primary"
          onClick={handleStart}
          style={{ marginTop: "20px" }}
        >
          Start
        </Button>
      </Row>
    );
  };
  return <div>{getFormattedTime(time)}</div>;
};

export default Timer;
