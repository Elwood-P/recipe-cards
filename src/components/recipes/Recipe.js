import React from 'react';
import IngredientsList from './IngredientsList';
import InstructionsList from './InstructionsList';
import RecipeRating from './RecipeRating';
import Card from '../UI/Card';
import './Recipe.scss';

const Recipe = (props) => {
  const { name, rating, cookTime, servings, instructions, ingredients } = props;

  return (
    <Card cName="recipe">
      <header>
        <h3 className="recipe__title">{name}</h3>
      </header>
      <section className="recipe__section recipe__section--between">
        <h4>Rating</h4>
        <RecipeRating rating={rating} />
      </section>
      <section className="recipe__section recipe__section--between">
        <h4>Cook Time</h4>
        <p>{cookTime}</p>
      </section>
      <section className="recipe__section recipe__section--between">
        <h4>Servings</h4>
        <p>{servings}</p>
      </section>
      <section className="recipe__section">
        <h4>Instructions</h4>
        <InstructionsList instructions={instructions} />
      </section>
      <section className="recipe__section">
        <h4>Ingredients</h4>
        <IngredientsList ingredients={ingredients} />
      </section>
      <div className="recipe__section recipe__section--buttons">
        <button className="btn">Edit</button>
        <button className="btn">Delete</button>
      </div>
    </Card>
  );
};

export default Recipe;
