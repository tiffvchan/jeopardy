import React, { useState, useEffect } from "react";
import "./App.scss";
import Category from "./components/Category/Category";
import FinalJeopardy from "./components/FinalJeopardy/FinalJeopardy";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import data from "./data/data";
import finaljep from "./data/finaljep";
import introMusic from "./assets/music/intro.mp3";

function App() {
  console.log("final jep 1", finaljep);
  const [categories, setCategories] = useState(null);
  const [revealed, setRevealed] = useState([]);
  const [finalJeopardyStatus, setFinalJeopardyStatus] = useState(false);
  const [playIntro, setPlayIntro] = useState(false);

  const addToRevealed = () => {
    const newlyRevealed = [...revealed, revealed.length + 1];
    console.log("newlyRevealed", newlyRevealed);
    setRevealed(newlyRevealed);
  };

  const getRandomInt = () => {
    return Math.floor(Math.random() * Math.floor(5));
  };

  useEffect(() => {
    // WHEN ACTUALLY LAUNCHING THIS, CHANGE BACK TO SET TRUE
    setPlayIntro(false);

    let thingy = {};
    let counter = 0;
    do {
      thingy = data[getRandomInt()].questions[getRandomInt()];
      if (!thingy["dailydouble"]) {
        thingy["dailydouble"] = true;
        counter++;
      }
    } while (counter < 2);

    setCategories(data);
  }, []);

  useEffect(() => {
    if (revealed.length === 2) {
      setTimeout(() => {
        setFinalJeopardyStatus(true);
      }, 2000);
    }
  }, [finalJeopardyStatus, revealed]);

  // need reset for categories and for scoreboard

  return (
    <div className="app">
      <h1 className="app__heading">BrainStation Jeopardy</h1>
      {finalJeopardyStatus === true ? (
        <FinalJeopardy finalJeopardyQ={finaljep} />
      ) : (
        <div className="app__cards">
          {categories &&
            categories.map((category) => {
              return (
                <Category category={category} addToRevealed={addToRevealed} />
              );
            })}
        </div>
      )}

      <Scoreboard />
      {playIntro && <audio autoplay="autoplay" src={introMusic}></audio>}
    </div>
  );
}

export default App;
