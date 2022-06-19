import React, { useContext } from 'react';

import './App.css';
import RecipeListContext from '../store/RecipeListContext';
import HomeLayout from './Layouts/HomeLayout';
import EditRecipeLayout from './Layouts/EditRecipeLayout';

function App() {
  const { isEditing, recipes } = useContext(RecipeListContext);
  return (
    <div className="page">
      {!isEditing.state && <HomeLayout />}
      {isEditing.state && <EditRecipeLayout recipe={recipes[isEditing.index]} />}
    </div>
  );
}

export default App;
