import React from "react";

const StopWatchHistory = ({ storeTime }) => {
  return (
    <>
      <h4>StopWatch History</h4>
      {storeTime.length > 0 &&
        storeTime.map((time) => {
          const { milliSeconds, seconds, minutes, hours } = time;
          return (
            <div className="stopwatch_history">
              <span>{hours >= 10 ? hours : "0" + hours}</span>:
              <span>{minutes >= 10 ? minutes : "0" + minutes}</span>:
              <span>{seconds >= 10 ? seconds : "0" + seconds}</span>:
              <span>
                {milliSeconds >= 10 ? milliSeconds : "0" + milliSeconds}
              </span>
            </div>
          );
        })}
    </>
  );
};

export default StopWatchHistory;
