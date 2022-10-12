import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./Category.scss";
import rallylogowdoc from "../../assets/img/rallylogowdoc.svg";
// import beer from "../../assets/icons/beer.svg";
// import whitelogo from "../../assets/img/brainstation-white.png";

const Category = ({ category, addToRevealed, currGame, useRoom }) => {
  const [flipped, setFlipped] = useState(false);

  const handlesFlip = () => {
    setFlipped(true);
  };

  useEffect(() => {
    setFlipped(false);
  }, [currGame]);

  return (
    <div className="category">
      {flipped === false ? (
        <div className="category__name-wrap">
          <img
            alt="front-logo"
            className="category__name-img"
            src={rallylogowdoc}
            onClick={handlesFlip}
          />
        </div>
      ) : (
        <div className="category__name-wrap">
          <h2
            className="category__name category__name--flipped"
            onClick={handlesFlip}
          >
            {category.category}
          </h2>
        </div>
      )}
      {category.questions.map((card, index) => {
        return (
          <Card
            key={index}
            question={card.question}
            points={card.points}
            answer={card.answer}
            dailydouble={card.dailydouble}
            addToRevealed={addToRevealed}
            timerDuration={10}
            currGame={currGame}
            useRoom={useRoom}
          />
        );
      })}
    </div>
  );
};

export default Category;
