import React, { useState, useEffect } from "react";
import logo from "../../assets/img/brainstation.png";
import CardModal from "../CardModal/CardModal";
import "./Card.scss";
// import toast from "../../assets/icons/toast.svg";
// import rallylogowdocfade from "../../assets/img/rallylogowdocfade.svg";

const Card = ({
  question,
  points,
  answer,
  addToRevealed,
  timerDuration,
  dailydouble,
  currGame,
}) => {
  const [flipped, setFlipped] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("points");

  const handlesClick = () => {
    setIsOpen(true);
    setFlipped(true);
  };

  useEffect(() => {
    setFlipped(false);
    setIsOpen(false);
    setStatus("points");
  }, [currGame]);

  const handlesCardClick = () => {
    if (status === "points" || dailydouble) {
      setStatus("question");
    }
    if (status === "question") {
      setStatus("timer");
    }
    if (status === "timer") {
      setStatus("answer");
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    if (status === "answer") {
      addToRevealed();
    }
  };

  return (
    <>
      {!flipped ? (
        <div className="card card--front card--points" onClick={handlesClick}>
          <p className="card__text">{points}</p>
        </div>
      ) : (
        <div
          className="card card--front card--completed"
          onClick={handlesClick}
        >
          <img className="card__image" alt="logo" src={logo} />
        </div>
      )}
      {isOpen && (
        <CardModal
          question={question}
          answer={answer}
          points={points}
          handlesCardClick={handlesCardClick}
          status={status}
          dailydouble={dailydouble}
          isOpen={isOpen}
          closeModal={closeModal}
          addToRevealed={addToRevealed}
          timerDuration={timerDuration}
        />
      )}
    </>
  );
};

export default Card;
