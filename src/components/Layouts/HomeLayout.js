import React from 'react';

import RecipeList from '../Recipes/RecipesList';
import './HomeLayout.css';

const HomeLayout = () => {
  return (
    <div className="home-layout">
      <header>
        <h1>Recipe Cards</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae lectus eget massa dignissim molestie
          accumsan ut lorem. Suspendisse lorem metus.
        </p>
      </header>
      <RecipeList />
    </div>
  );
};

export default HomeLayout;
