import React, { useContext } from 'react';
import RecipeCard from './RecipeCard';
import Masonry from 'react-masonry-css';
import './RecipesList.css';
import NewRecipeCard from './NewRecipeCard';
import RecipeListContext from '../../store/RecipeListContext';

const RecipeList = ({ isEditing, editRecipeHandler }) => {
  const { recipes } = useContext(RecipeListContext);

  let breakpoints = {
    default: 3,
    1040: 2,
    750: 1,
  };
  if (isEditing) breakpoints = 1;

  return (
    <Masonry breakpointCols={breakpoints} className={`recipe-list ${isEditing && 'recipe-list--isediting'}`} columnClassName="recipe-list__column">
      {recipes.map((recipe) => {
        return <RecipeCard key={recipe.id} {...recipe} editRecipeHandler={editRecipeHandler} />;
      })}
      <NewRecipeCard />
    </Masonry>
  );
};

export default RecipeList;
