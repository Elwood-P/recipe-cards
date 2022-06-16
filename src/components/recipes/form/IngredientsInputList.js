import React, { useContext } from 'react';
import { cloneDeep } from 'lodash';
import { v4 as uuid } from 'uuid';

import RecipeListContext from '../../../store/RecipeListContext';
import IngredientInputGroup from './IngredientInputGroup';

const IngredientsInputList = ({ ingredients, recipeEditingIndex }) => {
  const { setRecipes } = useContext(RecipeListContext);

  const addIngredientHandler = (e) => {
    e.preventDefault();
    setRecipes((recipes) => {
      let updatedRecipes = cloneDeep(recipes);
      updatedRecipes[recipeEditingIndex].ingredients.push({ id: uuid(), name: '', amount: '' });
      return updatedRecipes;
    });
  };

  return (
    <div className="input-group">
      <h4>Ingredients</h4>
      {ingredients.map((ingredient, index) => {
        return (
          // <div key={'uniqye' + index}>Ingredient</div>
          <IngredientInputGroup
            key={'IngredientInputGroup' + ingredient.id}
            ingredient={ingredient}
            ingredientIndex={index}
            recipeEditingIndex={recipeEditingIndex}
          />
        );
      })}
      <button onClick={addIngredientHandler}>Add Ingredient</button>
    </div>
  );
};

export default IngredientsInputList;
