import React, { useContext } from 'react';
import './NewRecipeCard.css';
import Card from '../UI/Card';
import { RecipeListContext } from '../App';

const NewRecipeCard = () => {
  const { addRecipeHandler } = useContext(RecipeListContext);

  return (
    <Card cName="new-recipe-card">
      <button onClick={addRecipeHandler}>Add New</button>
    </Card>
  );
};

export default NewRecipeCard;
