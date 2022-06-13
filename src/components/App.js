import React from 'react';

import './App.scss';
import RecipeListProvider from '../store/RecipeListProvider';
import Recipes from './recipes/Recipes';

function App() {
  return (
    <RecipeListProvider>
      <Recipes />
    </RecipeListProvider>
  );
}

export default App;
