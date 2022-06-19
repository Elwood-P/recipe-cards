import React, { useContext, useRef } from 'react';
import { cloneDeep } from 'lodash';
import SVG from 'react-inlinesvg';

import RecipeListContext from '../../../store/RecipeListContext';

const InstructionInputGroup = ({ instruction, instructionIndex }) => {
  const { setRecipes, isEditing } = useContext(RecipeListContext);

  const deleteInstructionHandler = (e, idToDelete) => {
    e.preventDefault();
    setRecipes((recipes) => {
      let updatedRecipes = cloneDeep(recipes);
      const updatedInstructions = recipes[isEditing.index].instructions.filter(
        (instruction) => idToDelete !== instruction.id
      );
      updatedRecipes[isEditing.index].instructions = updatedInstructions;
      return updatedRecipes;
    });
  };

  const inputChangeHandler = (e) => {
    setRecipes((recipes) => {
      let updatedRecipes = cloneDeep(recipes);
      updatedRecipes[isEditing.index].instructions[instructionIndex].text = e.target.value;
      return updatedRecipes;
    });
  };

  // Add Red border to input when hover del btn (not possible with css)
  const instructionInput = useRef(null);
  const deleteBtnMouseOverHandler = () => {
    instructionInput.current.classList.add('input-group__input--deleting');
  };
  const deleteBtnMouseLeaveHandler = () => {
    instructionInput.current.classList.remove('input-group__input--deleting');
  };

  return (
    <div className="input-group">
      <div className="input-with-delete">
        <input className="input-group__input" ref={instructionInput} value={instruction.text} onChange={(e) => inputChangeHandler(e)} />
        <button className="input-with-delete__button" onClick={(e) => deleteInstructionHandler(e, instruction.id)} onMouseOver={deleteBtnMouseOverHandler} onMouseLeave={deleteBtnMouseLeaveHandler}><SVG src={'/icons/icon-x.svg'} /></button>
      </div>
    </div>
  );
};

export default InstructionInputGroup;
