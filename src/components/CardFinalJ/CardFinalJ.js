import React, { useState, useEffect } from "react";
import "./CardFinalJ.scss";
import CardTimer from "../CardTimer/CardTimer";

const CardFinalJ = ({ finalJeopardyQ }) => {
  console.log("final jeopardy q", finalJeopardyQ);
  const [status, setStatus] = useState("category");

  const handlesClick = () => {
    if (status === "category") {
      setStatus("question");
    } else if (status === "question") {
      setStatus("timer");
    } else if (status === "timer") {
      setStatus("answer");
    }
  };

  return (
    <>
      {status === "category" ? (
        <div className="cardfinal cardfinal--category" onClick={handlesClick}>
          <p className="cardfinal__text cardfinal__text--category">
            {finalJeopardyQ.category.toUpperCase()}
          </p>
        </div>
      ) : status === "question" ? (
        <div className="cardfinal cardfinal--question" onClick={handlesClick}>
          <p className="cardfinal__text">
            {finalJeopardyQ.questions[0].question}
          </p>
        </div>
      ) : status === "timer" ? (
        <div
          className="cardfinal cardfinal--question cardfinal--timer"
          onClick={handlesClick}
        >
          <p className="cardfinal__text">
            {finalJeopardyQ.questions[0].question}
          </p>
          <CardTimer timerDuration={30} />
        </div>
      ) : (
        <div className="cardfinal cardfinal--answer" onClick={handlesClick}>
          <p className="cardfinal__text">
            {finalJeopardyQ.questions[0].answer}
          </p>
        </div>
      )}
    </>
  );
};

export default CardFinalJ;
