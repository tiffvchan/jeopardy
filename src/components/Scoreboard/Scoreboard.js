import React from "react";
import "./scoreboard.scss";
import TeamScore from "../TeamScore/TeamScore";

const Scoreboard = ({ teams, submitHandler }) => {
  return (
    <>
      {teams && teams.length > 0 ? (
        <div className="scoreboard">
          {" "}
          {teams.map((team) => {
            return <TeamScore teamNumber={team} />;
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
