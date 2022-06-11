import React from 'react';

const RecipeListContext = React.createContext({
  recipes: [],
  addRecipeHandler: () => {},
  deleteRecipeHandler: (idToDelete) => {},
});

export default RecipeListContext;