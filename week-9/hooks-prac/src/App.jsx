import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // Step 1: State to track remaining time
  const [timeLeft, setTimeLeft] = useState(10); // Timer starts at 10 seconds
  const [isRunning, setIsRunning] = useState(false); // To check if timer is running

  // Step 2: useEffect for countdown logic
  useEffect(() => {
    let interval;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1); // Decrease time every second
      }, 1000);
    } else if (timeLeft === 0) {
      // Stop the timer when it reaches 0
      setIsRunning(false);
    }

    // Cleanup function to clear interval when the timer stops or resets
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  // Step 3: Handle Start/Stop Button
  const startStopTimer = () => {
    if (isRunning) {
      // If the timer is running, stop it
      setIsRunning(false);
    } else {
      // Start the timer if it's stopped
      setTimeLeft(10); // Reset timer to 10 seconds when starting
      setIsRunning(true);
    }
  };

  // Step 4: Render the UI based on state
  return (
    <div className="App">
      <h1>Countdown Timer</h1>
      <p>{isRunning ? `Time Left: ${timeLeft}s` : "Timer Stopped"}</p>
      {timeLeft === 0 && !isRunning && <p>Time's Up!</p>}
      <button onClick={startStopTimer}>
        {isRunning ? "Stop Timer" : "Start Timer"}
      </button>
    </div>
  );
}

export default App;
