import React from "react";
import CardFinalJ from "../CardFinalJ/CardFinalJ";

const FinalJeopardy = ({ finalJeopardyQ }) => {
  return (
    <>
      <CardFinalJ finalJeopardyQ={finalJeopardyQ} />
    </>

    // WHEN YOU MAKE THE CARD, PASS A DIFFERENT TIMER DURATION ... LONGER COUNT THE SONG
  );
};

export default FinalJeopardy;
