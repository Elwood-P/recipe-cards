import React, { useContext } from 'react';
import { cloneDeep } from 'lodash';
import { v4 as uuid } from 'uuid';
import SVG from 'react-inlinesvg';

import RecipeListContext from '../../../store/RecipeListContext';
import InstructionInputGroup from './InstructionInputGroup';

const InstructionsInputList = ({ instructions }) => {
  const { setRecipes, isEditing } = useContext(RecipeListContext);

  const addInstructionHandler = (e) => {
    e.preventDefault();
    setRecipes((recipes) => {
      let updatedRecipes = cloneDeep(recipes);
      updatedRecipes[isEditing.index].instructions.push({ id: uuid(), text: '' });
      return updatedRecipes;
    });
  };

  return (
    <div className="form-section">
      <h4 className="form-section__heading">Instructions</h4>
      {instructions.map((instruction, index) => {
        return (
          <InstructionInputGroup
            key={'InstructionInputGroup' + instruction.id}
            instruction={instruction}
            instructionIndex={index}
          />
        );
      })}
      <button className="form__button-add" onClick={addInstructionHandler}>
        <SVG src={'/icons/icon-x.svg'} />
      </button>
    </div>
  );
};

export default InstructionsInputList;
