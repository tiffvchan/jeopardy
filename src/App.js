import React, { useState, useEffect } from "react";
import "./App.scss";
import Category from "./components/Category/Category";
import FinalJeopardy from "./components/FinalJeopardy/FinalJeopardy";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import data from "./data";

let loadCards = data.splice(1, data.length).map((card) => {
  if (card !== data[0]) return card;
});

let finalJeopardyQ = data.splice(0, 1);

function App() {
  const [categories, setCategories] = useState(loadCards);
  const [revealed, setRevealed] = useState([]);
  const [finalJeopardyStatus, setFinalJeopardyStatus] = useState(false);

  console.log("loadCards", loadCards);

  const addToRevealed = () => {
    const newlyRevealed = [...revealed, revealed.length + 1];
    console.log("newlyRevealed", newlyRevealed);
    setRevealed(newlyRevealed);
  };

  useEffect(() => {
    if (revealed.length === 20) {
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
    </div>
  );
}

export default App;
