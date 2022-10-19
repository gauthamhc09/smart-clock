import { Card } from "antd";
import React from "react";
const DisplayComponent = ({ time }) => {
  const { milliSeconds, seconds, minutes, hours } = time;
  const gridStyle = {
    width: "25%",
    textAlign: "center",
  };

  return (
    <>
      <Card>
        <Card.Grid style={gridStyle}>
          {hours >= 10 ? hours : "0" + hours}
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          {minutes >= 10 ? minutes : "0" + minutes}
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          {seconds >= 10 ? seconds : "0" + seconds}
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          {milliSeconds >= 10 ? milliSeconds : "0" + milliSeconds}
        </Card.Grid>
      </Card>
    </>
  );
};

export default DisplayComponent;
