import { Card, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import months from "../../utlis/data";
import Sound from "../../utlis/Sound/mixkit-casino-win-alarm-and-coins-1990.mp3";
import AlaramHistory from "../alaram/AlaramHistory";
import AlarmOption from "../alaram/AlarmOption";
import DigitalClock from "../alaram/digitclock/DigitalClock";
import "./AlaramClock.css";

export const alarm = new Audio(Sound);
const AlarmClock = () => {
  const [hourDigital, setHourDigital] = useState("");
  const [minutesDigital, setMinutesDigital] = useState("");
  const [amPm, setAmPm] = useState("");
  const [dayNow, setDayNow] = useState("");
  const [monthNow, setMonthNow] = useState("");
  const [yearNow, setYearNow] = useState("");
  const [alarmTime, setAlarmTime] = useState("");
  const [hasAlarm, setHasAlarm] = useState(false);
  const [storeAlarm, setStoreAlarm] = useState(["00:00:00"]);

  console.log("storeAlarm", storeAlarm);
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
          <Col xs={24} sm={16}>
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
              setStoreAlarm={setStoreAlarm}
            />
          </Col>
          {storeAlarm.length > 1 && (
            <Col>
              <AlaramHistory storeAlarm={storeAlarm} />
            </Col>
          )}
        </Row>
      </Card>
    </div>
  );
};

export default AlarmClock;
