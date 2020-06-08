import React, { useState } from "react";
import "./CardFinalJ.scss";
import CardTimer from "../CardTimer/CardTimer";

const CardFinalJ = ({ finalJeopardyQ }) => {
  console.log("final jeopardy q", finalJeopardyQ);
  const [status, setStatus] = useState("final");

  const handlesClick = () => {
    if (status === "final") {
      setStatus("category");
    } else if (status === "category") {
      setStatus("question");
    } else if (status === "question") {
      setStatus("timer");
    } else if (status === "timer") {
      setStatus("answer");
    }
  };

  return (
    <>
      {status === "final" ? (
        <div className="cardfinal" onClick={handlesClick}>
          <p className="cardfinal__text cardfinal__text--final">
            FINAL JEOPARDY
          </p>
        </div>
      ) : status === "category" ? (
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
