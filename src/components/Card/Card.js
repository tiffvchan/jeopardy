import React, { useState, useEffect } from "react";
import logo from "../../assets/img/brainstation.png";
import CardModal from "../CardModal/CardModal";
import "./Card.scss";

const Card = ({ question, points, answer, addToRevealed, timerDuration, dailydouble }) => {
  const [flipped, setFlipped] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("points");
  // const [dailyd, setDailyD] = useState(false)

  const handlesClick = () => {
    setIsOpen(true);
    setFlipped(true);
    // if (dailydouble) {
    //   setDailyD(true);
    // }
  };

  const handlesCardClick = () => {
    console.log("dailydouble check", dailydouble);
    if (status === "points" || dailydouble ) {
      setStatus("question");
    } else if (status === "question") {
      setStatus("answer");
    } else if (status === "answer") {
      setStatus("complete");
      // setCompleted(true);
      addToRevealed();
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {!flipped ? (
        <div className="card card--front card--points" onClick={handlesClick}>
          <p className="card__text">{`${points}`}</p>
        </div>
      ) : (
        <div
          className="card card--front card--completed"
          onClick={handlesClick}
        >
          <img className="card__image" src={logo} />
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

// {status === "question" && flipped === true ? (
//   <div className="card card--question" onClick={handlesClick}>
//     <p className="card__text">{question}</p>
//   </div>
// ) : status === "answer" && flipped === true ? (
//   <div className="card card--answer" onClick={handlesClick}>
//     <p className="card__text">{answer}</p>
//   </div>
// ) : status === "complete" && completed === true ? (
//   <div
//     className="card card--front card--completed"
//     onClick={handlesClick}
//   >
//     <img className="card__image" src={logo} />
//   </div>
// ) : (
//   <div className="card card--front card--points" onClick={handlesClick}>
//     <p className="card__text">{points}</p>
//   </div>
// )}
