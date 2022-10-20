import React from "react";
import AlaramClock from "../components/pages/AlaramClock";
import CountdownTimer from "../components/pages/CountdownTimer";
import StopWatch from "../components/pages/StopWatch";

const Home = () => {
  return (
    <div>
      <StopWatch />
      <CountdownTimer />
      <AlaramClock />
    </div>
  );
};

export default Home;
