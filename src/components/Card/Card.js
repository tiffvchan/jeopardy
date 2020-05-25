import React, { useState, useEffect } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import logo from "../../assets/img/brainstation.png";
import "./Card.scss";

const Card = ({ question, points, answer, addToRevealed }) => {
  const [status, setStatus] = useState("points");
  const [flipped, setFlipped] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handlesClick = () => {
    if (status === "points") {
      setStatus("question");
      setFlipped(true);
    } else if (status === "question") {
      setStatus("answer");
      setFlipped(true);
    } else if (status === "answer") {
      setStatus("complete");
      setCompleted(true);
      addToRevealed();
    }
  };

  return (
    <>
      {status === "question" && flipped === true ? (
        <div className="card card--question" onClick={handlesClick}>
          <p className="card__text">{question}</p>
        </div>
      ) : status === "answer" && flipped === true ? (
        <div className="card card--answer" onClick={handlesClick}>
          <p className="card__text">{answer}</p>
        </div>
      ) : status === "complete" && completed === true ? (
        <div
          className="card card--front card--completed"
          onClick={handlesClick}
        >
          <img className="card__image" src={logo} />
        </div>
      ) : (
        <div className="card card--front card--points" onClick={handlesClick}>
          <p className="card__text">{points}</p>
        </div>
      )}
    </>
  );
};

export default Card;
