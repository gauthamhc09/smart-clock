import React from "react";
import Alaram from "../components/pages/Alaram";
import Countdown from "../components/pages/Countdown";
import StopWatch from "../components/pages/StopWatch";

const Home = () => {
  return (
    <div>
      <StopWatch />
      <Countdown />
      <Alaram />
    </div>
  );
};

export default Home;
