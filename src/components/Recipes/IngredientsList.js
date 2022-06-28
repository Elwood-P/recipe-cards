import React from 'react';
import './IngredientsList.css';

const IngredientsList = ({ ingredients }) => {
  return (
    <ul className="ingredients-list">
      {ingredients.map((ingredient) => {
        return (
          <li className="ingredients-list__item" key={ingredient.id}>
            <span>{ingredient.name ? ingredient.name : '\xa0'}</span>
            <span>{ingredient.amount ? ingredient.amount : '\xa0'}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default IngredientsList;
