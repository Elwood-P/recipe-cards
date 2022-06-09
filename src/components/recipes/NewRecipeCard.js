import React from 'react';
import './NewRecipeCard.css';
import Card from '../UI/Card';

const NewRecipeCard = ({ addRecipeHandler }) => {
  return (
    <Card cName="new-recipe-card">
      <button onClick={addRecipeHandler}>Add New</button>
    </Card>
  );
};

export default NewRecipeCard;
