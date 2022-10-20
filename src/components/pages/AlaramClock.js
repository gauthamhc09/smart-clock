import React, { useState, useEffect } from "react";
import DigitalClock from "../alaram/digitclock/DigitalClock";
import months from "../../utlis/data";
import Sound from "../../utlis/Sound/mixkit-casino-win-alarm-and-coins-1990.mp3";
import AlarmOption from "../alaram/AlarmOption";
import { Card, Col, Row } from "antd";

export const alarm = new Audio(Sound);
const AlaramClock = () => {
  const [hourDigital, setHourDigital] = useState("");
  const [minutesDigital, setMinutesDigital] = useState("");
  const [amPm, setAmPm] = useState("");
  const [dayNow, setDayNow] = useState("");
  const [monthNow, setMonthNow] = useState("");
  const [yearNow, setYearNow] = useState("");
  const [alarmTime, setAlarmTime] = useState("");
  const [hasAlarm, setHasAlarm] = useState(false);

  useEffect(() => {
    setInterval(() => {
      let date = new Date();

      let HH = date.getHours(),
        MM = date.getMinutes(),
        day = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear(),
        ampm;

      if (HH >= 12) {
        HH = HH - 12;
        ampm = "PM";
      } else {
        ampm = "AM";
      }

      if (HH === 0) HH = 12;
      if (HH < 10) HH = `0${HH}`;
      if (MM < 10) MM = `0${MM}`;

      setHourDigital(HH);
      setMinutesDigital(MM);
      setAmPm(ampm);
      setDayNow(day);
      setMonthNow(months[month]);
      setYearNow(year);
    }, 1000);
  }, []);

  if (alarmTime === `${hourDigital}:${minutesDigital} ${amPm}`) {
    alarm.play();
    alarm.loop = true;
  }

  const pauseAlarm = () => {
    alarm.pause();
    setAlarmTime("");
  };
  return (
    <div className="alarm_clock">
      <Card title="Alarm Clock">
        <Row>
          <Col span={24} style={{ margin: "0 auto" }}>
            <DigitalClock
              hourDigital={hourDigital}
              minutesDigital={minutesDigital}
              amPm={amPm}
              dayNow={dayNow}
              monthNow={monthNow}
              yearNow={yearNow}
            />
            <AlarmOption
              alarmTime={alarmTime}
              setAlarmTime={setAlarmTime}
              hasAlarm={hasAlarm}
              setHasAlarm={setHasAlarm}
              pauseAlarm={pauseAlarm}
            />
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default AlaramClock;
