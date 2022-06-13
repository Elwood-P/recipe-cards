import React from 'react';

const RecipeListContext = React.createContext({
  recipes: [],
  addRecipeHandler: () => {},
  deleteRecipeHandler: (idToDelete) => {},
  isEditing: {},
  editRecipeHandler: () => {},
});

export default RecipeListContext;
