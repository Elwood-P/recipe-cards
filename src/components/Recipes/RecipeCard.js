import React, { useContext, useRef, useEffect } from 'react';

import IngredientsList from './IngredientsList';
import InstructionsList from './InstructionsList';
import RecipeRating from './RecipeRating';
import Card from '../UI/Card';
import IconButton from '../UI/IconButton';
import RecipeListContext from '../../store/RecipeListContext';
import './RecipeCard.css';

const RecipeCard = (props) => {
  const { id, name, rating, cookTime, servings, instructions, ingredients } = props;
  const { editRecipeHandler, isEditing, setIsModal } = useContext(RecipeListContext);
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current && isEditing.id === id) {
      window.requestAnimationFrame(() => {
        cardRef.current.scrollIntoView({ block: 'center' });
      });
    }
  }, [isEditing, id]);

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
            cName={`icon-button--card ${isEditing.state ? 'icon-button--on' : ''}`}
            iconName="icon-pencil"
            clickHandler={() => editRecipeHandler(id)}
          />
          <IconButton
            cName="icon-button--card"
            iconName="icon-x"
            clickHandler={() => setIsModal(id)}
          />
        </div>
      </div>
    </Card>
  );
};

export default RecipeCard;
