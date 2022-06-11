import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import RecipeListContext from './RecipeListContext';
import DUMMY_RECIPES from '../data/data';

const RecipeListProvider = (props) => {
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
    recipes: recipes,
    addRecipeHandler: addRecipeHandler,
    deleteRecipeHandler: deleteRecipeHandler,
  };

  return <RecipeListContext.Provider value={recipeListContextValue}>{props.children}</RecipeListContext.Provider>;
};

export default RecipeListProvider;
