import React from "react";
import Card from "../Card/Card";

const Category = ({ category }) => {
  return (
    <div className="category">
      <h2 className="category__name">{category.category}</h2>
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
