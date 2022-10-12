import React, { useState } from "react";
import TeamScore from "../TeamScore/TeamScore";
import "./Scoreboard.scss";
import resetIcon from "../../assets/icons/reset.svg";

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

  const pointsClickHandler = (teamNumber, points) => {
    let newArr = [...teamScores];
    newArr[teamNumber - 1] = newArr[teamNumber - 1] + parseInt(points);
    setTeamScores(newArr);
  };

  const resetClickHandler = () => {
    setTeamScores([]);
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
          <img
            alt="reset-icon"
            className="scoreboard__reset"
            onClick={resetClickHandler}
            src={resetIcon}
          ></img>
        </div>
      ) : (
        teamScores.length === 0 && (
          <div className="scoreboard">
            <form className="scoreboard__form" onSubmit={submitHandler}>
              <label className="scoreboard__label">Number of Teams</label>
              <div className="scoreboard__input-wrap">
                <input
                  className="scoreboard__input"
                  type="number"
                  name="numberTeams"
                  required
                />
                <button className="scoreboard__form-button" type="submit">
                  Enter
                </button>
              </div>
            </form>
          </div>
        )
      )}
    </>
  );
};

export default Scoreboard;
