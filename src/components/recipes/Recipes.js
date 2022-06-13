import React, { useContext } from 'react';

import RecipeList from './RecipesList';
import RecipeEditForm from './RecipeEditForm';

import RecipeListContext from '../../store/RecipeListContext';

const Recipes = () => {

  const { isEditing } = useContext(RecipeListContext);

  return (
    <>
      <div className="container">
        <RecipeList />
      </div>
      {isEditing.state && <RecipeEditForm />}
    </>
  );
};

export default Recipes;
