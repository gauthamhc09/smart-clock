import { Col, Row } from "antd";
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
      <h1
        style={{
          textAlign: "center",
          textDecoration: "underline",
          color: "1890ff",
        }}
      >
        StopWatch
      </h1>
      <Row>
        <Col style={{ backgroundColor: "aqua" }} span={16}>
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
        <Col
          style={{
            backgroundColor: "lightgreen",
            maxHeight: "60vh",
            overflowY: "overlay",
          }}
          span={6}
        >
          <StopWatchHistory storeTime={storeTime} />
        </Col>
      </Row>
    </div>
  );
};

export default StopWatch;
