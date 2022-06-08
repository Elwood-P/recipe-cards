import React from 'react';
import RecipeCard from './RecipeCard';
import Masonry from 'react-masonry-css';
import './RecipesList.css';
import NewRecipeCard from './NewRecipeCard';

const RecipeList = ({ recipes }) => {
  const breakpoints = {
    default: 3,
    1040: 2,
    750: 1,
  };

  return (
    <Masonry breakpointCols={breakpoints} className="recipe-list" columnClassName="recipe-list__column">
      {recipes.map((recipe) => {
        return <RecipeCard key={recipe.id} {...recipe} />;
      })}
      <NewRecipeCard />
    </Masonry>
  );
};

export default RecipeList;
