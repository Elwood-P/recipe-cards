import React, { useState, useEffect, useRef, useCallback } from 'react';
import { v4 as uuid } from 'uuid';

import RecipeListContext from './RecipeListContext';
import DUMMY_RECIPES from '../data/data';

const RecipeListProvider = (props) => {
  const LOCAL_STORAGE_KEY = 'recipeCards.recipeList';

  // const [recipes, setRecipes] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? DUMMY_RECIPES);
  const [recipes, setRecipes] = useState( DUMMY_RECIPES);
  const [isEditing, setIsEditing] = useState(false);
  const addedRecipe = useRef(false);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  // Function is wrapped in useCallback so it can be called with useEffect - https://typeofnan.dev/fix-function-makes-the-dependencies-of-useEffect-hook-change-on-every-render-warning-in-react/
  const editRecipeHandler = useCallback((id) => {
    setIsEditing((isEditing) =>
      !isEditing.state
        ? { id: id, index: recipes.findIndex((recipe) => recipe.id === id), state: true }
        : { ...isEditing, state: false }
    );
  }, [recipes, setIsEditing]);

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
    addedRecipe.current = newRecipe.id;
  };
  // Trigger editRecipeHandler only after new Recipe has been added
  useEffect(() => {
    if (addedRecipe.current) {
      editRecipeHandler(addedRecipe.current);
    }
    addedRecipe.current = null;
  }, [recipes, addedRecipe, editRecipeHandler]);

  const deleteRecipeHandler = (idToDelete) => {
    setRecipes((recipes) => {
      return recipes.filter((recipe) => idToDelete !== recipe.id);
    });
    setIsEditing((isEditing) => {
      isEditing.state = false;
      return isEditing;
    });
  };

  const recipeListContextValue = {
    recipes: recipes,
    addRecipeHandler: addRecipeHandler,
    deleteRecipeHandler: deleteRecipeHandler,
    isEditing: isEditing,
    editRecipeHandler: editRecipeHandler,
    setRecipes: setRecipes,
  };

  return <RecipeListContext.Provider value={recipeListContextValue}>{props.children}</RecipeListContext.Provider>;
};

export default RecipeListProvider;
