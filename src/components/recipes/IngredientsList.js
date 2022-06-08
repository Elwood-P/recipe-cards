import React from 'react';
import './IngredientsList.css';

const IngredientsList = ({ ingredients }) => {
  return (
    <ul className="ingredients-list">
      {ingredients.map((ingredient) => {
        return (
          <li className="ingredients-list__item" key={ingredient.id}>
            <span>{ingredient.name}</span>
            <span>{ingredient.amount}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default IngredientsList;
