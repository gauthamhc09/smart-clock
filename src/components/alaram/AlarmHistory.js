import React from "react";
import { Button, Typography } from "antd";

const { Title, Text } = Typography;

const AlarmHistory = ({ storeAlarm, setStoreAlarm }) => {
  return (
    <div className="alarm_history">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "20px",
        }}
      >
        <Title level={4}>Alarm History</Title>
        <Button danger onClick={() => setStoreAlarm([])}>
          Clear
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {storeAlarm.map((time, index) => {
          if (time !== "00:00:00") {
            return (
              <div key={index}>
                <Text>{time} </Text>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default AlarmHistory;
