import React, { useContext } from 'react';
import { cloneDeep } from 'lodash';
import { v4 as uuid } from 'uuid';

import RecipeListContext from '../../../store/RecipeListContext';
import InstructionInputGroup from './InstructionInputGroup';

const InstructionsInputList = ({ instructions, recipeEditingIndex }) => {
  const { setRecipes } = useContext(RecipeListContext);

  const addInstructionHandler = (e) => {
    e.preventDefault();
    setRecipes((recipes) => {
      let updatedRecipes = cloneDeep(recipes);
      updatedRecipes[recipeEditingIndex].instructions.push({ id: uuid(), text: '' });
      return updatedRecipes;
    });
  };

  return (
    <div className="input-group">
      <h4>Instructions</h4>
      {instructions.map((instruction, index) => {
        return (
          <InstructionInputGroup
            key={'InstructionInputGroup' + instruction.id}
            instruction={instruction}
            instructionIndex={index}
            recipeEditingIndex={recipeEditingIndex}
          />
        );
      })}
      <button onClick={addInstructionHandler}>Add Instruction</button>
    </div>
  );
};

export default InstructionsInputList;
