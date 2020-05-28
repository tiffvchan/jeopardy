import React, { useState, useEffect } from "react";
import "./CardTimer.scss";

const CardTimer = () => {
  const [timer, setTimer] = useState(10);

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
    </div>
  );
};

export default CardTimer;
