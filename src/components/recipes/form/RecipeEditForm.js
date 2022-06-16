import React, { useContext } from 'react';
import { cloneDeep } from 'lodash';

import RecipeListContext from '../../../store/RecipeListContext';
import InstructionsInputList from './InstructionsInputList';
import IngredientsInputList from './IngredientsInputList';
import './RecipeEditForm.css';


const RecipeEditForm = () => {
  const { recipes, isEditing, setRecipes } = useContext(RecipeListContext);

  const recipeEditingIndex = recipes.findIndex((recipe) => recipe.id === isEditing.id);

  const inputChangeHandler = (e, recipeKey) => {
    setRecipes((recipes) => {
      let updatedRecipes = cloneDeep(recipes);
      updatedRecipes[recipeEditingIndex][recipeKey] = e.target.value;
      return updatedRecipes;
    });
  };

  return (
    <div className="form-container">
      <form className="form form--recipe">
        <div className="input-group">
          <label className="input-group__label" htmlFor="form--recipe__name-input">
            Recipe Title
          </label>
          <input
            className="input-group__input"
            type="text"
            id="form--recipe__name-input"
            value={recipes[recipeEditingIndex].name}
            onChange={(e) => inputChangeHandler(e, 'name')}
          />
        </div>
        <div className="input-group">
          <label className="input-group__label" htmlFor="form--recipe__rating-input">
            Rating
          </label>
          <input
            className="input-group__input"
            id="form--recipe__rating-input"
            type="number"
            min="0"
            max="5"
            value={recipes[recipeEditingIndex].rating}
            onChange={(e) => inputChangeHandler(e, 'rating')}
          />
        </div>
        <div className="input-group">
          <label className="input-group__label" htmlFor="form--recipe__time-input">
            Cook Time
          </label>
          <input
            className="input-group__input"
            type="text"
            id="form--recipe__time-input"
            value={recipes[recipeEditingIndex].cookTime}
            onChange={(e) => inputChangeHandler(e, 'cookTime')}
          />
        </div>
        <div className="input-group">
          <label className="input-group__label" htmlFor="form--recipe__servings-input">
            Servings
          </label>
          <input
            className="input-group__input"
            id="form--recipe__servings-input"
            type="number"
            min="1"
            max="20"
            value={recipes[recipeEditingIndex].servings}
            onChange={(e) => inputChangeHandler(e, 'servings')}
          />
        </div>
        <InstructionsInputList instructions={recipes[recipeEditingIndex].instructions} recipeEditingIndex={recipeEditingIndex} />
        <IngredientsInputList ingredients={recipes[recipeEditingIndex].ingredients} recipeEditingIndex={recipeEditingIndex} />
      </form>
    </div>
  );
};

export default RecipeEditForm;
