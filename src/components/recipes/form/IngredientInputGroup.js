import React, { useContext } from 'react';
import { cloneDeep } from 'lodash';

import RecipeListContext from '../../../store/RecipeListContext';

const InstructionInputGroup = ({ ingredient, ingredientIndex, recipeEditingIndex }) => {
  const { setRecipes } = useContext(RecipeListContext);

  const deleteInstructionHandler = (e, idToDelete) => {
      e.preventDefault();
      setRecipes((recipes) => {
        let updatedRecipes = cloneDeep(recipes);
        const updatedIngredients = recipes[recipeEditingIndex].ingredients.filter((ingredient) => idToDelete !== ingredient.id);
        updatedRecipes[recipeEditingIndex].ingredients = updatedIngredients;
        return updatedRecipes;
      });
  }

  const inputChangeHandler = (e, key) => {
      setRecipes((recipes) => {
        let updatedRecipes = cloneDeep(recipes);
        updatedRecipes[recipeEditingIndex].ingredients[ingredientIndex][key] = e.target.value;
        return updatedRecipes;
      });
  };

  return (
    <div className="input-group">
      <input value={ingredient.name} onChange={(e) => inputChangeHandler(e, 'name')} />
      <input value={ingredient.amount} onChange={(e) => inputChangeHandler(e, 'amount')} />
      <button onClick={(e) => deleteInstructionHandler(e, ingredient.id)}>Delete</button>
    </div>
  );
};

export default InstructionInputGroup;
