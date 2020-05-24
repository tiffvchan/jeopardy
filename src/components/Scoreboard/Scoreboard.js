import React, { useState, useEffect } from "react";
import "./Scoreboard.scss";
import TeamScore from "../TeamScore/TeamScore";

const Scoreboard = () => {
  const [teamScores, setTeamScores] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    let teamsArr = [];
    for (let i = 0; i < parseInt(e.target.numberTeams.value); i++) {
      teamsArr.push(0);
    }
    setTeamScores(teamsArr);
    e.target.reset();
  };

  console.log("team scores", teamScores);

  const pointsClickHandler = (teamNumber, points) => {
    let newArr = [...teamScores];
    newArr[teamNumber - 1] = newArr[teamNumber - 1] + points;
    setTeamScores(newArr);
  };

  return (
    <>
      {teamScores.length > 0 ? (
        <div className="scoreboard">
          {teamScores.map((obj, i) => {
            return (
              <TeamScore
                teamNumber={i + 1}
                teamScore={teamScores[i]}
                pointsClickHandler={pointsClickHandler}
              />
            );
          })}
        </div>
      ) : (
        teamScores.length === 0 && (
          <div className="scoreboard scoreboard--form">
            <form onSubmit={submitHandler}>
              <label htmlFor="scoreboard__teams">Enter Number of Teams</label>
              <input
                id="scoreboard__teams"
                type="number"
                name="numberTeams"
                required
              />
              <button type="submit">Enter</button>
            </form>
          </div>
        )
      )}
    </>
  );
};

export default Scoreboard;
