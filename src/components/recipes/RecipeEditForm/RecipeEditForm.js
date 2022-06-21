import React, { useContext } from 'react';
import { cloneDeep } from 'lodash';

import RecipeListContext from '../../../store/RecipeListContext';
import InstructionsInputList from './InstructionsInputList';
import IngredientsInputList from './IngredientsInputList';
import './RecipeEditForm.css';

const RecipeEditForm = (recipe) => {
  const { isEditing, setRecipes } = useContext(RecipeListContext);

  const inputChangeHandler = (e, recipeKey) => {
    setRecipes((recipes) => {
      let updatedRecipes = cloneDeep(recipes);
      updatedRecipes[isEditing.index][recipeKey] = e.target.value;
      return updatedRecipes;
    });
  };

  return (
    <form className="form form--recipe">
      <div className="form-section">
        <div className="input-group">
          <label className="input-group__label" htmlFor="form--recipe__name-input">
            Recipe Title
          </label>
          <input
            className="input-group__input"
            type="text"
            id="form--recipe__name-input"
            value={recipe.name}
            onChange={(e) => inputChangeHandler(e, 'name')}
          />
        </div>
      </div>
      <div className="form-section form-row">
        <div className="input-group input-group--rating">
          <label className="input-group__label" htmlFor="form--recipe__rating-input">
            Rating
          </label>
          <input
            className="input-group__input"
            id="form--recipe__rating-input"
            type="number"
            min="0"
            max="5"
            value={recipe.rating}
            onChange={(e) => inputChangeHandler(e, 'rating')}
          />
        </div>
        <div className="input-group input-group--cook-time">
          <label className="input-group__label" htmlFor="form--recipe__time-input">
            Cook Time
          </label>
          <input
            className="input-group__input"
            type="text"
            id="form--recipe__time-input"
            value={recipe.cookTime}
            onChange={(e) => inputChangeHandler(e, 'cookTime')}
          />
        </div>
        <div className="input-group input-group--servings">
          <label className="input-group__label" htmlFor="form--recipe__servings-input">
            Servings
          </label>
          <input
            className="input-group__input"
            id="form--recipe__servings-input"
            type="number"
            min="1"
            max="20"
            value={recipe.servings}
            onChange={(e) => inputChangeHandler(e, 'servings')}
          />
        </div>
      </div>
      <InstructionsInputList instructions={recipe.instructions} />
      <IngredientsInputList ingredients={recipe.ingredients} />
    </form>
  );
};

export default RecipeEditForm;
