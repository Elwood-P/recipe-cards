import React, { useContext } from 'react';
import RecipeCard from './RecipeCard';
import Masonry from 'react-masonry-css';
import './RecipesList.css';
import NewRecipeCard from './NewRecipeCard';
import RecipeListContext from '../../store/RecipeListContext';

const RecipesList = () => {
  const { recipes, isEditing } = useContext(RecipeListContext);

  let breakpoints = {
    default: 3,
    1040: 2,
    750: 1,
  };
  if (isEditing.state) breakpoints = 1;

  return (
    <div className="container">
      <Masonry
        breakpointCols={breakpoints}
        className={`recipe-list ${isEditing.state && 'recipe-list--isediting'}`}
        columnClassName="recipe-list__column"
      >
        {recipes.map((recipe) => {
          return <RecipeCard key={recipe.id} {...recipe} />;
        })}
        <NewRecipeCard />
      </Masonry>
    </div>
  );
};

export default RecipesList;
