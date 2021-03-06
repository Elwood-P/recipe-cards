import React from 'react';

import RecipesList from '../Recipes/RecipesList';
import './HomeLayout.css';

const HomeLayout = () => {
  return (
    <div className="home-layout">
      <header className="hero">
        <h1 className="hero__heading">Recipe Cards</h1>
        <p className="hero__text">
          A place to store your recipes.
        </p>
      </header>
      <RecipesList />
    </div>
  );
};

export default HomeLayout;
