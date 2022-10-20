import { Button, Select } from "antd";
import React, { useState } from "react";
import { hourNumber, minutesNumber } from "../../utlis/func";

function AlarmOption({
  setAlarmTime,
  hasAlarm,
  setHasAlarm,
  pauseAlarm,
  setStoreAlarm,
}) {
  const [hour, setHour] = useState("Hour");
  const [minutes, setMinutes] = useState("Minutes");
  const [amPmOption, setAmPmOption] = useState("Am-Pm");

  const setAlarm = () => {
    const hourNum = hour.toString();
    const minutesNum = minutes.toString();

    if (hasAlarm) {
      pauseAlarm();
      setHasAlarm(false);
      return;
    }

    if (
      !hourNum.includes("Hour") &&
      !minutesNum.includes("Minutes") &&
      !amPmOption.includes("Am-Pm")
    ) {
      setHasAlarm(true);
      setAlarmTime(`${hourNum}:${minutesNum} ${amPmOption}`);
      setStoreAlarm((prevAlarm) => {
        return [...prevAlarm, `${hourNum}:${minutesNum} ${amPmOption}`];
      });
    }
  };

  const { Option } = Select;
  const hourChange = (value) => {
    setHour(value);
  };
  const minutesChange = (value) => {
    setMinutes(value);
  };
  const amPmChange = (value) => {
    setAmPmOption(value);
  };

  return (
    <div className="option-Container">
      <div className={`wrapper-option ${hasAlarm && "disable"}`}>
        <Select
          defaultValue="Hour"
          style={{
            width: 100,
          }}
          value={hour}
          onChange={hourChange}
        >
          <Option disabled value="Hour">
            Hour
          </Option>
          {hourNumber.map((hour, index) => (
            <Option key={index} value={hour}>
              {hour}
            </Option>
          ))}
        </Select>
        <Select
          defaultValue="Minutes"
          style={{
            width: 100,
          }}
          value={minutes}
          onChange={minutesChange}
        >
          <Option disabled value="Minutes">
            Minutes
          </Option>
          {minutesNumber.map((minutes, index) => (
            <Option key={index} value={minutes}>
              {minutes}
            </Option>
          ))}
        </Select>
        <Select
          defaultValue="Am-Pm"
          style={{
            width: 100,
          }}
          value={amPmOption}
          onChange={amPmChange}
        >
          <Option disabled value="Am-Pm">
            Am/Pm
          </Option>
          <Option value="AM">Am</Option>
          <Option value="PM">Pm</Option>
        </Select>
      </div>
      <Button
        onClick={setAlarm}
        size="large"
        className={`setAlarm-btn ${hasAlarm && "play"}`}
        type={hasAlarm ? "danger" : "primary"}
        style={{ marginTop: "20px" }}
      >
        {hasAlarm ? "Clear Alarm" : "Set Alarm"}
      </Button>
    </div>
  );
}

export default AlarmOption;
