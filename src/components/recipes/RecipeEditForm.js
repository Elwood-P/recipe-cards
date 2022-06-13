import React, { useContext } from 'react';
import { cloneDeep } from 'lodash';

import './RecipeEditForm.css';
import RecipeListContext from '../../store/RecipeListContext';

const RecipeEditForm = () => {
  const { recipes, isEditing, setRecipes } = useContext(RecipeListContext);

  const recipeEditingIndex = recipes.findIndex((recipe) => recipe.id === isEditing.id);

  const titleChangeHandler = (e) => {
    setRecipes((recipes) => {
      // return recipes.map((recipe, i) => {
      //   if (i === recipeEditingIndex) recipe.name = e.target.value;
      //   return recipe;
      // });
      let updatedRecipes = cloneDeep(recipes);
      updatedRecipes[recipeEditingIndex].name = e.target.value;
      return updatedRecipes;
    });
  };

  return (
    <div className="form-container">
      <form className="form form--recipe">
        <div className="input-group">
          <label className="input-group__label" htmlFor="form--recipe__title-input">
            Recipe Title
          </label>
          <input
            className="input-group__input"
            type="text"
            id="form--recipe__title-input"
            value={recipes[recipeEditingIndex].name}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="input-group">
          <label className="input-group__label" htmlFor="form--recipe__rating-input">
            Rating
          </label>
          <input className="input-group__input" id="form--recipe__rating-input" type="number" min="1" max="5" />
        </div>
        <div className="input-group">
          <label className="input-group__label" htmlFor="form--recipe__time-input">
            Cook Time
          </label>
          <input className="input-group__input" type="text" id="form--recipe__time-input" />
        </div>
        <div className="input-group">
          <label className="input-group__label" htmlFor="form--recipe__servings-input">
            Servings
          </label>
          <input className="input-group__input" id="form--recipe__servings-input" type="number" min="1" max="20" />
        </div>
      </form>
    </div>
  );
};

export default RecipeEditForm;
