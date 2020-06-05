import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./Category.scss";
import whitelogo from "../../assets/img/brainstation-white.png";

const Category = ({ category, addToRevealed }) => {
  const [flipped, setFlipped] = useState(false);

  const handlesFlip = () => {
    setFlipped(true);
  };

  return (
    <div className="category">
      {flipped === false ? (
        <div className="category__name-wrap">
          <img
            className="category__name-img"
            src={whitelogo}
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
      {category.questions.map((card) => {
        return (
          <Card
            question={card.question}
            points={card.points}
            answer={card.answer}
            dailydouble={card.dailydouble}
            addToRevealed={addToRevealed}
            timerDuration={10}
          />
        );
      })}
    </div>
  );
};

export default Category;
