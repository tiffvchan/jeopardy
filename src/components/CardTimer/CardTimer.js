import React, { useState, useEffect } from "react";
import "./CardTimer.scss";
import timesup from "../../assets/music/times-up.mp3";
import thinkingmusic from "../../assets/music/jeopardythinkmusic.mp3";

const CardTimer = ({ timerDuration }) => {
  const [timer, setTimer] = useState(timerDuration);
  const [finalJep, setFinalJep] = useState(false);

  useEffect(() => {
    if (timerDuration === 30) {
      setFinalJep(true);
    }
  }, []);

  useEffect(() => {
    timer > 0 &&
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);

    timer === 0 &&
      setTimeout(() => {
        setTimer("");
      }, 1000);
  }, [timer]);

  return (
    <div className="CardTimer">
      <p className="CardTimer__text">{timer}</p>
      {!finalJep && timer === "" && (
        <audio autoplay="autoplay" src={timesup}></audio>
      )}
      {finalJep && <audio autoplay="autoplay" src={thinkingmusic}></audio>}
    </div>
  );
};

export default CardTimer;
