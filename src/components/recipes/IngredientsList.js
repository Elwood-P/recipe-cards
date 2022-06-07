import React from 'react';

const IngredientsList = ({ ingredients }) => {
  return (
    <ul>
      {ingredients.map((ingredient) => {
        return (
          <li key={ingredient.id}>
            {ingredient.name}: {ingredient.amount}
          </li>
        );
      })}
    </ul>
  );
};

export default IngredientsList;
