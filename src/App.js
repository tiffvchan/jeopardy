import React, { useState, useEffect } from "react";
import "./App.scss";
import Card from "./components/Card/Card";
import Category from "./components/Category/Category";
import data from "./data";

let loadCards = data.splice(1, data.length).map((card) => {
  if (card !== data[0]) return card;
});

function App() {
  const [categories, setCategories] = useState(loadCards);

  useEffect(() => {
    // data.shift();
  }, []);

  return (
    <>
      <h1 className="app__heading">BrainStation Jeopardy</h1>
      <div className="app__cards">
        {categories.map((category) => {
          return <Category category={category} />;
        })}
      </div>
    </>
  );
}

export default App;
