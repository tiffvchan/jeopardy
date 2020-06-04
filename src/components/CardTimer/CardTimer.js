import React, { useState, useEffect } from "react";
import "./CardTimer.scss";
import timesup from "../../assets/music/times-up.mp3";

const CardTimer = ({timerDuration}) => {
  const [timer, setTimer] = useState(timerDuration);

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
      {timer === "" && <audio autoplay="autoplay" src={timesup}></audio>}
    </div>
  );
};

export default CardTimer;
