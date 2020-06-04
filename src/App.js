import React, { useState, useEffect } from "react";
import "./App.scss";
import Category from "./components/Category/Category";
import FinalJeopardy from "./components/FinalJeopardy/FinalJeopardy";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import data from "./data";
import introMusic from "./assets/music/intro.mp3";

let loadCards = data.splice(1, data.length)

let finalJeopardyQ = data.splice(0, 1);

function App() {
  const [categories, setCategories] = useState(loadCards);
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
  }

  useEffect(() => {
    // WHEN ACTUALLY LAUNCHING THIS, CHANGE BACK TO SET TRUE
    setPlayIntro(false);
    // Add Daily Doubles at Random
    
    let randomCatOne = getRandomInt();
    let randomCardOne = getRandomInt();
    let randomCatTwo = getRandomInt();
    let randomCardTwo = getRandomInt();

    console.log("random cat, cards", randomCatOne, randomCardOne, randomCatTwo, randomCardTwo )

    loadCards.forEach (category => {
      if (loadCards[randomCatOne]) {
        loadCards[randomCatOne].questions[randomCardOne]["dailydouble"] = true
      }
      if (loadCards[randomCatTwo]) {
        loadCards[randomCatTwo].questions[randomCardTwo]["dailydouble"] = true
      }
      return loadCards
    })
    console.log("mount did it work", loadCards)
  }, []);

  useEffect(() => {
    if (revealed.length === 2) {
      setTimeout(() => {
        setFinalJeopardyStatus(true);
      }, 2000);
    }
  }, [finalJeopardyStatus, revealed]);

  console.log("finalJepQ", finalJeopardyQ);
  // need reset for categories and for scoreboard

  return (
    <div className="app">
      <h1 className="app__heading">BrainStation Jeopardy</h1>
      {finalJeopardyStatus === true ? (
        <FinalJeopardy finalJeopardyQ={finalJeopardyQ} />
      ) : (
        <div className="app__cards">
          {categories.map((category) => {
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
