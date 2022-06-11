import React, { useContext } from 'react';
import './NewRecipeCard.css';
import Card from '../UI/Card';
import RecipeListContext from '../../store/RecipeListContext';

const NewRecipeCard = () => {
  const { addRecipeHandler } = useContext(RecipeListContext);

  return (
    <Card cName="new-recipe-card">
      <button onClick={addRecipeHandler}>Add New</button>
    </Card>
  );
};

export default NewRecipeCard;
