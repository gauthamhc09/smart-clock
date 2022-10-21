import React, { useEffect } from "react";
import { Typography } from "antd";

const { Title } = Typography;

const AlaramHistory = ({ storeAlarm }) => {
  useEffect(() => {
    localStorage.setItem("Name", storeAlarm);

    const getValues = localStorage.getItem("Name");
    console.log(getValues);
  }, [storeAlarm]);
  return (
    <div className="alarm_history">
      <Title level={4}>Alarm History</Title>
      {storeAlarm.map((time) => {
        if (time !== "00:00:00") {
          return <p>{time}</p>;
        }
      })}
    </div>
  );
};

export default AlaramHistory;
