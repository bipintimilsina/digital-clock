import React, { useEffect, useState } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
      // console.log(time)
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();

    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  }

  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }
  return (
    <>
      <div className="clock-contain bg-blue-400 w-100 h-screen flex justify-center text-6xl flex-col items-center">
        <div className="clock ">
          <span className="">{formatTime()} </span>
        </div>
        <div>
          <h1>Digital Clock</h1>
        </div>
      </div>
    </>
  );
}

export default DigitalClock;
