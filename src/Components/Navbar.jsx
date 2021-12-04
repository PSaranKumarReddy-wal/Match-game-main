import { useState, useEffect } from "react";

const Navbar = ({ score, finalResult, wrongImage, reset, time, setTime }) => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(time - 1);
      console.log("wronimage::", wrongImage);
    }, 1000);

    if (time === 0) {
      console.log("timer out");

      console.log("inside if::", wrongImage);
      clearInterval(intervalId);
      finalResult();
    }

    return () => clearInterval(intervalId);
  }, [time]);

  return (
    <nav className="navbar">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          className="logo"
          alt="website logo"
        />
      </div>

      <div className="game-controls">
        <p className="score">Score : {score} </p>
        <div className="time-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer"
          />
          <p className="time">{time} sec</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
