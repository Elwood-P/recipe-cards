import React from 'react';
import Recipe from './Recipe';
import Masonry from 'react-masonry-css';
import './RecipesList.css';

const RecipeList = ({ recipes }) => {
  const breakpoints = {
    default: 3,
    1040: 2,
    750: 1,
  };

  return (
    <Masonry breakpointCols={breakpoints} className="recipe-list" columnClassName="recipe-list__column">
      {recipes.map((recipe) => {
        return <Recipe key={recipe.id} {...recipe} />;
      })}
    </Masonry>
  );
};

export default RecipeList;
