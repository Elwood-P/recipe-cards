import React, { useContext } from 'react';
import { cloneDeep } from 'lodash';

import RecipeListContext from '../../../store/RecipeListContext';

const InstructionInputGroup = ({ instruction, recipeEditingIndex, instructionIndex }) => {
  const { setRecipes } = useContext(RecipeListContext);

  const deleteInstructionHandler = (e, idToDelete) => {
    e.preventDefault();
    setRecipes((recipes) => {
      let updatedRecipes = cloneDeep(recipes);
      const updatedInstructions = recipes[recipeEditingIndex].instructions.filter((instruction) => idToDelete !== instruction.id);
      updatedRecipes[recipeEditingIndex].instructions = updatedInstructions;
      return updatedRecipes;
    });
  };

  const inputChangeHandler = (e) => {
    setRecipes((recipes) => {
      let updatedRecipes = cloneDeep(recipes);
      updatedRecipes[recipeEditingIndex].instructions[instructionIndex].text = e.target.value;
      return updatedRecipes;
    });
  };

  return (
    <div className="input-group">
      <input value={instruction.text} onChange={(e) => inputChangeHandler(e)} />
      <button onClick={(e) => deleteInstructionHandler(e, instruction.id)}>Delete</button>
    </div>
  );
};

export default InstructionInputGroup;
