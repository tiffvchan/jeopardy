import React from "react";
import "./ButtonSwitchGame.scss";

const ButtonSwitchGame = ({ gameNum, handlesClick, currGame }) => {
  return (
    <>
      <button
        className={`buttonswitchgame ${
          currGame === gameNum ? "buttonswitchgame__activeGame" : ""
        }`}
        onClick={() => handlesClick(gameNum)}
      >
        Game {gameNum + 1}
      </button>
    </>
  );
};

export default ButtonSwitchGame;
