import React from 'react';

import RecipeList from '../Recipes/RecipesList';
import './HomeLayout.css';

const HomeLayout = () => {
  return (
    <div className="home-layout">
      <header className="hero">
        <h1 className="hero__heading">Recipe Cards</h1>
        <p className="hero__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae lectus eget massa dignissim molestie
          accumsan ut lorem. Suspendisse lorem metus.
        </p>
      </header>
      <RecipeList />
    </div>
  );
};

export default HomeLayout;
