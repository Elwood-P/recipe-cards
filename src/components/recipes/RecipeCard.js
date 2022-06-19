import React, { useContext, useCallback } from 'react';

import IngredientsList from './IngredientsList';
import InstructionsList from './InstructionsList';
import RecipeRating from './RecipeRating';
import Card from '../UI/Card';
import IconButton from '../UI/IconButton';
import RecipeListContext from '../../store/RecipeListContext';
import './RecipeCard.css';

const RecipeCard = (props) => {
  const { id, name, rating, cookTime, servings, instructions, ingredients } = props;
  const { deleteRecipeHandler, editRecipeHandler, isEditing } = useContext(RecipeListContext);

  // Scroll to card being editted - https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node TODO: Understand useCallBack better. Differences between useEffect...
  const cardRef = useCallback(
    (node) => {
      if (node !== null) {
        // Wait for render - https://stackoverflow.com/a/28748160/1954838
        window.requestAnimationFrame(() => {
          if (isEditing.id === id) node.scrollIntoView({ block: 'center' }); //TODO: Needs polyfill - https://github.com/magic-akari/seamless-scroll-polyfill
        });
      }
    },
    [isEditing, id]
  );

  return (
    <Card ref={cardRef} cName="recipe">
      <header>
        <h3 className="card__title">{name ? name : '\xa0'}</h3>
      </header>
      <section className="card__section card__section--between">
        <h4 className="card__section-title">Rating</h4>
        <RecipeRating rating={rating} />
      </section>
      <section className="card__section card__section--between">
        <h4 className="card__section-title">Cook Time</h4>
        <p>{cookTime}</p>
      </section>
      <section className="card__section card__section--between">
        <h4 className="card__section-title">Servings</h4>
        <p>{servings}</p>
      </section>
      <section className="card__section">
        <h4 className="card__section-title">Instructions</h4>
        <InstructionsList instructions={instructions} />
      </section>
      <section className="card__section">
        <h4 className="card__section-title">Ingredients</h4>
        <IngredientsList ingredients={ingredients} />
      </section>
      <div className="card__section">
        <div className="card__action-footer">
          <IconButton
            cName="card__btn card__btn--edit"
            iconName="icon-pencil"
            clickHandler={() => editRecipeHandler(id)}
          />
          <IconButton
            cName="card__btn card__btn--delete"
            iconName="icon-x"
            clickHandler={() => deleteRecipeHandler(id)}
          />
        </div>
      </div>
    </Card>
  );
};

export default RecipeCard;
