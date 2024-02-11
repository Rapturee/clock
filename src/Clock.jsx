import React, { useEffect, useState } from "react";

export default function Clock({ city, timeZone }) {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      const t = new Date().toLocaleTimeString("en-GB", {
        timeZone: `${timeZone}`,
      });
      setTime(t);
    }, 1000);
  }, []);

  return (
    <div className="time">
      <h1>
        City: {city} <br />
        Time Zone: {timeZone}
        <br />
        {time}
      </h1>
    </div>
  );
}
