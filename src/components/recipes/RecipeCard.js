import React, { useContext, useCallback } from 'react';
import IngredientsList from './IngredientsList';
import InstructionsList from './InstructionsList';
import RecipeRating from './RecipeRating';
import Card from '../UI/Card';
import './RecipeCard.css';
import RecipeListContext from '../../store/RecipeListContext';

const RecipeCard = (props) => {
  const { id, name, rating, cookTime, servings, instructions, ingredients, editRecipeHandler, isEditing } = props;

  const cardRef = useCallback(
    (node) => {
      if (node !== null) {
        if (isEditing.id === id) node.scrollIntoView({ block: 'center' }); //TODO: Needs polyfill - https://github.com/magic-akari/seamless-scroll-polyfill
      }
    },
    [isEditing, id]
  );

  const { deleteRecipeHandler } = useContext(RecipeListContext);

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
      <div className="card__section card__action-footer">
        <button className="btn" onClick={() => editRecipeHandler(id)}>
          Edit
        </button>
        <button className="btn" onClick={() => deleteRecipeHandler(id)}>
          Delete
        </button>
      </div>
    </Card>
  );
};

export default RecipeCard;
