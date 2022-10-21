import { Card, Col, Row, Typography } from "antd";
import React, { useState } from "react";
import ButtonComponent from "../stopwatch/ButtonComponent";
import DisplayComponent from "../stopwatch/DisplayComponent";
import StopWatchHistory from "../stopwatch/StopWatchHistory";
import "../stopwatch/stopwatch.css";

const StopWatch = () => {
  const [time, setTime] = useState({
    milliSeconds: 0,
    seconds: 0,
    minutes: 0,
    hours: 0,
  });
  const [storeTime, setStoreTime] = useState([]);
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  const populateStorage = (storeTime) => {
    const updatedTime = JSON.stringify(storeTime);
    localStorage.setItem("time", JSON.stringify(updatedTime));
  };
  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  let updatedMs = time.milliSeconds,
    updatedS = time.seconds,
    updatedM = time.minutes,
    updatedH = time.hours;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({
      milliSeconds: updatedMs,
      seconds: updatedS,
      minutes: updatedM,
      hours: updatedH,
    });
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
    setStoreTime((prevTime) => {
      return [...prevTime, time];
    });
    populateStorage(storeTime);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ milliSeconds: 0, seconds: 0, minutes: 0, hours: 0 });
  };

  const resume = () => start();
  return (
    <div className="stopwatch">
      <Card title="StopWatch">
        <Row>
          <Col xs={24} sm={16}>
            <div className="stopwatch-machine">
              <DisplayComponent time={time} />
              <ButtonComponent
                start={start}
                resume={resume}
                reset={reset}
                stop={stop}
                status={status}
              />
            </div>
          </Col>
          {storeTime.length > 0 && (
            <Col
              xs={24}
              sm={6}
              style={{
                backgroundColor: "#3B597F",
                color: "#ffffff",
                fontWeight: "500",
                maxHeight: "47vh",
                overflowY: "overlay",
              }}
            >
              <StopWatchHistory storeTime={storeTime} />
            </Col>
          )}
        </Row>
      </Card>
    </div>
  );
};

export default StopWatch;
