import React from 'react';
import IngredientsList from './IngredientsList';
import InstructionsList from './InstructionsList';
import RecipeRating from './RecipeRating';
import Card from '../UI/Card';
import './RecipeCard.css';

const RecipeCard = (props) => {
  const { name, rating, cookTime, servings, instructions, ingredients } = props;

  return (
    <Card cName="recipe">
      <header>
        <h3 className="card__title">{name}</h3>
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
        <h4>Instructions</h4>
        <InstructionsList instructions={instructions} />
      </section>
      <section className="card__section">
        <h4 className="card__section-title">Ingredients</h4>
        <IngredientsList ingredients={ingredients} />
      </section>
      <div className="card__section card__action-footer">
        <button className="btn">Edit</button>
        <button className="btn">Delete</button>
      </div>
    </Card>
  );
};

export default RecipeCard;
