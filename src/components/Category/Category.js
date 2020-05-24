import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./Category.scss";

const Category = ({ category }) => {
  const [flipped, setFlipped] = useState(false);

  const handlesFlip = () => {
    setFlipped(true);
  };

  return (
    <div className="category">
      {flipped === false ? (
        <h2 className="category__name" onClick={handlesFlip}>
          Category
        </h2>
      ) : (
        <h2
          className="category__name category__name--flipped"
          onClick={handlesFlip}
        >
          {category.category}
        </h2>
      )}
      {category.questions.map((card) => {
        return (
          <Card
            question={card.question}
            points={card.points}
            answer={card.answer}
          />
        );
      })}
    </div>
  );
};

export default Category;
