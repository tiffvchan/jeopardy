import React, { useState, useEffect } from "react";
import "./scoreboard.scss";
import TeamScore from "../TeamScore/TeamScore";

const Scoreboard = () => {
  // const [teamScores, setTeamScores] = useState();
  const [teams, setTeams] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    let teamsArr = [];
    for (let i = 0; i < parseInt(e.target.numberTeams.value); i++) {
      teamsArr.push({
        ["team" + (i + 1)]: 0,
      });
    }
    setTeams(teamsArr);
    e.target.reset();
  };

  const test = () => {
    console.log("teams", teams);
  };

  test();

  return (
    <>
      {teams && teams.length > 0 ? (
        <div className="scoreboard">
          {teams.map((obj) => {
            return (
              <TeamScore
                teamNumber={Object.keys(obj)[0]}
                teamScore={Object.values(obj)[0]}
              />
            );
          })}
        </div>
      ) : (
        teams.length === 0 && (
          <div className="scoreboard scoreboard--form">
            <form onSubmit={submitHandler}>
              <label htmlFor="app__teams">Enter Number of Teams</label>
              <input
                id="app__teams"
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
