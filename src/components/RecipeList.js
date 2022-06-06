import React from 'react';
import Recipe from './Recipe';

const RecipeList = ({ recipes }) => {
  return (
    <>
      <div className="recipe-list">
        {recipes.map((recipe) => {
          return <Recipe key={recipe.id} {...recipe} />;
        })}
        <button className="btn">Add Recipe</button>
      </div>
    </>
  );
};

export default RecipeList;
