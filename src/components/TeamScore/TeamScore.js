import React from "react";
import "./teamscore.scss";

const TeamScore = ({ teamNumber, teamScore }) => {
  return (
    <>
      <div className="teamscore">
        <h1 className="teamscore__heading">{teamNumber}</h1>
        <p className="teamscore__score">{teamScore}</p>
      </div>
    </>
  );
};

export default TeamScore;
