import React from 'react';
import { v4 as uuid } from 'uuid';
import SVG from 'react-inlinesvg';

import './RecipeRating.css';

const RecipeRating = ({ rating }) => {
  const printStars = () => {
    let starsContent = [];
    for (let i = 0; i < 5; i++) {
      let starClass;
      i < rating ? (starClass = 'star--on') : (starClass = 'star--off');
      starsContent.push(<SVG key={uuid()} src={'/icons/icon-star.svg'} className={`star ${starClass}`} />);
    }
    return starsContent;
  };

  return <div className="recipe__rating">{printStars()}</div>;
};

export default RecipeRating;
