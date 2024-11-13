import React, { useEffect, useState } from "react";

function Digi() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  function formatTime() {
    const hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let amPm = hours >= 12 ? "PM" : "AM";

    return `${pre(hours)}:${pre(minutes)}:${pre(seconds)}${amPm}`;
  }

  function pre(num) {
    return num < 10 ? "0" + num : ""+num;
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

export default Digi;
