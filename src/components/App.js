import React, { useState } from 'react';

import { v4 as uuid } from 'uuid';

import DUMMY_RECIPES from '../data/data';
import RecipeList from './recipes/RecipesList';
import './App.scss';

export const RecipeListContext = React.createContext();

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

  const recipeListContextValue = {
    addRecipeHandler: addRecipeHandler,
    deleteRecipeHandler: deleteRecipeHandler,
  }

  return (
    <RecipeListContext.Provider value={recipeListContextValue}>
      <div className="container">
        <RecipeList deleteRecipeHandler={deleteRecipeHandler} recipes={recipes} />
      </div>
    </RecipeListContext.Provider>
  );
}

export default App;
