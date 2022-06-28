import React, { useContext, useRef } from 'react';
import { cloneDeep } from 'lodash';
import SVG from 'react-inlinesvg';

import RecipeListContext from '../../../store/RecipeListContext';

const InstructionInputGroup = ({ ingredient, ingredientIndex }) => {
  const { setRecipes, isEditing } = useContext(RecipeListContext);

  const deleteInstructionHandler = (e, idToDelete) => {
    e.preventDefault();
    setRecipes((recipes) => {
      let updatedRecipes = cloneDeep(recipes);
      const updatedIngredients = recipes[isEditing.index].ingredients.filter(
        (ingredient) => idToDelete !== ingredient.id
      );
      updatedRecipes[isEditing.index].ingredients = updatedIngredients;
      return updatedRecipes;
    });
  };

  const inputChangeHandler = (e, key) => {
    setRecipes((recipes) => {
      let updatedRecipes = cloneDeep(recipes);
      updatedRecipes[isEditing.index].ingredients[ingredientIndex][key] = e.target.value;
      return updatedRecipes;
    });
  };

  // Add Red border to input when hover del btn (not possible with css)
  const ingredientInput = useRef(null);
  const qtyInput = useRef(null);
  const deleteBtnMouseOverHandler = () => {
    ingredientInput.current.classList.add('input-group__input--deleting');
    qtyInput.current.classList.add('input-group__input--deleting');
  };
  const deleteBtnMouseLeaveHandler = () => {
    ingredientInput.current.classList.remove('input-group__input--deleting');
    qtyInput.current.classList.remove('input-group__input--deleting');
  };

  return (
    <div className="input-group form-row--ingredients">
      <input
        className="input-group__input"
        ref={ingredientInput}
        value={ingredient.name}
        onChange={(e) => inputChangeHandler(e, 'name')}
      />
      <div className="input-with-delete">
        <input
          className="input-group__input"
          ref={qtyInput}
          value={ingredient.amount}
          onChange={(e) => inputChangeHandler(e, 'amount')}
        />
        <button
          className="input-with-delete__button"
          onClick={(e) => deleteInstructionHandler(e, ingredient.id)}
          onMouseOver={deleteBtnMouseOverHandler}
          onMouseLeave={deleteBtnMouseLeaveHandler}
        >
          <SVG src={'/icons/icon-x.svg'} />
        </button>
      </div>
    </div>
  );
};

export default InstructionInputGroup;
