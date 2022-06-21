import React from 'react';

const RecipeListContext = React.createContext({
  recipes: [],
  setRecipes: () => {},
  addRecipeHandler: () => {},
  deleteRecipeHandler: () => {},
  isEditing: {},
  editRecipeHandler: () => {},
});

export default RecipeListContext;
