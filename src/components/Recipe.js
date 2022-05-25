import React from 'react';
import IngredientsList from './IngredientsList';
import InstructionsList from './InstructionsList';

const Recipe = (props) => {
  const { name, cookTime, servings, instructions, ingredients } = props;

  return (
    <div className="card recipe">
      <header>
        <h3 className="recipe__title">{name}</h3>
        <div className="recipe__btn-group">
          <button className="btn">Edit</button>
          <button className="btn">Delete</button>
        </div>
      </header>
      <section className="recipe__section">
        <h4>Cook Time</h4>
        <p>{cookTime}</p>
      </section>
      <section className="recipe__section">
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
    </div>
  );
};

export default Recipe;
