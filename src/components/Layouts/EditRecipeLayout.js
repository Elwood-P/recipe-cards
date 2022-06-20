import React from 'react';

import './EditRecipeLayout.css';
import RecipeCard from '../Recipes/RecipeCard';
import RecipeEditForm from '../Recipes/RecipeEditForm/RecipeEditForm';

const EditRecipeLayout = ({ recipe }) => {
  return (
    <div className="edit-layout">
      <div className="edit-layout__card-column">
        <RecipeCard {...recipe} />
      </div>
      <div className="edit-layout__form-column">
        <RecipeEditForm {...recipe} />
      </div>
    </div>
  );
};

export default EditRecipeLayout;
