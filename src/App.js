import React, { useState, useEffect } from "react";
import "./App.scss";
import Category from "./components/Category/Category";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import data from "./data";

let loadCards = data.splice(1, data.length).map((card) => {
  if (card !== data[0]) return card;
});

let finalJeopardy = data.splice(0, 1);

function App() {
  const [categories, setCategories] = useState(loadCards);

  // need reset for categories and for scoreboard

  return (
    <div className="app">
      <h1 className="app__heading">BrainStation Jeopardy</h1>
      <div className="app__cards">
        {categories.map((category) => {
          return <Category category={category} />;
        })}
      </div>

      <Scoreboard />
    </div>
  );
}

export default App;
