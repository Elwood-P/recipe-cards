import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import RecipeListContext from './RecipeListContext';
import DUMMY_RECIPES from '../data/data';

const RecipeListProvider = (props) => {
  const LOCAL_STORAGE_KEY = 'recipeCards.recipeList';
  
  const [recipes, setRecipes] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? DUMMY_RECIPES);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  const editRecipeHandler = (id) => {
    setIsEditing((isEditing) => (!isEditing.state ? { id: id, state: true } : { id: id, state: false }));
  };

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
    isEditing: isEditing,
    editRecipeHandler: editRecipeHandler,
  };

  return <RecipeListContext.Provider value={recipeListContextValue}>{props.children}</RecipeListContext.Provider>;
};

export default RecipeListProvider;
