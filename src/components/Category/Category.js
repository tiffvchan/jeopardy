import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./Category.scss";

const Category = ({ category, addToRevealed }) => {
  const [flipped, setFlipped] = useState(false);

  const handlesFlip = () => {
    setFlipped(true);
  };

  return (
    <div className="category">
      {flipped === false ? (
        <div className="category__name-wrap">
          <h2 className="category__name" onClick={handlesFlip}>
            Category
          </h2>
        </div>
      ) : (
        <div className="category__name-wrap">
          <h2
            className="category__name category__name--flipped"
            onClick={handlesFlip}
          >
            {category.category}INSERT FUN CAT HERE
          </h2>
        </div>
      )}
      {category.questions.map((card) => {
        return (
          <Card
            question={card.question}
            points={card.points}
            answer={card.answer}
            addToRevealed={addToRevealed}
          />
        );
      })}
    </div>
  );
};

export default Category;
