import React, { useContext } from 'react';
import { cloneDeep } from 'lodash';
import { v4 as uuid } from 'uuid';
import SVG from 'react-inlinesvg';

import RecipeListContext from '../../../store/RecipeListContext';
import IngredientInputGroup from './IngredientInputGroup';

const IngredientsInputList = ({ ingredients }) => {
  const { setRecipes, isEditing } = useContext(RecipeListContext);

  const addIngredientHandler = (e) => {
    e.preventDefault();
    setRecipes((recipes) => {
      let updatedRecipes = cloneDeep(recipes);
      updatedRecipes[isEditing.index].ingredients.push({ id: uuid(), name: '', amount: '' });
      return updatedRecipes;
    });
  };

  return (
    <div className="form-section">
      <div className="form-row--ingredients">
        <h4 className="form-section__heading">Ingredient</h4>
        <h4 className="form-section__heading">Qty</h4>
      </div>
      {ingredients.map((ingredient, index) => {
        return (
          // <div key={'uniqye' + index}>Ingredient</div>
          <IngredientInputGroup
            key={'IngredientInputGroup' + ingredient.id}
            ingredient={ingredient}
            ingredientIndex={index}
          />
        );
      })}
      <div className="form-row--ingredients">
        <button className="form__button-add" onClick={addIngredientHandler}>
          <SVG src={'/icons/icon-x.svg'} />
        </button>
        <button className="form__button-add" onClick={addIngredientHandler}>
          <SVG src={'/icons/icon-x.svg'} />
        </button>
      </div>
    </div>
  );
};

export default IngredientsInputList;
