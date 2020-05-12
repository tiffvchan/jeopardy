import React, { useState, useEffect } from "react";
import "./App.scss";
import data from "./data";

function App() {
  return (
    <>
      <h1 className="app__heading">BrainStation Jeopardy</h1>
      <div className="app__subheadings">
        {data.map((obj) => {
          if (obj !== data[0]) {
            return <h2 className="app__category-name">{obj.category}</h2>;
          }
        })}
      </div>
    </>
  );
}

export default App;
