import React, { useState } from "react";
import "./teamscore.scss";

const TeamScore = ({ teamNumber, teamScore }) => {
  const [points, setPoints] = useState();
  const [teamName, setTeamName] = useState("");

  const pointsEntered = (e) => {
    e.preventDefault();
    console.log("input value", e.target.value);
    setPoints(parseInt(e.target.value));
  };

  const submitName = (e) => {
    e.preventDefault();
    setTeamName(e.target.name.value);
    e.target.reset();
  };
  return (
    <>
      <div className="teamscore">
        <h1 className="teamscore__heading">{teamNumber}</h1>
        {teamName && teamName !== "" ? (
          <h2 className="teamscore__customName">{teamName}</h2>
        ) : (
          <div className="teamscore__customName">
            <form onSubmit={submitName}>
              <label htmlFor="teamscore__name">Enter Team Name</label>
              <input id="teamscore__name" type="text" name="name" required />
              <button type="submit">Enter</button>
            </form>
          </div>
        )}

        <p className="teamscore__score">{teamScore}</p>
        <button>-</button>
        <input type="number" onChange={pointsEntered} required />
        <button>+</button>
      </div>
    </>
  );
};

export default TeamScore;
