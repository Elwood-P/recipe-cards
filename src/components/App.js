import React from 'react';

import './App.scss';
import RecipeListProvider from '../store/RecipeListProvider';
import RecipeList from './recipes/RecipesList';


function App() {

  return (
    <RecipeListProvider>
      <div className="container">
        <RecipeList />
      </div>
    </RecipeListProvider>
  );
}

export default App;
