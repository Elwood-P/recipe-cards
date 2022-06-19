import React from 'react';

import './EditRecipeLayout.css';
import RecipeCard from '../Recipes/RecipeCard';
import RecipeEditForm from '../Recipes/RecipeEditForm/RecipeEditForm';

const EditRecipeLayout = ({ recipe }) => {

  return (
    <div class="edit-page-container">
      <RecipeCard {...recipe} />
      <RecipeEditForm {...recipe} />
    </div>
  );
};

export default EditRecipeLayout;
