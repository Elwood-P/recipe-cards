import React, { useState } from 'react';

import './App.scss';
import RecipeListProvider from '../store/RecipeListProvider';
import RecipeList from './recipes/RecipesList';
import RecipeEditForm from './recipes/RecipeEditForm';

function App() {
  const [isEditing, setIsEditing] = useState(true);

  const editRecipeHandler = () => {
    setIsEditing((isEditing) => !isEditing);
  };

  return (
    <RecipeListProvider>
      <div className="container">
        <RecipeList isEditing={isEditing} editRecipeHandler={editRecipeHandler} />
      </div>
      {isEditing && <RecipeEditForm />}
    </RecipeListProvider>
  );
}

export default App;
