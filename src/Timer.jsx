import { useState, useEffect } from "react";
import "./App.css";

export default function Timer({ startTime }) {
  const [time, setTime] = useState(startTime);
  const [isPaused, setIsPaused] = useState(false);

  const pauseTimer = () => {
    setIsPaused(true);
  };

  const continueTimer = () => {
    setIsPaused(false);
  };

  useEffect(() => {
    if (!isPaused) {
      const intervalId = setInterval(() => {
        if (time === 0) {
          clearInterval(intervalId);
        } else {
          setTime((t) => t - 1);
        }
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [isPaused, time]);

  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;

  return (
    <div className="timer-container">
      <div className="timer">{minutes}:{seconds}</div>
      <div className="timer-buttons">
        <button className="timer-button" onClick={pauseTimer}>Pause Timer</button>
        <button className="timer-button" onClick={continueTimer}>Continue Timer</button>
      </div>
    </div>
  );
}