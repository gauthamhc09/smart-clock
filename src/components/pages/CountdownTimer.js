// import Timer from "../Countdown/Timer";
import "./CountdownTimer.css";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row, Card } from "antd";
import React, { useRef, useState, useEffect } from "react";

const CountdownTimer = () => {
  const inputHourRef = useRef();
  const inputMinutesRef = useRef();
  const inputSecondsRef = useRef();

  const [hours, setHours] = useState(12);
  const [minutes, setMinutes] = useState(60);
  const [seconds, setSeconds] = useState(60);
  const duration = `${hours}` * `${minutes}` * `${seconds}` * 1000;

  const [countDownStart, setCountDownStart] = useState(false);

  const [time, setTime] = useState(duration);

  const handleStart = () => {
    setCountDownStart(true);
  };
  const handleStop = () => {
    setCountDownStart(false);
  };

  useEffect(() => {
    if (countDownStart) {
      setTimeout(() => {
        setTime(time - 1000);
        getFormattedTime(time);
      }, 1000);
    }
  }, [time, countDownStart]);

  // const handleResume = () => {};

  // const handleReset = () => {};

  const getFormattedTime = (milliSeconds) => {
    let totalSeconds = parseInt(Math.floor(milliSeconds / 1000));
    let totalMinutes = parseInt(Math.floor(totalSeconds / 60));
    let totalHours = parseInt(Math.floor(totalMinutes / 60));

    let formattedSeconds = parseInt(totalSeconds % 60);
    let formattedMinutes = parseInt(totalMinutes % 60);
    let formattedHours = parseInt(totalHours % 60);
    setHours(formattedHours);
    setMinutes(formattedMinutes);
    setSeconds(formattedSeconds);
  };

  const incrementHour = () => {
    setHours(hours + 1);
    inputHourRef.current = hours;
  };
  const incrementMinutes = () => {
    setMinutes(minutes + 1);
    inputMinutesRef.current = minutes;
  };
  const incrementSeconds = () => {
    setSeconds(seconds + 1);
    inputSecondsRef.current = seconds;
  };

  const decrementHour = () => {
    setHours(hours - 1);
    inputHourRef.current = hours;
  };
  const decrementMinutes = () => {
    setMinutes(minutes - 1);
    inputMinutesRef.current = minutes;
  };
  const decrementSeconds = () => {
    setSeconds(seconds - 1);
    inputSecondsRef.current = seconds;
  };

  return (
    <div className="countdown_timer">
      <Card title="CountDown Timer">
        <Row>
          <Row>
            <div>
              <Row gutter={8}>
                <Col xs={3}>
                  <Button
                    style={{ width: "-webkit-fill-available" }}
                    onClick={incrementHour}
                  >
                    <ArrowUpOutlined color="black" />
                  </Button>
                </Col>
                <Col xs={3}>
                  <Button
                    style={{ width: "-webkit-fill-available" }}
                    onClick={incrementMinutes}
                  >
                    <ArrowUpOutlined color="black" />
                  </Button>
                </Col>
                <Col xs={3}>
                  <Button
                    style={{ width: "-webkit-fill-available" }}
                    onClick={incrementSeconds}
                  >
                    <ArrowUpOutlined color="black" />
                  </Button>
                </Col>
              </Row>
              <Row
                gutter={8}
                style={{ marginTop: "16px", marginBottom: "16px" }}
              >
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
                  <Button
                    style={{ width: "-webkit-fill-available" }}
                    onClick={decrementHour}
                  >
                    <ArrowDownOutlined color="black" />
                  </Button>
                </Col>
                <Col xs={3}>
                  <Button
                    style={{ width: "-webkit-fill-available" }}
                    onClick={decrementMinutes}
                  >
                    <ArrowDownOutlined color="black" />
                  </Button>
                </Col>
                <Col xs={3}>
                  <Button
                    style={{ width: "-webkit-fill-available" }}
                    onClick={decrementSeconds}
                  >
                    <ArrowDownOutlined color="black" />
                  </Button>
                </Col>
              </Row>
            </div>
            {countDownStart ? (
              <Button
                type="primary"
                onClick={handleStop}
                style={{ marginTop: "20px" }}
              >
                Stop
              </Button>
            ) : (
              <Button
                type="primary"
                onClick={handleStart}
                style={{ marginTop: "20px" }}
              >
                Start
              </Button>
            )}
          </Row>
        </Row>
      </Card>
    </div>
  );
};

export default CountdownTimer;
