import React, { useContext } from 'react';
import SVG from 'react-inlinesvg';

import './NewRecipeCard.css';
import Card from '../UI/Card';
import RecipeListContext from '../../store/RecipeListContext';

const NewRecipeCard = () => {
  const { addRecipeHandler } = useContext(RecipeListContext);

  return (
    <div onClick={addRecipeHandler}>
      <Card cName="new-recipe-card">
        <button className="new-recipe-card__btn">
          <SVG src={'/icons/icon-x.svg'} />
        </button>
      </Card>
    </div>
  );
};

export default NewRecipeCard;
