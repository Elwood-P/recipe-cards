import React, { useState } from 'react';

import '../styles/normalize.css';
import '../styles/vars.css';
import './App.scss';

import DUMMY_RECIPES from '../data/data';
import RecipeList from './recipes/RecipesList';
import { v4 as uuid } from 'uuid';

function App() {
  const [recipes, setRecipes] = useState(DUMMY_RECIPES);

  const addRecipeHandler = () => {
    const newRecipe = {
      id: uuid(),
      name: '',
      rating: '',
      cookTime: '',
      servings: '',
      instructions: [],
      ingredients: [],
    };

    setRecipes((recipes) => {
      return [...recipes, newRecipe];
    });
  };

  const deleteRecipeHandler = (idToDelete) => {
    setRecipes((recipes) => {
      return recipes.filter((recipe) => idToDelete !== recipe.id);
    });
  };

  return (
    <>
      <div className="container">
        <RecipeList addRecipeHandler={addRecipeHandler} deleteRecipeHandler={deleteRecipeHandler} recipes={recipes} />
      </div>
    </>
  );
}

export default App;
